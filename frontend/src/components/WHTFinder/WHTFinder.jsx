// frontend/src/components/WHTFinder/WHTFinder.jsx
import React, { useState } from 'react';
import api from '../../utils/api';
import { formatCurrency } from '../../utils/formatters';

const WHTFinder = ({ isLoggedIn, creditBalance, setCreditBalance, restoreData, clearRestoreData, requireLogin, requireCredits }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    payer_type: 'company_to_company',
    transaction_type: 'contract',
    amount: '1,000,000'
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showCreditPrompt, setShowCreditPrompt] = useState(false);

  const payerTypes = [
    { value: 'company_to_company', label: 'Company paying another company' },
    { value: 'company_to_individual', label: 'Company paying an individual' },
    { value: 'individual_to_company', label: 'Individual paying a company' }
  ];

  const transactionTypes = [
    { value: 'contract', label: 'Contract / Supply of goods' },
    { value: 'rent', label: 'Rent / Lease' },
    { value: 'interest', label: 'Interest on loans' },
    { value: 'dividend', label: 'Dividends' },
    { value: 'royalty', label: 'Royalties' },
    { value: 'professional', label: 'Professional fees (lawyer, consultant, etc.)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      // Format number with commas
      const rawValue = value.replace(/[^\d]/g, '');
      if (rawValue) {
        const num = parseInt(rawValue);
        setFormData({ ...formData, amount: num.toLocaleString() });
      } else {
        setFormData({ ...formData, amount: '' });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const validateStep = () => {
    if (currentStep === 1 && !formData.payer_type) {
      setError('Please select who is making the payment');
      return false;
    }
    if (currentStep === 2 && !formData.transaction_type) {
      setError('Please select the type of payment');
      return false;
    }
    setError('');
    return true;
  };

  const calculateWHT = async () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    if (creditBalance < 1) {
      setShowCreditPrompt(true);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.post('/api/v1/calculate/wht', {
        payer_type: formData.payer_type,
        transaction_type: formData.transaction_type,
        amount: parseFloat(formData.amount.replace(/,/g, '')) || 1000000
      });

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
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3].map(step => (
            <div 
              key={step} 
              className={`progress-step ${currentStep >= step ? 'completed' : ''}`}
              onClick={() => setCurrentStep(step)}
            >
              <div className={`step-indicator ${currentStep >= step ? 'active' : ''}`}>
                {step}
              </div>
              <div className="step-label">
                {step === 1 ? 'Who is paying?' : step === 2 ? 'What payment?' : 'Calculate WHT'}
              </div>
            </div>
          ))}
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>
      </div>

      <div className="form-section">
        <h2>Withholding Tax (WHT) Finder</h2>
        <p className="subtitle">Find the correct WHT rate for your transaction</p>

        {/* Step 1: Payer Type */}
        {currentStep === 1 && (
          <div className="step-content">
            <h3>Who is making the payment?</h3>
            
            <div className="options-grid">
              {payerTypes.map(type => (
                <div 
                  key={type.value} 
                  className={`option-card ${formData.payer_type === type.value ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, payer_type: type.value })}
                >
                  <div className="option-radio">
                    <div className={`radio-circle ${formData.payer_type === type.value ? 'checked' : ''}`}>
                      {formData.payer_type === type.value && <div className="radio-dot"></div>}
                    </div>
                  </div>
                  <div className="option-label">{type.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Transaction Type */}
        {currentStep === 2 && (
          <div className="step-content">
            <h3>What is the payment for?</h3>
            
            <div className="transaction-grid">
              {transactionTypes.map(type => (
                <div 
                  key={type.value} 
                  className={`transaction-card ${formData.transaction_type === type.value ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, transaction_type: type.value })}
                >
                  <div className="transaction-label">{type.label}</div>
                  {formData.transaction_type === type.value && (
                    <div className="selected-check">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Calculate */}
        {currentStep === 3 && (
          <div className="step-content">
            <h3>Calculate WHT Amount</h3>
            
            <div className="summary-card">
              <div className="summary-row">
                <span>Payer:</span>
                <strong>{payerTypes.find(t => t.value === formData.payer_type)?.label}</strong>
              </div>
              <div className="summary-row">
                <span>Payment type:</span>
                <strong>{transactionTypes.find(t => t.value === formData.transaction_type)?.label}</strong>
              </div>
            </div>

            <div className="form-group">
              <label>Payment amount (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="1,000,000"
                />
              </div>
              <small>Enter the total payment amount</small>
            </div>

            <button 
              className="calculate-btn" 
              onClick={calculateWHT}
              disabled={loading}
            >
              {loading ? 'Calculating...' : 'Calculate WHT (1 credit)'}
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="step-navigation">
          {currentStep > 1 && (
            <button className="secondary-btn" onClick={prevStep}>
              ← Back
            </button>
          )}
          {currentStep < 3 ? (
            <button className="primary-btn" onClick={nextStep}>
              Next →
            </button>
          ) : null}
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        {/* Results */}
        {result && (
          <div className="results-card">
            <div className="rate-display">
              <div className="rate-percentage">{result.rate}%</div>
              <div className="rate-description">Withholding Tax Rate</div>
            </div>

            <div className="result-details">
              <div className="detail-row">
                <span>Payment amount</span>
                <span>{formatCurrency(result.amount)}</span>
              </div>
              <div className="detail-row highlight">
                <span>WHT to deduct</span>
                <span>{formatCurrency(result.wht)}</span>
              </div>
              <div className="detail-row total">
                <span>Net payment</span>
                <span>{formatCurrency(result.net)}</span>
              </div>
            </div>

            <div className="info-box">
              <h4>📋 Important Reminders</h4>
              <ul>
                <li>Deduct WHT when you make the payment</li>
                <li>Remit to NRS within 21 days</li>
                <li>Give the payee a WHT certificate</li>
                <li>Keep records for 6 years</li>
              </ul>
            </div>
          </div>
        )}

        {/* Login/Credit Modals */}
        {showLoginPrompt && (
          <div className="modal-overlay">
            <div className="modal-card">
              <button className="close-btn" onClick={() => setShowLoginPrompt(false)}>✕</button>
              <div className="modal-icon">🔒</div>
              <h3>Login Required</h3>
              <p>The WHT Finder costs 1 credit. Please log in.</p>
              <div className="credit-note">💡 New users get 10 free credits!</div>
              <div className="modal-actions">
                <button onClick={() => setShowLoginPrompt(false)}>Cancel</button>
                <button onClick={() => { setShowLoginPrompt(false); requireLogin(); }}>Login</button>
              </div>
            </div>
          </div>
        )}

        {showCreditPrompt && (
          <div className="modal-overlay">
            <div className="modal-card">
              <button className="close-btn" onClick={() => setShowCreditPrompt(false)}>✕</button>
              <div className="modal-icon">⚠️</div>
              <h3>Insufficient Credits</h3>
              <p>You need 1 credit for this calculation.</p>
              <p className="balance">Your balance: {creditBalance} credits</p>
              <div className="modal-actions">
                <button onClick={() => setShowCreditPrompt(false)}>Cancel</button>
                <button onClick={() => { setShowCreditPrompt(false); requireCredits(1, calculateWHT); }}>Buy Credits</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .full-width-calculator { max-width: 800px; margin: 0 auto; }
        
        .progress-bar-container { margin-bottom: 30px; }
        .progress-steps { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .progress-step { text-align: center; flex: 1; cursor: pointer; opacity: 0.7; }
        .progress-step.completed { opacity: 1; }
        .step-indicator { 
          width: 30px; height: 30px; border-radius: 50%; background: #2D3748; 
          color: white; display: flex; align-items: center; justify-content: center; 
          margin: 0 auto 5px; font-weight: 600;
        }
        .step-indicator.active { background: #4299E1; }
        .step-label { font-size: 12px; color: #A0AEC0; }
        .progress-track { height: 4px; background: #2D3748; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #4299E1, #48BB78); transition: width 0.3s; }
        
        .form-section { 
          padding: 32px; background: #1A202C; border-radius: 24px; color: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h2 { margin: 0 0 8px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        
        .step-content h3 { margin: 0 0 20px 0; color: #FFD700; }
        
        .options-grid { display: flex; flex-direction: column; gap: 12px; }
        .option-card { 
          display: flex; align-items: center; gap: 12px; padding: 16px; 
          background: #2D3748; border: 1px solid #4A5568; border-radius: 12px;
          cursor: pointer; transition: all 0.2s;
        }
        .option-card:hover { border-color: #4299E1; background: #364153; }
        .option-card.selected { border-color: #4299E1; background: rgba(66,153,225,0.1); }
        .radio-circle { 
          width: 20px; height: 20px; border-radius: 50%; border: 2px solid #A0AEC0;
          display: flex; align-items: center; justify-content: center;
        }
        .radio-circle.checked { border-color: #4299E1; }
        .radio-dot { width: 10px; height: 10px; border-radius: 50%; background: #4299E1; }
        .option-label { color: white; }
        
        .transaction-grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
          gap: 12px; margin-top: 10px; 
        }
        .transaction-card { 
          padding: 20px; background: #2D3748; border: 1px solid #4A5568; 
          border-radius: 12px; text-align: center; cursor: pointer; position: relative;
          transition: all 0.2s;
        }
        .transaction-card:hover { border-color: #4299E1; transform: translateY(-2px); }
        .transaction-card.selected { 
          border-color: #FFD700; background: rgba(255,215,0,0.1);
          box-shadow: 0 4px 12px rgba(255,215,0,0.2);
        }
        .selected-check { 
          position: absolute; top: 8px; right: 8px; width: 20px; height: 20px;
          background: #FFD700; border-radius: 50%; color: black; font-weight: bold;
          display: flex; align-items: center; justify-content: center;
        }
        
        .summary-card { 
          padding: 16px; background: #2D3748; border-radius: 12px; margin-bottom: 20px;
        }
        .summary-row { 
          display: flex; justify-content: space-between; padding: 8px 0;
          border-bottom: 1px solid #4A5568;
        }
        .summary-row:last-child { border-bottom: none; }
        .summary-row span { color: #A0AEC0; }
        .summary-row strong { color: #FFD700; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; }
        .input-wrapper { position: relative; }
        .currency { 
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #A0AEC0; font-weight: 600;
        }
        .input-wrapper input { 
          width: 100%; padding: 12px 12px 12px 40px; background: #2D3748;
          border: 1px solid #4A5568; border-radius: 8px; color: white; font-size: 16px;
        }
        .input-wrapper input:focus { outline: none; border-color: #4299E1; }
        small { display: block; margin-top: 4px; color: #A0AEC0; font-size: 12px; }
        
        .step-navigation { 
          display: flex; justify-content: space-between; margin-top: 30px;
        }
        .secondary-btn { 
          padding: 12px 24px; background: transparent; border: 1px solid #4A5568;
          border-radius: 8px; color: white; cursor: pointer; font-weight: 500;
        }
        .secondary-btn:hover { background: #2D3748; }
        .primary-btn { 
          padding: 12px 24px; background: #4299E1; border: none; border-radius: 8px;
          color: white; cursor: pointer; font-weight: 600; margin-left: auto;
        }
        .primary-btn:hover { background: #3182CE; }
        .calculate-btn { 
          width: 100%; padding: 14px; background: #48BB78; border: none;
          border-radius: 8px; color: white; font-weight: 600; cursor: pointer;
          font-size: 16px;
        }
        .calculate-btn:hover { background: #38A169; }
        .calculate-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .error-message { 
          margin-top: 20px; padding: 12px; background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20; border-radius: 8px; color: #FBD38D;
        }
        
        .results-card { 
          margin-top: 30px; padding: 24px; background: #2D3748; border-radius: 16px;
        }
        .rate-display { 
          text-align: center; padding: 30px; background: #1A202C;
          border-radius: 12px; margin-bottom: 20px;
        }
        .rate-percentage { font-size: 64px; font-weight: 800; color: #FFD700; line-height: 1; }
        .rate-description { color: #A0AEC0; margin-top: 10px; }
        
        .result-details { margin-bottom: 20px; }
        .detail-row { 
          display: flex; justify-content: space-between; padding: 12px;
          border-bottom: 1px solid #4A5568;
        }
        .detail-row.highlight { 
          background: rgba(66,153,225,0.1); border-radius: 8px;
          border-bottom: none; margin: 10px 0;
        }
        .detail-row.total { 
          background: rgba(72,187,120,0.1); border-radius: 8px;
          border-bottom: none; font-weight: 600;
        }
        .detail-row span:last-child { color: #FFD700; font-weight: 600; }
        
        .info-box { 
          padding: 16px; background: #1A202C; border-radius: 8px;
          border-left: 4px solid #4299E1;
        }
        .info-box h4 { margin: 0 0 12px 0; color: #4299E1; }
        .info-box ul { margin: 0; padding-left: 20px; color: #CBD5E0; }
        .info-box li { margin-bottom: 8px; }
        
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; padding: 20px;
        }
        .modal-card {
          background: #1A202C; border-radius: 24px; padding: 32px;
          max-width: 400px; width: 100%; position: relative;
        }
        .close-btn {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: #A0AEC0; font-size: 20px;
          cursor: pointer;
        }
        .modal-icon { font-size: 48px; text-align: center; margin-bottom: 16px; }
        .modal-card h3 { text-align: center; margin: 0 0 8px 0; color: white; }
        .modal-card p { text-align: center; color: #CBD5E0; margin-bottom: 8px; }
        .balance { color: #FFD700 !important; font-weight: 600; }
        .credit-note { 
          text-align: center; padding: 12px; background: rgba(255,215,0,0.1);
          border-radius: 8px; color: #FFD700; margin: 20px 0;
        }
        .modal-actions { display: flex; gap: 12px; }
        .modal-actions button {
          flex: 1; padding: 12px; border-radius: 8px; cursor: pointer;
          font-weight: 600;
        }
        .modal-actions button:first-child {
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .modal-actions button:last-child {
          background: #4299E1; border: none; color: white;
        }
      `}</style>
    </div>
  );
};

export default WHTFinder;