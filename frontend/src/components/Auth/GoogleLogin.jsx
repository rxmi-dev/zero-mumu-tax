// frontend/src/components/Auth/GoogleLogin.jsx
import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import api from '../../utils/api';

const GoogleLogin = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      setLoading(true);
      setError('');
      
      try {
        console.log('Google code received:', codeResponse);
        
        // Send the authorization code to backend
        const response = await api.post('/api/auth/google', {
          code: codeResponse.code  // Send the code, not token
        });
        
        if (response.data.success) {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          
          onSuccess(response.data.user);
        }
      } catch (err) {
        console.error('Login error:', err);
        setError(err.response?.data?.error || 'Google login failed');
      } finally {
        setLoading(false);
      }
    },
    onError: (error) => {
      console.error('Google login error:', error);
      setError('Google login failed. Please try again.');
    },
    flow: 'auth-code',  // Use auth-code flow instead of implicit
  });

  return (
    <div className="google-login-container">
      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}
      
      <button
        onClick={() => login()}
        disabled={loading}
        className="google-btn"
      >
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="google-icon"
            />
            Sign in with Google
          </>
        )}
      </button>

      <style>{`
        .google-login-container {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 16px;
          color: #ff6b6b;
          text-align: center;
        }
        .google-btn {
          width: 100%;
          padding: 14px 24px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 40px;
          color: #333;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.2s;
        }
        .google-btn:hover {
          background: #f8f8f8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .google-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .google-icon {
          width: 20px;
          height: 20px;
        }
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GoogleLogin;