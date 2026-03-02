// frontend/src/components/MumuAlert/MumuAlert.jsx
import React, { useState } from 'react';

const MumuAlert = ({ alert, onAction, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (dismissed) return null;

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return '#B22222';
      case 'high': return '#FF8C00';
      case 'medium': return '#FFD700';
      default: return '#0B4F6C';
    }
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'critical': return '🚨';
      case 'high': return '⚠️';
      case 'medium': return '💡';
      default: return 'ℹ️';
    }
  };

  const color = getSeverityColor(alert.severity);
  const icon = getSeverityIcon(alert.severity);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="mumu-alert" style={{ borderLeftColor: color }}>
      <div className="alert-header">
        <div className="alert-icon" style={{ color }}>{icon}</div>
        <div className="alert-title">{alert.title}</div>
        <button className="alert-dismiss" onClick={() => { setDismissed(true); if (onDismiss) onDismiss(alert.type); }}>✕</button>
      </div>

      {isExpanded && (
        <div className="alert-details">
          <p className="alert-message">{alert.message}</p>
          {alert.potential_savings > 0 && (
            <div className="savings-box">
              <span>You could save </span>
              <strong>{formatCurrency(alert.potential_savings)}</strong>
            </div>
          )}
          <button className="alert-action-btn" style={{ background: color }} onClick={() => onAction(alert)}>
            {alert.action}
          </button>
          <button className="alert-close-btn" onClick={() => setIsExpanded(false)}>Close</button>
        </div>
      )}

      {!isExpanded && (
        <div className="alert-footer">
          <button className="alert-expand" onClick={() => setIsExpanded(true)}>
            See details →
          </button>
        </div>
      )}

      <style>{`
        .mumu-alert {
          background: rgba(26, 30, 36, 0.95);
          border: 1px solid rgba(255,255,255,0.1);
          border-left-width: 4px;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 12px;
        }
        .alert-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .alert-icon {
          font-size: 16px;
        }
        .alert-title {
          flex: 1;
          font-weight: 500;
          color: white;
        }
        .alert-dismiss {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
        }
        .alert-dismiss:hover {
          color: white;
        }
        .alert-footer {
          margin-top: 8px;
          text-align: right;
        }
        .alert-expand {
          background: none;
          border: none;
          color: #4299E1;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
        }
        .alert-details {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .alert-message {
          margin: 0 0 12px 0;
          color: #CBD5E0;
          font-size: 14px;
          line-height: 1.5;
        }
        .savings-box {
          background: rgba(255,215,0,0.1);
          border-radius: 4px;
          padding: 8px 12px;
          margin-bottom: 12px;
          color: #FFD700;
        }
        .alert-action-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          margin-right: 8px;
        }
        .alert-close-btn {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: #A0AEC0;
          font-size: 13px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MumuAlert;