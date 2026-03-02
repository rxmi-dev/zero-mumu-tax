// frontend/src/components/CreditPurchase/CreditPurchaseModal.jsx
import React, { useState } from 'react';
import api from '../../utils/api';

const CreditPurchaseModal = ({ isOpen, onClose, onPurchase, currentBalance, requiredCredits = 1 }) => {
  const [selectedPack, setSelectedPack] = useState('50');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const creditPacks = [
    { credits: 50, price: 750, popular: true, pricePerCredit: 15 },
    { credits: 150, price: 2000, popular: false, pricePerCredit: 13.33 },
    { credits: 500, price: 6000, popular: false, pricePerCredit: 12 }
  ];

  const handlePurchase = async () => {
    setLoading(true);
    setError('');

    const pack = creditPacks.find(p => p.credits === parseInt(selectedPack));

    try {
      // Call backend to add credits
      const response = await api.post('/api/credits/purchase', {
        amount: pack.price,
        credits: pack.credits
      });

      if (response.data.success) {
        // Update parent state with new balance
        onPurchase(pack.price, pack.credits, response.data.new_balance);
        onClose();
      } else {
        setError(response.data.error || 'Purchase failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="credit-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="modal-icon">💰</div>
        <h2>Buy Credits</h2>
        <p className="balance-info">Current balance: <strong>{currentBalance} credits</strong></p>
        {requiredCredits > 0 && currentBalance < requiredCredits && (
          <div className="warning">You need {requiredCredits} credits for this action</div>
        )}

        {error && <div className="error-message">⚠️ {error}</div>}

        <div className="packs">
          {creditPacks.map(pack => (
            <div
              key={pack.credits}
              className={`pack ${selectedPack === pack.credits.toString() ? 'selected' : ''}`}
              onClick={() => setSelectedPack(pack.credits.toString())}
            >
              {pack.popular && <span className="popular-badge">BEST VALUE</span>}
              <div className="pack-credits">{pack.credits} Credits</div>
              <div className="pack-price">₦{pack.price}</div>
              <div className="pack-per-credit">₦{pack.pricePerCredit.toFixed(2)}/credit</div>
            </div>
          ))}
        </div>

        <button className="purchase-btn" onClick={handlePurchase} disabled={loading}>
          {loading ? 'Processing...' : `Pay ₦${creditPacks.find(p => p.credits === parseInt(selectedPack))?.price}`}
        </button>

        <p className="note">Credits never expire. This is a simulation – no real payment.</p>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
        }
        .credit-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          color: white;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-icon {
          font-size: 48px;
          text-align: center;
          margin-bottom: 16px;
        }
        h2 {
          text-align: center;
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .balance-info {
          text-align: center;
          color: #A0AEC0;
          margin-bottom: 16px;
        }
        .warning {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 10px;
          color: #FBD38D;
          text-align: center;
          margin-bottom: 20px;
        }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 10px;
          color: #FBD38D;
          margin-bottom: 20px;
        }
        .packs {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .pack {
          background: #2D3748;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }
        .pack:hover {
          background: #364153;
        }
        .pack.selected {
          border-color: #FFD700;
          background: rgba(255,215,0,0.1);
        }
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 20px;
          background: #FFD700;
          color: black;
          padding: 2px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .pack-credits {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .pack-price {
          font-size: 24px;
          color: #FFD700;
          font-weight: 700;
        }
        .pack-per-credit {
          color: #A0AEC0;
          font-size: 13px;
        }
        .purchase-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border: none;
          border-radius: 8px;
          color: black;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
        }
        .purchase-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .note {
          text-align: center;
          color: #718096;
          font-size: 12px;
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
};

export default CreditPurchaseModal;