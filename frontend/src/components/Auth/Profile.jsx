// frontend/src/components/Auth/Profile.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import SavedCalculationViewer from './SavedCalculationViewer';
import WhatIfComparison from '../WhatIfComparison/WhatIfComparison';
import MultiYearTracking from '../MultiYearTracking/MultiYearTracking';
import OptimizationTips from '../OptimizationTips/OptimizationTips';
import BulkUpload from '../BulkUpload/BulkUpload';
import ExportExcel from '../ExportExcel/ExportExcel';
import NRSFormPrefill from '../NRSFormPrefill/NRSFormPrefill';
import BadgesDisplay from '../Badges/BadgesDisplay';
import SavingsProgressBar from "../Marketing/SavingsProgressBar";
import { formatCurrency } from '../../utils/formatters';

const Profile = ({ user: initialUser, onLogout, creditBalance, setCreditBalance, setRestoreCalculation, setActiveTab, userStats }) => {
  const [profile, setProfile] = useState(initialUser || {});
  const [calculations, setCalculations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [selectedCalculation, setSelectedCalculation] = useState(null);
  const [showViewer, setShowViewer] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState('calculations');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [showMultiYear, setShowMultiYear] = useState(false);
  const [showOptimization, setShowOptimization] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showFormPrefill, setShowFormPrefill] = useState(false);
  const [selectedForWhatIf, setSelectedForWhatIf] = useState(null);
  const [showReferralInfo, setShowReferralInfo] = useState(false);
  const [badges, setBadges] = useState([]);
  const [formData, setFormData] = useState({
    full_name: initialUser?.full_name || '',
    phone: initialUser?.phone || '',
    date_of_birth: initialUser?.date_of_birth || '',
    occupation: initialUser?.occupation || '',
    state_of_origin: initialUser?.state_of_origin || '',
    state_of_residence: initialUser?.state_of_residence || ''
  });

  const nigeriaStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'FCT - Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina',
    'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
    'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  useEffect(() => {
    fetchProfile();
    fetchCalculations();
    fetchBadges();
  }, []);

  useEffect(() => {
    setProfile(initialUser || {});
    setFormData({
      full_name: initialUser?.full_name || '',
      phone: initialUser?.phone || '',
      date_of_birth: initialUser?.date_of_birth || '',
      occupation: initialUser?.occupation || '',
      state_of_origin: initialUser?.state_of_origin || '',
      state_of_residence: initialUser?.state_of_residence || ''
    });
  }, [initialUser]);

  const fetchProfile = async () => {
    try {
      const response = await api.get('/api/auth/me');
      if (response.data.success) {
        const userData = response.data.user;
        setProfile(userData);
        setFormData({
          full_name: userData.full_name || '',
          phone: userData.phone || '',
          date_of_birth: userData.date_of_birth || '',
          occupation: userData.occupation || '',
          state_of_origin: userData.state_of_origin || '',
          state_of_residence: userData.state_of_residence || ''
        });
        sessionStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err);
    }
  };

  const fetchCalculations = async () => {
    try {
      const response = await api.get('/api/calculations');
      if (response.data.success) {
        setCalculations(response.data.calculations);
      }
    } catch (err) {
      console.error('Failed to fetch calculations:', err);
    }
  };

  const fetchBadges = async () => {
    try {
      const response = await api.get('/api/badges');
      if (response.data.success) {
        setBadges(response.data.badges);
      }
    } catch (err) {
      console.error('Failed to fetch badges:', err);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await api.put('/api/auth/profile', {
        full_name: formData.full_name,
        phone: formData.phone,
        date_of_birth: formData.date_of_birth
      });

      if (response.data.success) {
        setSuccess('Profile updated successfully');
        setEditMode(false);
        setProfile(response.data.user);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        if (initialUser) {
          initialUser.full_name = response.data.user.full_name;
          initialUser.phone = response.data.user.phone;
          initialUser.date_of_birth = response.data.user.date_of_birth;
        }
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCalculation = async (calcId) => {
    if (!confirm('Are you sure you want to delete this calculation?')) return;

    try {
      const response = await api.delete(`/api/calculations/${calcId}`);
      if (response.data.success) {
        setCalculations(calculations.filter(c => c.id !== calcId));
        setSuccess('Calculation deleted');
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      console.error('Failed to delete calculation:', err);
      setError('Failed to delete calculation');
    }
  };

  const handleViewCalculation = (calc) => {
    setSelectedCalculation(calc);
    setShowViewer(true);
  };

  const handleUseCalculation = (calc) => {
    if (setRestoreCalculation) {
      setRestoreCalculation({
        type: calc.calculator_type,
        data: calc.input_data
      });
    }
    
    if (setActiveTab) {
      setActiveTab(calc.calculator_type);
    }
    
    setShowViewer(false);
    setSelectedCalculation(null);
  };

  const handleWhatIf = (calc) => {
    setSelectedForWhatIf(calc);
    setShowWhatIf(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCalculationSummary = (calc) => {
    if (calc.calculator_type === 'pit') {
      return {
        amount: calc.result_data?.tax_payable,
        income: calc.result_data?.total_income,
        type: 'Tax Payable',
        icon: '💰',
        color: '#4dabf7'
      };
    } else if (calc.calculator_type === 'cit') {
      return {
        amount: calc.result_data?.total_tax_payable,
        income: calc.result_data?.assessable_profit,
        type: 'Total Tax',
        icon: '🏢',
        color: '#8B5CF6'
      };
    } else if (calc.calculator_type === 'vat') {
      return {
        amount: calc.result_data?.vat,
        income: calc.result_data?.net,
        type: 'VAT Amount',
        icon: '🧾',
        color: '#FF8C00'
      };
    } else if (calc.calculator_type === 'wht') {
      return {
        amount: calc.result_data?.rate,
        income: null,
        type: 'WHT Rate',
        icon: '🔍',
        color: '#0B4F6C'
      };
    } else if (calc.calculator_type === 'rent') {
      return {
        amount: calc.result_data?.actual_relief,
        income: calc.result_data?.rent,
        type: 'Rent Relief',
        icon: '🏠',
        color: '#2E7D32'
      };
    }
    return {
      amount: 0,
      income: 0,
      type: 'Calculation',
      icon: '📊',
      color: '#666'
    };
  };

  const getFilteredCalculations = () => {
    let filtered = [...calculations];
    
    if (filterType !== 'all') {
      filtered = filtered.filter(calc => calc.calculator_type === filterType);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(calc => {
        const typeMatch = calc.calculator_type.toLowerCase().includes(term);
        const dateMatch = formatDate(calc.created_at).toLowerCase().includes(term);
        const summary = getCalculationSummary(calc);
        const amountMatch = summary.amount?.toString().includes(term);
        return typeMatch || dateMatch || amountMatch;
      });
    }
    
    filtered.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    return filtered;
  };

  const filteredCalculations = getFilteredCalculations();

  const renderSubTabs = () => (
    <div className="profile-subtabs">
      <button
        className={`subtab-btn ${activeSubTab === 'calculations' ? 'active' : ''}`}
        onClick={() => setActiveSubTab('calculations')}
      >
        📊 Saved Calculations
      </button>
      <button
        className={`subtab-btn ${activeSubTab === 'years' ? 'active' : ''}`}
        onClick={() => setShowMultiYear(true)}
      >
        📅 Multi-Year Tracking
      </button>
      <button
        className={`subtab-btn ${activeSubTab === 'tips' ? 'active' : ''}`}
        onClick={() => setShowOptimization(true)}
      >
        💡 Tax Tips
      </button>
      <button
        className={`subtab-btn ${activeSubTab === 'compare' ? 'active' : ''}`}
        onClick={() => setShowWhatIf(true)}
      >
        🔄 Compare Scenarios
      </button>
      <button
        className={`subtab-btn ${activeSubTab === 'bulk' ? 'active' : ''}`}
        onClick={() => setShowBulkUpload(true)}
      >
        📦 Bulk Upload
      </button>
      <button
        className={`subtab-btn ${activeSubTab === 'export' ? 'active' : ''}`}
        onClick={() => setShowExport(true)}
      >
        📥 Export to Excel
      </button>
      <button
        className={`subtab-btn ${activeSubTab === 'badges' ? 'active' : ''}`}
        onClick={() => setActiveSubTab('badges')}
      >
        🏆 Badges ({badges.length})
      </button>
    </div>
  );

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="header-left">
          <div className="avatar">
            {profile.profile_picture ? (
              <img src={profile.profile_picture} alt={profile.full_name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            ) : (
              '👤'
            )}
          </div>
          <div className="header-info">
            <h2>{profile.full_name || 'My Account'}</h2>
            <p className="email">{profile.email}</p>
          </div>
        </div>
        <div className="header-right">
          <div className="credit-badge-large" onClick={() => window.dispatchEvent(new CustomEvent('open-credit-modal'))}>
            <span className="credit-icon">💰</span>
            <span className="credit-amount">{creditBalance}</span>
            <span className="credit-label">credits</span>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            🚪 Logout
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {success && (
        <div className="success-message">
          ✅ {success}
        </div>
      )}

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-card">
            <h3>Personal Information</h3>
            {!editMode ? (
              <>
                <div className="info-row">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">{profile.full_name}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span className="info-value">{profile.email}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phone</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="info-value">{profile.phone || 'Not provided'}</span>
                    {!profile.phone && (
                      <span className="phone-reminder">Add phone for tax reminders</span>
                    )}
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-label">Date of Birth</span>
                  <span className="info-value">
                    {profile.date_of_birth ? new Date(profile.date_of_birth).toLocaleDateString() : 'Not provided'}
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Occupation</span>
                  <span className="info-value">{profile.occupation || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">State of Origin</span>
                  <span className="info-value">{profile.state_of_origin || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">State of Residence</span>
                  <span className="info-value">{profile.state_of_residence || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Member Since</span>
                  <span className="info-value">
                    {profile.created_at ? formatDate(profile.created_at) : 'N/A'}
                  </span>
                </div>
                <button className="edit-btn" onClick={() => setEditMode(true)}>
                  ✏️ Edit Profile
                </button>
              </>
            ) : (
              <form onSubmit={handleUpdateProfile}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g., 08012345678"
                  />
                  <small>We'll send you tax deadline reminders</small>
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    value={formData.date_of_birth}
                    onChange={(e) => setFormData({...formData, date_of_birth: e.target.value})}
                  />
                </div>
                
                <div className="info-row" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="info-label">Occupation</span>
                  <span className="info-value">{profile.occupation || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">State of Origin</span>
                  <span className="info-value">{profile.state_of_origin || 'Not provided'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">State of Residence</span>
                  <span className="info-value">{profile.state_of_residence || 'Not provided'}</span>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="save-btn" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button type="button" className="cancel-btn" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Savings Progress Bar - Only render if profile.id exists */}
          {profile?.id && (
            <SavingsProgressBar userId={profile.id} userStats={userStats} />
          )}

          <div className="stats-card">
            <h3>Your Tax Statistics</h3>
            <div className="stat-item">
              <span className="stat-label">Total Calculations</span>
              <span className="stat-value">{calculations.length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">PIT Calculations</span>
              <span className="stat-value">{calculations.filter(c => c.calculator_type === 'pit').length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">CIT Calculations</span>
              <span className="stat-value">{calculations.filter(c => c.calculator_type === 'cit').length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Credits Used</span>
              <span className="stat-value">{Math.max(0, 15 - creditBalance)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Badges Earned</span>
              <span className="stat-value">{badges.length}</span>
            </div>
          </div>
        </div>

        <div className="profile-main">
          {renderSubTabs()}

          {activeSubTab === 'calculations' && (
            <>
              <div className="calculations-header">
                <h3>Saved Calculations</h3>
                <div className="filters">
                  <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="all">All Types</option>
                    <option value="pit">PIT</option>
                    <option value="cit">CIT</option>
                    <option value="vat">VAT</option>
                    <option value="wht">WHT</option>
                    <option value="rent">Rent Relief</option>
                  </select>
                  
                  <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {calculations.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📊</div>
                  <h3>No saved calculations yet</h3>
                  <p>Use any calculator and click "Save" to keep your results here.</p>
                </div>
              ) : filteredCalculations.length === 0 ? (
                <div className="empty-state">
                  <p>No calculations match your filters.</p>
                </div>
              ) : (
                <div className="calculations-grid">
                  {filteredCalculations.map(calc => {
                    const summary = getCalculationSummary(calc);
                    return (
                      <div
                        key={calc.id}
                        className="calculation-card"
                        onClick={() => handleViewCalculation(calc)}
                      >
                        <div className="card-header">
                          <span className="card-type" style={{ background: `${summary.color}20`, color: summary.color }}>
                            {calc.calculator_type.toUpperCase()}
                          </span>
                          <span className="card-date">{formatDate(calc.created_at)}</span>
                        </div>
                        
                        <div className="card-icon" style={{ color: summary.color }}>
                          {summary.icon}
                        </div>
                        
                        <div className="card-amount" style={{ color: summary.color }}>
                          {summary.amount ? formatCurrency(summary.amount) : '₦0'}
                        </div>
                        
                        {summary.income && (
                          <div className="card-income">
                            Income: {formatCurrency(summary.income)}
                          </div>
                        )}
                        
                        <div className="card-actions">
                          <button
                            className="action-btn view-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewCalculation(calc);
                            }}
                          >
                            👁️ View
                          </button>
                          <button
                            className="action-btn use-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUseCalculation(calc);
                            }}
                          >
                            🔄 Use
                          </button>
                          <button
                            className="action-btn compare-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatIf(calc);
                            }}
                            title="Compare Scenarios"
                          >
                            🔀 Compare
                          </button>
                          <button
                            className="action-btn delete-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteCalculation(calc.id);
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {activeSubTab === 'badges' && (
            <BadgesDisplay userBadges={badges} />
          )}
        </div>
      </div>

      {/* Modals */}
      {showViewer && selectedCalculation && (
        <SavedCalculationViewer
          calculation={selectedCalculation}
          user={profile}  // ← Fixed: changed from 'user' to 'profile'
          onClose={() => {
            setShowViewer(false);
            setSelectedCalculation(null);
          }}
          onUse={() => {
            handleUseCalculation(selectedCalculation);
            setShowViewer(false);
          }}
          creditBalance={creditBalance}
          setCreditBalance={setCreditBalance}
          setActiveTab={setActiveTab}
        />
      )}

      {showWhatIf && (
        <div className="modal-overlay">
          <WhatIfComparison
            baseScenario={selectedForWhatIf?.input_data}
            onClose={() => {
              setShowWhatIf(false);
              setSelectedForWhatIf(null);
            }}
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            calculatorType={selectedForWhatIf?.calculator_type || 'pit'}
          />
        </div>
      )}

      {showMultiYear && (
        <div className="modal-overlay">
          <MultiYearTracking
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            onClose={() => setShowMultiYear(false)}
          />
        </div>
      )}

      {showOptimization && (
        <div className="modal-overlay">
          <OptimizationTips
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            onClose={() => setShowOptimization(false)}
          />
        </div>
      )}

      {showBulkUpload && (
        <div className="modal-overlay">
          <BulkUpload
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            onClose={() => setShowBulkUpload(false)}
          />
        </div>
      )}

      {showExport && (
        <div className="modal-overlay">
          <ExportExcel
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            onClose={() => setShowExport(false)}
          />
        </div>
      )}

      {showFormPrefill && (
        <div className="modal-overlay">
          <NRSFormPrefill
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            onClose={() => setShowFormPrefill(false)}
          />
        </div>
      )}

      <style>{`
        .profile-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px;
        }
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid #2D3748;
          border-radius: 16px;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .avatar {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          overflow: hidden;
        }
        .header-info h2 {
          margin: 0 0 4px 0;
          font-size: 24px;
          color: white;
        }
        .header-info .email {
          margin: 0;
          color: #A0AEC0;
          font-size: 14px;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .credit-badge-large {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05));
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 40px;
          cursor: pointer;
        }
        .credit-icon {
          font-size: 20px;
        }
        .credit-amount {
          font-size: 20px;
          font-weight: 700;
          color: #FFD700;
        }
        .credit-label {
          color: #A0AEC0;
          font-size: 14px;
        }
        .logout-btn {
          padding: 10px 20px;
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 40px;
          color: #ff6b6b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .error-message {
          padding: 16px;
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          color: #ff6b6b;
          margin-bottom: 20px;
        }
        .success-message {
          padding: 16px;
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 8px;
          color: #2E7D32;
          margin-bottom: 20px;
        }
        .profile-content {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 24px;
        }
        .profile-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .profile-card, .stats-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .profile-card h3, .stats-card h3 {
          margin: 0 0 20px 0;
          font-size: 18px;
          color: #4299E1;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #2D3748;
          flex-wrap: wrap;
          gap: 8px;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          color: #A0AEC0;
          font-size: 14px;
        }
        .info-value {
          font-weight: 600;
          color: white;
        }
        .phone-reminder {
          font-size: 11px;
          color: #FFD700;
          background: rgba(255,215,0,0.1);
          padding: 4px 8px;
          border-radius: 12px;
          white-space: nowrap;
        }
        .edit-btn {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #A0AEC0;
          font-size: 13px;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 6px;
          color: white;
        }
        .form-group small {
          display: block;
          margin-top: 4px;
          color: #A0AEC0;
          font-size: 11px;
        }
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .save-btn {
          flex: 1;
          padding: 12px;
          background: #4299E1;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }
        .cancel-btn {
          flex: 1;
          padding: 12px;
          background: transparent;
          border: 1px solid #4A5568;
          border-radius: 6px;
          color: #A0AEC0;
          cursor: pointer;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #2D3748;
        }
        .stat-item:last-child {
          border-bottom: none;
        }
        .stat-label {
          color: #A0AEC0;
        }
        .stat-value {
          font-weight: 600;
          color: #FFD700;
        }
        .profile-main {
          background: rgba(255,255,255,0.02);
          border: 1px solid #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .profile-subtabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
          overflow-x: auto;
        }
        .subtab-btn {
          padding: 10px 16px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }
        .subtab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .calculations-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .calculations-header h3 {
          margin: 0;
          font-size: 18px;
          color: white;
        }
        .filters {
          display: flex;
          gap: 12px;
        }
        .filters select,
        .filters input {
          padding: 8px 12px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 6px;
          color: white;
          font-size: 13px;
        }
        .filters input {
          min-width: 200px;
        }
        .empty-state {
          text-align: center;
          padding: 60px;
          background: #2D3748;
          border-radius: 12px;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .empty-state h3 {
          margin: 0 0 8px 0;
          color: white;
        }
        .empty-state p {
          color: #A0AEC0;
          margin: 0;
        }
        .calculations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .calculation-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .calculation-card:hover {
          transform: translateY(-4px);
          border-color: #4299E1;
          box-shadow: 0 10px 20px rgba(66,153,225,0.2);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .card-type {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .card-date {
          color: #A0AEC0;
          font-size: 11px;
        }
        .card-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        .card-amount {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .card-income {
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 16px;
        }
        .card-actions {
          display: flex;
          gap: 8px;
        }
        .action-btn {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .view-btn {
          background: #4A5568;
          color: white;
        }
        .use-btn {
          background: rgba(72,187,120,0.2);
          color: #48BB78;
        }
        .compare-btn {
          background: rgba(66,153,225,0.2);
          color: #4299E1;
        }
        .delete-btn {
          background: rgba(178,34,34,0.2);
          color: #ff6b6b;
          flex: 0.5;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Profile;