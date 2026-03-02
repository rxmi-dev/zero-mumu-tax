// frontend/src/components/OptimizationTips/OptimizationTips.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const OptimizationTips = ({ creditBalance, setCreditBalance, onClose }) => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTip, setSelectedTip] = useState(null);
  const [implementedTips, setImplementedTips] = useState([]);

  const fetchTips = async () => {
    if (creditBalance < 3) {
      setError('You need 3 credits for tax optimization tips');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.get('/api/optimization-tips');
      
      if (response.data.success) {
        setTips(response.data.tips);
        setCreditBalance(response.data.new_balance);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load optimization tips');
    } finally {
      setLoading(false);
    }
  };

  const markImplemented = (tipIndex) => {
    setImplementedTips([...implementedTips, tipIndex]);
  };

  const getTotalPotentialSavings = () => {
    return tips.reduce((sum, tip) => sum + (tip.potential_savings || 0), 0);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="optimization-tips">
      <div className="tips-header">
        <h2>Tax Saving Tips</h2>
        <div className="credit-badge">3 credits</div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {tips.length === 0 && !loading && (
        <div className="welcome-screen">
          <div className="welcome-icon">💡</div>
          <h3>Get Personalized Tax Tips</h3>
          <p>Our system analyzes your tax situation and finds ways to help you save money.</p>
          <button 
            className="generate-btn"
            onClick={fetchTips}
            disabled={loading || creditBalance < 3}
          >
            {loading ? 'Analyzing...' : creditBalance < 3 ? 'Need 3 credits' : 'Get My Tips (3 credits)'}
          </button>
          {creditBalance < 3 && (
            <div className="insufficient-notice">
              You need 3 credits. <button className="buy-link" onClick={() => window.dispatchEvent(new CustomEvent('open-credit-modal'))}>Buy credits</button>
            </div>
          )}
        </div>
      )}

      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Analyzing your tax situation...</p>
        </div>
      )}

      {tips.length > 0 && (
        <>
          <div className="savings-summary">
            <div className="summary-icon">💰</div>
            <div className="summary-text">
              <span className="summary-label">Total Potential Savings</span>
              <span className="summary-amount">{formatCurrency(getTotalPotentialSavings())}</span>
            </div>
          </div>

          <div className="tips-list">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className={`tip-card ${implementedTips.includes(index) ? 'implemented' : ''}`}
                onClick={() => setSelectedTip(selectedTip === index ? null : index)}
              >
                <div className="tip-header">
                  <div className="tip-icon">
                    {tip.tip_type === 'pension' && '🏦'}
                    {tip.tip_type === 'rent' && '🏠'}
                    {tip.tip_type === 'nhis' && '🏥'}
                    {tip.tip_type === 'nhf' && '💧'}
                    {tip.tip_type === 'insurance' && '🛡️'}
                  </div>
                  <div className="tip-title">
                    <h4>{tip.title}</h4>
                    <p className="tip-preview">{tip.description.substring(0, 80)}...</p>
                  </div>
                  <div className="tip-savings-badge">
                    <span className="savings-amount">{formatCurrency(tip.potential_savings)}</span>
                    <span className="savings-label">potential savings</span>
                  </div>
                  <div className="tip-expand">
                    {selectedTip === index ? '▼' : '▶'}
                  </div>
                </div>

                {selectedTip === index && (
                  <div className="tip-details">
                    <p className="tip-description">{tip.description}</p>
                    
                    <div className="tip-actions">
                      {!implementedTips.includes(index) ? (
                        <button 
                          className="implement-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            markImplemented(index);
                          }}
                        >
                          ✓ Mark as Done
                        </button>
                      ) : (
                        <span className="implemented-badge">✅ Implemented</span>
                      )}
                    </div>

                    {tip.tip_type === 'pension' && (
                      <div className="tip-resources">
                        <h5>How to do this:</h5>
                        <ul>
                          <li>Contact your Pension Fund Administrator (PFA)</li>
                          <li>Request to increase your monthly contribution</li>
                          <li>Keep records of all contributions</li>
                        </ul>
                      </div>
                    )}

                    {tip.tip_type === 'rent' && (
                      <div className="tip-resources">
                        <h5>Documents you need:</h5>
                        <ul>
                          <li>Tenancy Agreement</li>
                          <li>Rent Receipts for the year</li>
                          <li>Landlord's Tax Identification Number (if available)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="tips-footer">
            <p className="disclaimer">
              ⚠️ These are estimates based on your tax information. Consult a tax professional for official advice.
            </p>
            <button 
              className="refresh-btn"
              onClick={fetchTips}
              disabled={loading}
            >
              ↻ Get New Tips (3 credits)
            </button>
          </div>
        </>
      )}

      <style>{`
        .optimization-tips {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 900px;
          margin: 0 auto;
          max-height: 90vh;
          overflow-y: auto;
        }
        .tips-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tips-header h2 {
          margin: 0;
          font-size: 24px;
          color: #4299E1;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
        }
        .welcome-screen {
          text-align: center;
          padding: 60px 40px;
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
        }
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.8;
        }
        .welcome-screen h3 {
          margin: 0 0 8px 0;
          font-size: 22px;
        }
        .welcome-screen p {
          color: #A0AEC0;
          margin-bottom: 24px;
        }
        .generate-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .generate-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .insufficient-notice {
          margin-top: 16px;
          color: #FF8C00;
        }
        .buy-link {
          background: none;
          border: none;
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }
        .loading-state {
          text-align: center;
          padding: 60px;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #4299E1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 16px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .savings-summary {
          background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05));
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .summary-icon {
          font-size: 48px;
        }
        .summary-text {
          flex: 1;
        }
        .summary-label {
          display: block;
          color: #A0AEC0;
          font-size: 14px;
          margin-bottom: 4px;
        }
        .summary-amount {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #FFD700;
        }
        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .tip-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
        .tip-card:hover {
          background: rgba(11,79,108,0.1);
          border-color: #4299E1;
        }
        .tip-card.implemented {
          opacity: 0.7;
          background: rgba(46,125,50,0.05);
        }
        .tip-header {
          display: flex;
          align-items: center;
          padding: 20px;
          gap: 16px;
        }
        .tip-icon {
          width: 40px;
          height: 40px;
          background: rgba(11,79,108,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .tip-title {
          flex: 1;
        }
        .tip-title h4 {
          margin: 0 0 4px 0;
          font-size: 16px;
        }
        .tip-preview {
          margin: 0;
          color: #A0AEC0;
          font-size: 13px;
        }
        .tip-savings-badge {
          text-align: right;
          min-width: 120px;
        }
        .savings-amount {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #2E7D32;
        }
        .savings-label {
          display: block;
          font-size: 11px;
          color: #A0AEC0;
        }
        .tip-expand {
          color: #A0AEC0;
          font-size: 14px;
        }
        .tip-details {
          padding: 0 20px 20px 76px;
        }
        .tip-description {
          margin: 0 0 20px 0;
          line-height: 1.6;
          color: #CBD5E0;
        }
        .tip-actions {
          margin-bottom: 20px;
        }
        .implement-btn {
          padding: 8px 16px;
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 20px;
          color: #2E7D32;
          font-size: 13px;
          cursor: pointer;
        }
        .implemented-badge {
          padding: 8px 16px;
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 20px;
          color: #2E7D32;
        }
        .tip-resources {
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 16px;
        }
        .tip-resources h5 {
          margin: 0 0 8px 0;
          color: #4299E1;
        }
        .tip-resources ul {
          margin: 0;
          padding-left: 20px;
          color: #A0AEC0;
        }
        .tip-resources li {
          margin-bottom: 4px;
        }
        .tips-footer {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .disclaimer {
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 16px;
        }
        .refresh-btn {
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          color: #A0AEC0;
          font-size: 14px;
          cursor: pointer;
        }
        .refresh-btn:hover {
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </div>
  );
};

export default OptimizationTips;