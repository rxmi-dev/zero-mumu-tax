// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import api from './utils/api';
import PITCalculator from './components/PITCalculator/PITForm';
import CITCalculator from './components/CITCalculator/CITCalculator';
import VATCalculator from './components/VATCalculator/VATForm';
import WHTFinder from './components/WHTFinder/WHTFinder';
import RentRelief from './components/RentRelief/RentRelief';
import NRSGuidance from './components/NRSGuidance/NRSGuidance';
import AuthContainer from './components/Auth/AuthContainer';
import Profile from './components/Auth/Profile';
import ProfileSetup from './components/Auth/ProfileSetup';
import CreditPurchaseModal from './components/CreditPurchase/CreditPurchaseModal';
import ReferralModal from './components/Referral/ReferralModal';
import NigerianLogo from './components/Logo/NigerianLogo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTab = params.get('tab');
    if (urlTab && ['pit', 'cit', 'vat', 'wht', 'rent', 'guidance', 'account'].includes(urlTab)) {
      return urlTab;
    }
    const savedTab = sessionStorage.getItem('activeTab');
    return savedTab || 'pit';
  });
  
  const [backendStatus, setBackendStatus] = useState('checking');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [creditBalance, setCreditBalance] = useState(0);
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [showLoginNudge, setShowLoginNudge] = useState(false);
  const [nudgeCalculator, setNudgeCalculator] = useState(null);
  const [restoreCalculation, setRestoreCalculation] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [showReferralModal, setShowReferralModal] = useState(false);
  const [userStats, setUserStats] = useState(null);
  const [pendingFormData, setPendingFormData] = useState(null);
  const [pendingCalculation, setPendingCalculation] = useState(null);

  // Compute if profile setup is needed directly from user data
  const needsProfile = isLoggedIn && user && (!user.date_of_birth || !user.occupation || !user.state_of_origin || !user.state_of_residence);

  useEffect(() => {
    sessionStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    checkBackend();
    checkAuth();
    
    const interval = setInterval(refreshToken, 25 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeTab) {
      window.history.replaceState({}, '', `/?tab=${activeTab}`);
    }
  }, [activeTab]);

  // If profile is needed and we're not on account tab, redirect
  useEffect(() => {
    if (needsProfile && activeTab !== 'account') {
      setActiveTab('account');
    }
  }, [needsProfile, activeTab]);

  useEffect(() => {
    const handleOpenCreditModal = () => setShowCreditModal(true);
    window.addEventListener('open-credit-modal', handleOpenCreditModal);
    return () => window.removeEventListener('open-credit-modal', handleOpenCreditModal);
  }, []);

  const checkBackend = async () => {
    try {
      await api.get('/health');
      setBackendStatus('connected');
    } catch {
      setBackendStatus('disconnected');
    }
  };

  const refreshToken = async () => {
    try {
      const refresh = sessionStorage.getItem('refresh_token');
      if (!refresh) return;
      const res = await api.post('/api/auth/refresh', {}, { headers: { Authorization: `Bearer ${refresh}` } });
      if (res.data.success) {
        sessionStorage.setItem('access_token', res.data.access_token);
      }
    } catch (err) {
      console.log('Token refresh failed', err);
    }
  };

  const checkAuth = async () => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      setAuthChecked(true);
      return;
    }

    try {
      const res = await api.get('/api/auth/me');
      if (res.data.success) {
        setUser(res.data.user);
        setIsLoggedIn(true);
        setCreditBalance(res.data.user.credit_balance || 0);
      }
    } catch {
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('refresh_token');
      sessionStorage.removeItem('user');
    } finally {
      setAuthChecked(true);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await api.get('/api/auth/me');
      if (res.data.success) {
        setUser(res.data.user);
        setCreditBalance(res.data.user.credit_balance || 0);
      }
    } catch (err) {
      console.error('Failed to fetch user data', err);
    }
  };

  const fetchUserStats = async () => {
    try {
      const res = await api.get('/api/stats/user-impact');
      if (res.data.success) {
        setUserStats(res.data.stats);
      }
    } catch {}
  };

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setCreditBalance(userData.credit_balance || 0);
    
    if (pendingFormData) {
      setRestoreCalculation({
        type: 'pit',
        data: pendingFormData
      });
      setPendingFormData(null);
      setActiveTab('pit');
    } else if (pendingAction) {
      setActiveTab(pendingAction);
      setPendingAction(null);
    } else {
      setActiveTab('account');
    }
    setShowLoginNudge(false);
  };

  const handleProfileComplete = async (updatedUser) => {
    setUser(updatedUser);
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    await fetchUserData(); // Refresh to ensure consistency
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    setCreditBalance(0);
    setActiveTab('pit');
    window.history.pushState({}, '', '/?tab=pit');
  };

  const handleCreditPurchase = (amount, credits, newBalance) => {
    setCreditBalance(newBalance);
    setShowCreditModal(false);
    if (pendingAction) {
      setTimeout(() => {
        setActiveTab(pendingAction);
        setPendingAction(null);
      }, 500);
    }
  };

  const handleTabClick = (tabName, creditCost) => {
    window.history.pushState({}, '', `/?tab=${tabName}`);
    if (tabName === 'pit') { setActiveTab('pit'); return; }
    if (!isLoggedIn) {
      setNudgeCalculator({ name: tabName, cost: creditCost });
      setShowLoginNudge(true);
      return;
    }
    // Use the same computed condition
    if (user && (!user.date_of_birth || !user.occupation || !user.state_of_origin || !user.state_of_residence)) {
      setActiveTab('account');
      return;
    }
    if (creditBalance < creditCost) {
      setPendingAction(tabName);
      setShowCreditModal(true);
      return;
    }
    setActiveTab(tabName);
  };

  if (!authChecked) return null;

  return (
    <Router>
      <Routes>
        <Route path="*" element={
          <div className="App">
            <div className="gradient-bg">
              <div className="gradient-sphere sphere-1"></div>
              <div className="gradient-sphere sphere-2"></div>
              <div className="gradient-sphere sphere-3"></div>
            </div>

            <div className="container">
              <RouteHandler setActiveTab={setActiveTab} setRestoreCalculation={setRestoreCalculation} />

              <header className="header">
                <div className="logo-container">
                  <NigerianLogo />
                  <div>
                    <h1>ZERO MUMU TAX</h1>
                    <p className="subtitle">NTA 2025 • Nigeria Revenue Service</p>
                  </div>
                </div>
                
                <div className="header-actions">  
                  {isLoggedIn ? (
                    <>
                      <div className="credit-badge" onClick={() => setShowCreditModal(true)}>
                        <span>💰</span> {creditBalance} credits
                      </div>
                      <button className="logout-btn" onClick={handleLogout}>
                        🚪 Logout
                      </button>
                    </>
                  ) : (
                    null
                  )}
                  
                  <div className={`status-badge ${backendStatus}`}>
                    <span className="status-dot"></span>
                    {backendStatus}
                  </div>
                </div>
              </header>

              {backendStatus === 'disconnected' && (
                <div className="warning-banner">⚠️ Backend not running. Run: cd backend && python run.py</div>
              )}

              {showLoginNudge && (
                <div className="modal-overlay">
                  <div className="modal-card">
                    <button className="close-btn" onClick={() => setShowLoginNudge(false)}>✕</button>
                    <div className="modal-icon">🔒</div>
                    <h3>Login to Access {nudgeCalculator?.name}</h3>
                    <p>This calculator costs {nudgeCalculator?.cost} credit(s).</p>
                    <div className="credit-note">💡 New users get 15 free credits!</div>
                    <div className="modal-actions">
                      <button onClick={() => setShowLoginNudge(false)}>Cancel</button>
                      <button onClick={() => { setPendingAction(nudgeCalculator?.name); setShowLoginNudge(false); setActiveTab('account'); }}>
                        Login / Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {needsProfile && (
                <ProfileSetup user={user} onComplete={handleProfileComplete} onLogout={handleLogout} />
              )}

              {showReferralModal && (
                <ReferralModal user={user} onClose={() => setShowReferralModal(false)} />
              )}

              <div className="app-tabs">
                <button className={`tab-button ${activeTab === 'pit' ? 'active' : ''}`} onClick={() => handleTabClick('pit', 0)}>
                  Personal Income Tax {!isLoggedIn && <span className="free-badge">🔓</span>}
                </button>
                <button className={`tab-button ${activeTab === 'cit' ? 'active' : ''}`} onClick={() => handleTabClick('cit', 2)}>
                  Company Income Tax {!isLoggedIn && <span className="free-badge">🔒</span>}
                  {isLoggedIn && creditBalance < 2 && <span className="warning-badge">⚠️</span>}
                </button>
                <button className={`tab-button ${activeTab === 'vat' ? 'active' : ''}`} onClick={() => handleTabClick('vat', 1)}>
                  Value Added Tax (VAT) {!isLoggedIn && <span className="free-badge">🔒</span>}
                  {isLoggedIn && creditBalance < 1 && <span className="warning-badge">⚠️</span>}
                </button>
                <button className={`tab-button ${activeTab === 'wht' ? 'active' : ''}`} onClick={() => handleTabClick('wht', 1)}>
                  Withholding Tax (WHT) {!isLoggedIn && <span className="free-badge">🔒</span>}
                  {isLoggedIn && creditBalance < 1 && <span className="warning-badge">⚠️</span>}
                </button>
                <button className={`tab-button ${activeTab === 'rent' ? 'active' : ''}`} onClick={() => handleTabClick('rent', 1)}>
                  Rent Relief {!isLoggedIn && <span className="free-badge">🔒</span>}
                  {isLoggedIn && creditBalance < 1 && <span className="warning-badge">⚠️</span>}
                </button>
                <button className={`tab-button ${activeTab === 'guidance' ? 'active' : ''}`} onClick={() => setActiveTab('guidance')}>
                  NRS Guidance
                </button>
                <button className={`tab-button ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>
                  {isLoggedIn ? 'My Account' : 'Login / Sign Up'}
                </button>
              </div>

              <div className="calculator-container">
                {activeTab === 'pit' && (
                  <PITCalculator 
                    isLoggedIn={isLoggedIn} 
                    user={user}
                    creditBalance={creditBalance}
                    setCreditBalance={setCreditBalance}
                    restoreData={restoreCalculation}
                    clearRestoreData={() => setRestoreCalculation(null)}
                    pendingFormData={pendingFormData}
                    setPendingFormData={setPendingFormData}
                    pendingCalculation={pendingCalculation}
                    setPendingCalculation={setPendingCalculation}
                    requireLogin={() => { 
                      setPendingAction('pit'); 
                      setActiveTab('account'); 
                    }}
                    requireCredits={(credits, action) => {
                      if (creditBalance >= credits) {
                        action();
                      } else {
                        setPendingAction('pit');
                        setShowCreditModal(true);
                      }
                    }}
                  />
                )}
                
                {activeTab === 'cit' && (
                  isLoggedIn ? (
                    // Use the same computed condition
                    (user && user.date_of_birth && user.occupation && user.state_of_origin && user.state_of_residence) ? (
                      <CITCalculator 
                        isLoggedIn={isLoggedIn}
                        user={user}
                        creditBalance={creditBalance}
                        setCreditBalance={setCreditBalance}
                        restoreData={restoreCalculation}
                        clearRestoreData={() => setRestoreCalculation(null)}
                        requireLogin={() => { 
                          setPendingAction('cit'); 
                          setActiveTab('account'); 
                        }}
                        requireCredits={(credits, action) => {
                          if (creditBalance >= credits) {
                            action();
                          } else {
                            setPendingAction('cit');
                            setShowCreditModal(true);
                          }
                        }}
                      />
                    ) : <ProfileNeeded />
                  ) : <LoginNeeded tab="CIT" credits={2} onLogin={() => { setPendingAction('cit'); setActiveTab('account'); }} />
                )}
                
                {activeTab === 'vat' && (
                  isLoggedIn ? (
                    (user && user.date_of_birth && user.occupation && user.state_of_origin && user.state_of_residence) ? (
                      <VATCalculator 
                        isLoggedIn={isLoggedIn}
                        creditBalance={creditBalance}
                        setCreditBalance={setCreditBalance}
                        restoreData={restoreCalculation}
                        clearRestoreData={() => setRestoreCalculation(null)}
                        requireLogin={() => { 
                          setPendingAction('vat'); 
                          setActiveTab('account'); 
                        }}
                        requireCredits={(credits, action) => {
                          if (creditBalance >= credits) {
                            action();
                          } else {
                            setPendingAction('vat');
                            setShowCreditModal(true);
                          }
                        }}
                      />
                    ) : <ProfileNeeded />
                  ) : <LoginNeeded tab="VAT" credits={1} onLogin={() => { setPendingAction('vat'); setActiveTab('account'); }} />
                )}
                
                {activeTab === 'wht' && (
                  isLoggedIn ? (
                    (user && user.date_of_birth && user.occupation && user.state_of_origin && user.state_of_residence) ? (
                      <WHTFinder 
                        isLoggedIn={isLoggedIn}
                        creditBalance={creditBalance}
                        setCreditBalance={setCreditBalance}
                        restoreData={restoreCalculation}
                        clearRestoreData={() => setRestoreCalculation(null)}
                        requireLogin={() => { 
                          setPendingAction('wht'); 
                          setActiveTab('account'); 
                        }}
                        requireCredits={(credits, action) => {
                          if (creditBalance >= credits) {
                            action();
                          } else {
                            setPendingAction('wht');
                            setShowCreditModal(true);
                          }
                        }}
                      />
                    ) : <ProfileNeeded />
                  ) : <LoginNeeded tab="WHT" credits={1} onLogin={() => { setPendingAction('wht'); setActiveTab('account'); }} />
                )}
                
                {activeTab === 'rent' && (
                  isLoggedIn ? (
                    (user && user.date_of_birth && user.occupation && user.state_of_origin && user.state_of_residence) ? (
                      <RentRelief 
                        isLoggedIn={isLoggedIn}
                        creditBalance={creditBalance}
                        setCreditBalance={setCreditBalance}
                        restoreData={restoreCalculation}
                        clearRestoreData={() => setRestoreCalculation(null)}
                        requireLogin={() => { 
                          setPendingAction('rent'); 
                          setActiveTab('account'); 
                        }}
                        requireCredits={(credits, action) => {
                          if (creditBalance >= credits) {
                            action();
                          } else {
                            setPendingAction('rent');
                            setShowCreditModal(true);
                          }
                        }}
                      />
                    ) : <ProfileNeeded />
                  ) : <LoginNeeded tab="Rent Relief" credits={1} onLogin={() => { setPendingAction('rent'); setActiveTab('account'); }} />
                )}
                
                {activeTab === 'guidance' && <NRSGuidance />}
                
                {activeTab === 'account' && (
                  isLoggedIn ? (
                    <Profile 
                      user={user} 
                      onLogout={handleLogout}
                      creditBalance={creditBalance}
                      setCreditBalance={setCreditBalance}
                      setRestoreCalculation={setRestoreCalculation}
                      setActiveTab={setActiveTab}
                      userStats={userStats}
                    />
                  ) : (
                    <AuthContainer onLoginSuccess={handleLoginSuccess} />
                  )
                )}
              </div>

              <footer className="footer">
                <p>Zero Mumu Tax App • NTA 2025 Compliant</p>
                <p className="disclaimer">This is an estimation tool. Always consult a tax professional.</p>
              </footer>
            </div>

            <CreditPurchaseModal 
              isOpen={showCreditModal} 
              onClose={() => { setShowCreditModal(false); setPendingAction(null); }} 
              onPurchase={handleCreditPurchase} 
              currentBalance={creditBalance} 
              requiredCredits={pendingAction ? 2 : 1} 
            />
          </div>
        } />
      </Routes>
    </Router>
  );
}

const LoginNeeded = ({ tab, credits, onLogin }) => (
  <div className="form-section" style={{ padding: '60px 40px', textAlign: 'center' }}>
    <div className="icon-large">🔒</div>
    <h2>Login Required</h2>
    <p>The {tab} Calculator costs {credits} credit(s). Please log in.</p>
    <div className="credit-note">💡 New users get 15 free credits!</div>
    <button className="primary-btn" onClick={onLogin}>Login / Sign Up</button>
  </div>
);

const ProfileNeeded = () => (
  <div className="form-section" style={{ padding: '60px 40px', textAlign: 'center' }}>
    <div className="icon-large">👤</div>
    <h2>Complete Your Profile First</h2>
    <p>Please complete your profile to access calculators.</p>
    <button className="primary-btn" onClick={() => window.location.href = '/?tab=account'}>Go to Profile</button>
  </div>
);

export default App;