// frontend/src/components/Marketing/SavingsTeaser.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const SavingsTeaser = ({ onLoginClick }) => {
  const [teaser, setTeaser] = useState(null);
  const [dismissed, setDismissed] = useState(false);
  const [income, setIncome] = useState('');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const hasDismissed = localStorage.getItem('teaser-dismissed');
    if (hasDismissed) {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!localStorage.getItem('teaser-dismissed')) {
        setShowInput(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const getEstimate = async () => {
    if (!income) return;

    try {
      const response = await api.post('/api/teaser/savings-estimate', {
        income: parseFloat(income.replace(/,/g, '')) || 0
      });
      setTeaser(response.data.estimate);
      setShowInput(false);
    } catch (err) {
      setTeaser(45000);
      setShowInput(false);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('teaser-dismissed', 'true');
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  if (dismissed) return null;

  return (
    <>
      {showInput && (
        <div className="teaser-overlay">
          <div className="teaser-modal">
            <button className="teaser-close" onClick={handleDismiss}>✕</button>
            <div className="teaser-icon">💰</div>
            <h3>Are you overpaying tax?</h3>
            <p>Tell us your approximate monthly income and we'll estimate how much you might be overpaying.</p>
            
            <div className="input-group">
              <span className="currency">₦</span>
              <input
                type="text"
                value={income}
                onChange={(e) => setIncome(e.target.value.replace(/[^\d]/g, ''))}
                placeholder="e.g., 500,000"
              />
            </div>
            
            <button className="estimate-btn" onClick={getEstimate}>
              Show My Estimate
            </button>
            <button className="skip-btn" onClick={handleDismiss}>
              Not now
            </button>
          </div>
        </div>
      )}

      {teaser && (
        <div className="teaser-overlay">
          <div className="teaser-modal result-modal">
            <button className="teaser-close" onClick={handleDismiss}>✕</button>
            <div className="result-icon">⚠️</div>
            <h3>You could be overpaying!</h3>
            <div className="estimate-amount">{formatCurrency(teaser)}</div>
            <p className="estimate-text">Based on similar taxpayers, you might be overpaying this amount in tax each year.</p>
            <button className="login-btn" onClick={onLoginClick}>
              Sign in to see exactly how to save it
            </button>
            <button className="skip-btn" onClick={handleDismiss}>
              Maybe later
            </button>
          </div>
        </div>
      )}

      <style>{`
        .teaser-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .teaser-modal {
          background: linear-gradient(135deg, #1A202C, #2D3748);
          border-radius: 24px;
          padding: 32px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          color: white;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .result-modal {
          border-left: 4px solid #DD6B20;
        }
        .teaser-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: #A0AEC0;
          cursor: pointer;
          font-size: 20px;
        }
        .teaser-icon, .result-icon {
          font-size: 64px;
          text-align: center;
          margin-bottom: 16px;
        }
        .teaser-modal h3 {
          margin: 0 0 12px 0;
          color: #FFD700;
          text-align: center;
          font-size: 24px;
        }
        .teaser-modal p {
          margin: 0 0 24px 0;
          color: #CBD5E0;
          font-size: 15px;
          text-align: center;
          line-height: 1.5;
        }
        .input-group {
          position: relative;
          margin-bottom: 20px;
        }
        .currency {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #A0AEC0;
          font-size: 18px;
        }
        .input-group input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          background: #2D3748;
          border: 2px solid #4A5568;
          border-radius: 12px;
          color: white;
          font-size: 18px;
        }
        .input-group input:focus {
          outline: none;
          border-color: #4299E1;
        }
        .estimate-btn, .login-btn {
          width: 100%;
          padding: 16px;
          background: #4299E1;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .estimate-btn:hover, .login-btn:hover {
          background: #3182CE;
        }
        .skip-btn {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: none;
          color: #A0AEC0;
          cursor: pointer;
          font-size: 14px;
        }
        .estimate-amount {
          font-size: 48px;
          font-weight: 800;
          color: #FFD700;
          text-align: center;
          margin: 20px 0;
        }
        .estimate-text {
          margin-bottom: 24px !important;
        }
      `}</style>
    </>
  );
};

export default SavingsTeaser;