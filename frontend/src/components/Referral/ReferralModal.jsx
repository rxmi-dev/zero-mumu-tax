// frontend/src/components/Referral/ReferralModal.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const ReferralModal = ({ user, onClose }) => {
  const [referralCode, setReferralCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [creditsEarned, setCreditsEarned] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReferralData();
  }, []);

  const fetchReferralData = async () => {
    try {
      const response = await api.get('/api/referral/my-code');
      if (response.data.success) {
        setReferralCode(response.data.code);
        setReferralCount(response.data.count || 0);
        setCreditsEarned(response.data.credits_earned || 0);
      }
    } catch (err) {
      setError('Failed to load referral data');
    } finally {
      setLoading(false);
    }
  };

  const generateCode = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/api/referral/generate');
      if (response.data.success) {
        setReferralCode(response.data.code);
      }
    } catch (err) {
      setError('Failed to generate code');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    const link = `${window.location.origin}/?ref=${referralCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const link = `${window.location.origin}/?ref=${referralCode}`;
    const text = `Join me on Zero Mumu Tax! Stop overpaying tax. Use my referral link: ${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareOnTwitter = () => {
    const link = `${window.location.origin}/?ref=${referralCode}`;
    const text = `I'm using Zero Mumu Tax to calculate my taxes correctly. Join me and get 15 free credits!`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`, '_blank');
  };

  return (
    <div className="modal-overlay">
      <div className="referral-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <div className="header-icon">🎁</div>
          <h2>Refer & Earn</h2>
          <p>Share Zero Mumu Tax with your friends and earn credits</p>
        </div>

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        <div className="stats-card">
          <div className="stat">
            <span className="stat-label">Friends Referred</span>
            <span className="stat-value">{referralCount}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Credits Earned</span>
            <span className="stat-value">{creditsEarned}</span>
          </div>
        </div>

        <div className="referral-section">
          <h3>Your Referral Link</h3>
          
          {loading ? (
            <div className="loading-spinner"></div>
          ) : !referralCode ? (
            <button className="generate-btn" onClick={generateCode}>
              Generate My Referral Code
            </button>
          ) : (
            <>
              <div className="code-display">
                <input 
                  type="text" 
                  value={`${window.location.origin}/?ref=${referralCode}`} 
                  readOnly 
                />
                <button className="copy-btn" onClick={copyToClipboard}>
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className="share-buttons">
                <button className="share-btn whatsapp" onClick={shareOnWhatsApp}>
                  📱 Share on WhatsApp
                </button>
                <button className="share-btn twitter" onClick={shareOnTwitter}>
                  🐦 Share on Twitter
                </button>
              </div>
            </>
          )}
        </div>

        <div className="info-box">
          <h4>How it works</h4>
          <ul>
            <li>Share your unique link with friends</li>
            <li>When they sign up, you both get <strong>15 free credits</strong></li>
            <li>No limit - refer as many friends as you want!</li>
            <li>Credits never expire</li>
          </ul>
        </div>

        <div className="leaderboard-preview">
          <h4>🏆 Top Referrers</h4>
          <p>Coming soon! Compete with other users.</p>
        </div>

        <button className="done-btn" onClick={onClose}>
          Done
        </button>
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
          padding: 20px;
        }
        .referral-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          color: white;
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
        .modal-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .header-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .modal-header h2 {
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .modal-header p {
          color: #A0AEC0;
          margin: 0;
        }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }
        .stats-card {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
        }
        .stat {
          flex: 1;
          text-align: center;
        }
        .stat-label {
          display: block;
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #FFD700;
        }
        .referral-section {
          margin-bottom: 24px;
        }
        .referral-section h3 {
          margin: 0 0 12px 0;
          color: #4299E1;
        }
        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #4299E1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .generate-btn {
          width: 100%;
          padding: 14px;
          background: #4299E1;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        .code-display {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        .code-display input {
          flex: 1;
          padding: 12px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }
        .copy-btn {
          padding: 12px 24px;
          background: #48BB78;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        .share-buttons {
          display: flex;
          gap: 12px;
        }
        .share-btn {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .share-btn.whatsapp {
          background: #25D366;
          color: white;
        }
        .share-btn.twitter {
          background: #1DA1F2;
          color: white;
        }
        .info-box {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .info-box h4 {
          margin: 0 0 12px 0;
          color: #4299E1;
        }
        .info-box ul {
          margin: 0;
          padding-left: 20px;
          color: #CBD5E0;
        }
        .info-box li {
          margin-bottom: 8px;
        }
        .leaderboard-preview {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
          text-align: center;
          border: 1px dashed #FFD700;
        }
        .leaderboard-preview h4 {
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .leaderboard-preview p {
          margin: 0;
          color: #A0AEC0;
          font-style: italic;
        }
        .done-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ReferralModal;