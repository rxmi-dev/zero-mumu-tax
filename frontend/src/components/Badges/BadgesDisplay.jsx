// frontend/src/components/Badges/BadgesDisplay.jsx
import React, { useState } from 'react';

const BadgesDisplay = ({ userBadges = [] }) => {
  const [showGuide, setShowGuide] = useState(false);

  const allBadges = [
    {
      name: 'Getting Started',
      description: 'Complete your first calculation',
      icon: '🌱',
      how_to_earn: 'Use any calculator and save your result'
    },
    {
      name: 'Tax Enthusiast',
      description: 'Complete 10 calculations',
      icon: '📊',
      how_to_earn: 'Save 10 different calculations'
    },
    {
      name: 'Tax Expert',
      description: 'Complete 50 calculations',
      icon: '🏆',
      how_to_earn: 'Save 50 calculations'
    },
    {
      name: 'Savings Champion',
      description: 'Identify over ₦1M in potential savings',
      icon: '💰',
      how_to_earn: 'Use optimization tips to find savings'
    },
    {
      name: 'Community Builder',
      description: 'Refer 5 friends',
      icon: '👥',
      how_to_earn: 'Share your referral link and have friends sign up'
    },
    {
      name: 'Early Adopter',
      description: 'Join in the first year',
      icon: '⭐',
      how_to_earn: 'Sign up before January 1, 2026'
    }
  ];

  return (
    <div className="badges-container">
      <div className="badges-header">
        <h3>Your Achievements</h3>
        <button className="guide-btn" onClick={() => setShowGuide(!showGuide)}>
          {showGuide ? 'Hide Guide' : 'How to Earn'}
        </button>
      </div>

      {userBadges.length === 0 ? (
        <div className="badges-empty">
          <div className="empty-icon">🏆</div>
          <p>No badges yet. Keep using the app to earn achievements!</p>
        </div>
      ) : (
        <div className="badges-grid">
          {userBadges.map((badge, index) => (
            <div key={index} className="badge-card">
              <div className="badge-icon">{badge.icon || '🏅'}</div>
              <div className="badge-info">
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
                <small>Awarded: {new Date(badge.awarded_at).toLocaleDateString()}</small>
              </div>
            </div>
          ))}
        </div>
      )}

      {showGuide && (
        <div className="badge-guide">
          <h4>How to Earn Badges</h4>
          <div className="guide-grid">
            {allBadges.map((badge, i) => {
              const earned = userBadges.some(b => b.name === badge.name);
              return (
                <div key={i} className={`guide-item ${earned ? 'earned' : ''}`}>
                  <div className="guide-icon">{badge.icon}</div>
                  <div className="guide-content">
                    <div className="guide-header">
                      <strong>{badge.name}</strong>
                      {earned && <span className="earned-badge">✓ Earned</span>}
                    </div>
                    <p>{badge.how_to_earn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        .badges-container {
          padding: 20px;
          background: #1A202C;
          border-radius: 12px;
        }
        .badges-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .badges-header h3 {
          margin: 0;
          color: #4299E1;
        }
        .guide-btn {
          padding: 6px 12px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          color: white;
          cursor: pointer;
        }
        .badges-empty {
          text-align: center;
          padding: 40px;
          background: #2D3748;
          border-radius: 8px;
          color: #A0AEC0;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }
        .badge-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #2D3748;
          border-radius: 12px;
        }
        .badge-icon {
          font-size: 32px;
        }
        .badge-info h4 {
          margin: 0 0 4px 0;
          color: #FFD700;
        }
        .badge-info p {
          margin: 0 0 4px 0;
          color: #CBD5E0;
          font-size: 13px;
        }
        .badge-info small {
          color: #718096;
        }
        .badge-guide {
          margin-top: 20px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
        }
        .badge-guide h4 {
          margin: 0 0 16px 0;
          color: #FFD700;
        }
        .guide-grid {
          display: grid;
          gap: 12px;
        }
        .guide-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          background: #1A202C;
          border-radius: 8px;
          opacity: 0.8;
        }
        .guide-item.earned {
          opacity: 1;
          border-left: 4px solid #48BB78;
        }
        .guide-icon {
          font-size: 24px;
        }
        .guide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        .guide-header strong {
          color: white;
        }
        .earned-badge {
          color: #48BB78;
          font-size: 11px;
        }
        .guide-content p {
          margin: 0;
          color: #A0AEC0;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default BadgesDisplay;