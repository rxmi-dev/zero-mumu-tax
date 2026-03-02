// frontend/src/components/RentRelief/RentRelief.jsx
import React, { useState } from 'react';
import api from '../../utils/api';
import { formatWithCommas, parseFormattedNumber, formatCurrency } from '../../utils/formatters';

const RentRelief = ({ isLoggedIn, creditBalance, setCreditBalance, restoreData, clearRestoreData, requireLogin, requireCredits }) => {
  const [rentAmount, setRentAmount] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showCreditPrompt, setShowCreditPrompt] = useState(false);

  const calculateRelief = async () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    if (creditBalance < 1) {
      setShowCreditPrompt(true);
      return;
    }

    const rent = parseFormattedNumber(rentAmount);
    if (rent <= 0) {
      setError('Please enter a valid rent amount');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.post('/api/v1/calculate/rent', { rent });
      
      if (response.data.success) {
        setCreditBalance(prev => prev - 1);
        setResult(response.data.data);
      } else {
        setError(response.data.error || 'Calculation failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="full-width-calculator">
      <div className="form-section" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>Rent Relief Calculator</h2>
        <p className="subtitle">Claim up to ₦500,000 deduction on your rent</p>

        <div className="info-card">
          <p>📌 If you pay rent for your home or shop, you can deduct 20% of your annual rent from your taxable income, up to ₦500,000.</p>
        </div>

        <div className="form-group">
          <label>How much rent do you pay per year? (₦)</label>
          <div className="input-wrapper">
            <span className="currency">₦</span>
            <input
              type="text"
              value={rentAmount}
              onChange={(e) => setRentAmount(formatWithCommas(e.target.value))}
              placeholder="e.g., 1,500,000"
            />
          </div>
          <small>Enter the total rent you pay in one year</small>
        </div>

        {rentAmount && parseFormattedNumber(rentAmount) > 0 && (
          <div className="preview-box">
            <span>20% of your rent: </span>
            <strong>{formatCurrency(parseFormattedNumber(rentAmount) * 0.2)}</strong>
            {parseFormattedNumber(rentAmount) * 0.2 > 500000 && (
              <div className="cap-notice">(Capped at ₦500,000)</div>
            )}
          </div>
        )}

        <button 
          className="calculate-btn" 
          onClick={calculateRelief}
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Calculate Rent Relief (1 credit)'}
        </button>

        {error && <div className="error-message">⚠️ {error}</div>}

        {result && (
          <div className="results-card">
            <h3>Your Rent Relief</h3>
            
            <div className="result-grid">
              <div className="result-item">
                <span>Annual Rent</span>
                <span>{formatCurrency(result.rent)}</span>
              </div>
              <div className="result-item">
                <span>20% of Rent</span>
                <span>{formatCurrency(result.rent * 0.2)}</span>
              </div>
              <div className="result-item">
                <span>Maximum Allowed</span>
                <span>{formatCurrency(result.max_relief)}</span>
              </div>
              <div className="result-item highlight">
                <span>Your Rent Relief</span>
                <span>{formatCurrency(result.relief)}</span>
              </div>
            </div>

            {result.is_capped && (
              <div className="cap-message">
                ⚠️ Your relief is capped at ₦500,000 (NTA 2025 limit)
              </div>
            )}

            <div className="tax-savings">
              <span>Estimated tax saving: </span>
              <strong>{formatCurrency(result.relief * 0.2)}</strong>
            </div>

            <div className="documents-required">
              <h4>📋 Keep these documents</h4>
              <ul>
                <li>Tenancy Agreement</li>
                <li>Rent Receipts</li>
                <li>Landlord's TIN (if available)</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .form-section { padding: 32px; background: rgba(26,30,36,0.95); border-radius: 24px; }
        h2 { margin: 0 0 8px 0; color: white; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        
        .info-card { padding: 16px; background: rgba(66,153,225,0.1); border-radius: 12px; margin-bottom: 24px; color: #CBD5E0; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; }
        .input-wrapper { position: relative; display: flex; align-items: center; }
        .currency { position: absolute; left: 12px; color: #A0AEC0; }
        .input-wrapper input { width: 100%; padding: 12px 12px 12px 40px; background: #2D3748; border: 1px solid #4A5568; border-radius: 8px; color: white; }
        small { display: block; margin-top: 4px; color: #A0AEC0; font-size: 12px; }
        
        .preview-box { padding: 12px; background: #2D3748; border-radius: 8px; margin-bottom: 20px; }
        .preview-box strong { color: #FFD700; margin-left: 5px; }
        .cap-notice { color: #DD6B20; font-size: 13px; margin-top: 5px; }
        
        .calculate-btn { width: 100%; padding: 14px; background: #48BB78; border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; }
        .calculate-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .error-message { margin-top: 20px; padding: 12px; background: rgba(221,107,32,0.1); border: 1px solid #DD6B20; border-radius: 8px; color: #FBD38D; }
        
        .results-card { margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; }
        .results-card h3 { margin: 0 0 20px 0; color: #4299E1; }
        
        .result-grid { display: grid; gap: 10px; margin-bottom: 20px; }
        .result-item { display: flex; justify-content: space-between; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px; }
        .result-item.highlight { background: rgba(72,187,120,0.2); border: 1px solid #48BB78; }
        
        .cap-message { padding: 12px; background: rgba(221,107,32,0.1); border-radius: 8px; color: #FBD38D; margin-bottom: 20px; }
        
        .tax-savings { text-align: center; padding: 15px; background: rgba(255,215,0,0.1); border-radius: 8px; margin-bottom: 20px; }
        .tax-savings span { color: #A0AEC0; }
        .tax-savings strong { color: #FFD700; font-size: 18px; margin-left: 5px; }
        
        .documents-required { padding: 15px; background: #2D3748; border-radius: 8px; }
        .documents-required h4 { margin: 0 0 10px 0; color: #CBD5E0; }
        .documents-required ul { margin: 0; padding-left: 20px; color: #A0AEC0; }
        .documents-required li { margin-bottom: 5px; }
      `}</style>
    </div>
  );
};

export default RentRelief;