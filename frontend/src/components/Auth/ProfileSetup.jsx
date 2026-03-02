// frontend/src/components/Auth/ProfileSetup.jsx
import React, { useState } from 'react';
import api from '../../utils/api';

const ProfileSetup = ({ user, onComplete, onLogout }) => {
  const [formData, setFormData] = useState({
    date_of_birth: '',
    occupation: '',
    state_of_origin: '',
    state_of_residence: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const nigeriaStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'FCT - Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
    'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
    'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const occupations = [
    'Civil Servant', 'Private Sector Employee', 'Business Owner/Trader',
    'Professional (Lawyer, Doctor, Accountant)', 'Contractor', 'Artisan',
    'Freelancer', 'Student', 'Retired', 'Unemployed', 'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.date_of_birth || !formData.occupation || !formData.state_of_origin || !formData.state_of_residence) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await api.put('/api/auth/profile', formData);
      
      if (response.data.success) {
        // Update sessionStorage with new user data
        const updatedUser = { ...user, ...response.data.user };
        sessionStorage.setItem('user', JSON.stringify(updatedUser));
        
        onComplete(updatedUser);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-setup-overlay">
      <div className="profile-setup-modal">
        <button className="logout-btn-top" onClick={onLogout}>
          ← Use Free Calculator Instead
        </button>

        <div className="setup-header">
          <div className="setup-icon">👋</div>
          <h2>Tell Us About Yourself</h2>
          <p>This helps us calculate your taxes accurately</p>
        </div>

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="setup-form">
          <div className="form-group">
            <label>Date of Birth <span className="required">*</span></label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
              max={new Date().toISOString().split('T')[0]}
            />
            <small>We need this to verify your age for tax purposes</small>
          </div>

          <div className="form-group">
            <label>What work do you do? <span className="required">*</span></label>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="dark-select"
            >
              <option value="">Select your occupation</option>
              {occupations.map(occ => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
            <small>This helps us give you relevant tax tips</small>
          </div>

          <div className="form-group">
            <label>Which state are you from? <span className="required">*</span></label>
            <select
              name="state_of_origin"
              value={formData.state_of_origin}
              onChange={handleChange}
              required
              className="dark-select"
            >
              <option value="">Select your state of origin</option>
              {nigeriaStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Where do you live now? <span className="required">*</span></label>
            <select
              name="state_of_residence"
              value={formData.state_of_residence}
              onChange={handleChange}
              required
              className="dark-select"
            >
              <option value="">Select your state of residence</option>
              {nigeriaStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <small>Your taxes are based on where you live</small>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Saving...' : 'Continue to Calculator'}
            </button>
          </div>
        </form>

        <p className="privacy-note">
          🔒 We only use this to calculate your taxes correctly. We never share your information.
        </p>
      </div>

      <style>{`
        .profile-setup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
          padding: 20px;
        }

        .profile-setup-modal {
          background: rgba(26, 30, 36, 0.98);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          position: relative;
        }

        .logout-btn-top {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          color: #A0AEC0;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .logout-btn-top:hover {
          background: rgba(255,255,255,0.1);
        }

        .setup-header {
          text-align: center;
          margin-bottom: 32px;
          margin-top: 20px;
        }

        .setup-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .setup-header h2 {
          color: white;
          font-size: 28px;
          margin: 0 0 8px 0;
        }

        .setup-header p {
          color: #A0AEC0;
          font-size: 14px;
          margin: 0;
        }

        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
          text-align: center;
        }

        .setup-form {
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: white;
          font-weight: 500;
        }

        .required {
          color: #ff6b6b;
          margin-left: 4px;
        }

        .form-group input,
        .form-group select.dark-select {
          width: 100%;
          padding: 12px 16px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 15px;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 18px;
        }

        .form-group input:focus,
        .form-group select.dark-select:focus {
          outline: none;
          border-color: #4299E1;
          box-shadow: 0 0 0 3px rgba(66,153,225,0.2);
        }

        .form-group select.dark-select option {
          background: #2D3748;
          color: white;
        }

        .form-group small {
          display: block;
          margin-top: 4px;
          color: #A0AEC0;
          font-size: 12px;
        }

        .form-actions {
          margin-top: 32px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(11,79,108,0.4);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .privacy-note {
          text-align: center;
          color: #A0AEC0;
          font-size: 12px;
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
};

export default ProfileSetup;