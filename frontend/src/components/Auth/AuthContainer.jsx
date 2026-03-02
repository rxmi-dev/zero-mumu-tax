// frontend/src/components/Auth/AuthContainer.jsx
import React from 'react';
import GoogleLogin from './GoogleLogin';

const AuthContainer = ({ onLoginSuccess }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome to Zero Mumu Tax</h2>
          <p>Sign in to calculate your taxes correctly</p>
        </div>

        <div className="auth-body">
          <GoogleLogin onSuccess={onLoginSuccess} />
          
          <div className="auth-divider">
            <span>🇳🇬</span>
          </div>

          <div className="auth-footer">
            <p className="free-credits">
              ✨ New users get <strong>10 free credits</strong> instantly!
            </p>
            <p className="privacy-note">
              By signing in, you agree to our Terms of Service and Privacy Policy.
              We only use your email to identify your account.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .auth-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .auth-card {
          background: rgba(26, 30, 36, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-header h2 {
          color: white;
          font-size: 28px;
          margin: 0 0 8px 0;
        }
        .auth-header p {
          color: var(--text-muted);
          font-size: 14px;
          margin: 0;
        }
        .auth-divider {
          text-align: center;
          margin: 24px 0;
          font-size: 24px;
        }
        .auth-footer {
          text-align: center;
        }
        .free-credits {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 40px;
          padding: 12px 20px;
          color: #FFD700;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .privacy-note {
          color: var(--text-muted);
          font-size: 12px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default AuthContainer;