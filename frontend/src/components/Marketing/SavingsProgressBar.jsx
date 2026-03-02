// frontend/src/components/Profile/SavingsProgressBar.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { formatCurrency } from '../../utils/formatters';


const SavingsProgressBar = ({ userId, userStats }) => {
  const [stats, setStats] = useState(userStats || {
    calculation_count: 0,
    total_savings: 0,
    rank_percentile: 0,
    better_than: ''
  });
  const [loading, setLoading] = useState(!userStats);
  const [yearlyGoal] = useState(1000000); // ₦1M goal

  useEffect(() => {
    if (!userStats) {
      fetchImpactStats();
    }
  }, []);

  const fetchImpactStats = async () => {
    try {
      const response = await api.get('/api/stats/user-impact');
      if (response.data.success) {
        setStats(response.data.stats);
      }
    } catch (err) {
      console.error('Failed to fetch impact stats', err);
    } finally {
      setLoading(false);
    }
  };

  const getProgressPercentage = () => {
    const percentage = (stats.total_savings / yearlyGoal) * 100;
    return Math.min(percentage, 100);
  };

  const getNextMilestone = () => {
    if (stats.total_savings < 100000) return { amount: 100000, remaining: 100000 - stats.total_savings };
    if (stats.total_savings < 250000) return { amount: 250000, remaining: 250000 - stats.total_savings };
    if (stats.total_savings < 500000) return { amount: 500000, remaining: 500000 - stats.total_savings };
    if (stats.total_savings < 750000) return { amount: 750000, remaining: 750000 - stats.total_savings };
    return { amount: 1000000, remaining: 1000000 - stats.total_savings };
  };

  if (loading) {
    return (
      <div className="progress-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  const progress = getProgressPercentage();
  const nextMilestone = getNextMilestone();

  return (
    <div className="savings-progress-container">
      <div className="progress-header">
        <h4>Your 2026 Tax Savings Goal</h4>
        <div className="stats-badge">
          <span className="badge-icon">📊</span>
          <span>{stats.calculation_count} calculations</span>
        </div>
      </div>

      <div className="progress-main">
        <div className="progress-circle">
          <svg viewBox="0 0 100 100" className="circle-chart">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2D3748"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#48BB78"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45 * progress / 100} ${2 * Math.PI * 45}`}
              strokeDashoffset={2 * Math.PI * 45 * 0.25}
              transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dy="0.3em"
              className="progress-text"
            >
              {Math.round(progress)}%
            </text>
          </svg>
        </div>

        <div className="progress-details">
          <div className="amount-saved">
            <span className="label">Saved so far</span>
            <span className="value">{formatCurrency(stats.total_savings)}</span>
          </div>
          
          <div className="next-milestone">
            <span className="label">Next milestone</span>
            <span className="value">{formatCurrency(nextMilestone.amount)}</span>
            <span className="remaining">
              {formatCurrency(nextMilestone.remaining)} to go
            </span>
          </div>

          <div className="rank-badge">
            <span className="rank-icon">🏆</span>
            <span className="rank-text">{stats.better_than || 'Better than 0% of users'}</span>
          </div>
        </div>
      </div>

      <div className="progress-tips">
        <p>💡 Want to reach ₦1M faster? Try the What-If feature to explore more savings!</p>
      </div>

      <style>{`
        .savings-progress-container {
          background: #1A202C;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #2D3748;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .progress-header h4 {
          margin: 0;
          color: #4299E1;
          font-size: 16px;
        }
        .stats-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: #2D3748;
          border-radius: 20px;
          color: #FFD700;
          font-size: 12px;
        }
        .progress-main {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 16px;
        }
        .progress-circle {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
        }
        .circle-chart {
          width: 100%;
          height: 100%;
        }
        .progress-text {
          fill: white;
          font-size: 12px;
          font-weight: 600;
        }
        .progress-details {
          flex: 1;
        }
        .amount-saved, .next-milestone {
          margin-bottom: 10px;
        }
        .label {
          display: block;
          color: #A0AEC0;
          font-size: 11px;
          margin-bottom: 2px;
        }
        .value {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #FFD700;
        }
        .remaining {
          display: block;
          color: #48BB78;
          font-size: 12px;
          margin-top: 2px;
        }
        .rank-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #2D3748;
          border-radius: 20px;
        }
        .rank-icon {
          font-size: 14px;
        }
        .rank-text {
          color: #FFD700;
          font-weight: 600;
          font-size: 12px;
        }
        .progress-tips {
          padding: 10px;
          background: #2D3748;
          border-radius: 8px;
          border-left: 4px solid #4299E1;
        }
        .progress-tips p {
          margin: 0;
          color: #CBD5E0;
          font-size: 12px;
        }
        .progress-loading {
          display: flex;
          justify-content: center;
          padding: 30px;
        }
        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #4299E1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SavingsProgressBar;