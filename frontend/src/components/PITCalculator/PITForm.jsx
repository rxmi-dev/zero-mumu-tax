// frontend/src/components/PITCalculator/PITForm.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import TaxBandsChart from '../Charts/TaxBandsChart';
import ReportGenerator from '../Reports/ReportGenerator';
import WhatIfComparison from '../WhatIfComparison/WhatIfComparison';
import MumuAlert from '../MumuAlert/MumuAlert';
import MumuScoreDashboard from '../MumuScore/MumuScoreDashboard';
import { formatWithCommas, parseFormattedNumber, formatCurrency } from '../../utils/formatters';

const PITCalculator = ({ 
  isLoggedIn, 
  user, 
  creditBalance, 
  setCreditBalance,
  restoreData,
  clearRestoreData,
  requireLogin,
  requireCredits 
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    employment_salary: '',
    employment_basic: '',
    employment_housing: '',
    employment_transport: '',
    employment_bonus: '',
    
    // Business fields
    business_name: '',
    business_type: '',
    business_profit: '',
    business_revenue: '',
    business_expenses: '',
    
    pension_income: '',
    pension_rsa: '',
    nhis: '',
    nhf: '',
    rent_paid: '',
    paye_deducted: '',
    wht_credits: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backendStatus, setBackendStatus] = useState('checking');
  const [saveStatus, setSaveStatus] = useState('');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showCreditPrompt, setShowCreditPrompt] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [taxYear, setTaxYear] = useState(new Date().getFullYear());
const [pendingFormData, setPendingFormData] = useState(null);
  
  const [mumuAlerts, setMumuAlerts] = useState([]);
  const [dismissedAlerts, setDismissedAlerts] = useState([]);
  const [showMumuScore, setShowMumuScore] = useState(false);

  useEffect(() => {
    checkBackend();
  }, []);

  useEffect(() => {
    if (restoreData && restoreData.type === 'pit') {
      setFormData(restoreData.data);
      if (clearRestoreData) clearRestoreData();
    }
  }, [restoreData, clearRestoreData]);

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      checkForMumuMoments();
    }
  }, [formData, result]);

  const checkBackend = async () => {
    try {
      await api.get('/health');
      setBackendStatus('connected');
    } catch {
      setBackendStatus('disconnected');
    }
  };

  const checkForMumuMoments = () => {
    const alerts = [];
    const rentPaid = parseFloat(formData.rent_paid) || 0;
    
    if (rentPaid === 0) {
      alerts.push({
        type: 'rent_relief',
        severity: 'high',
        title: 'Did you know? You can save up to ₦500,000',
        message: 'If you pay rent for your home or shop, you can claim rent relief and reduce your tax. Many people miss this!',
        action: 'Learn about rent relief',
        potential_savings: 500000,
        priority: 1
      });
    }
    
    setMumuAlerts(alerts.filter(a => !dismissedAlerts.includes(a.type)));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Text inputs (no formatting)
    if (name === 'business_name' || name === 'business_type') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } 
    // Currency inputs (with formatting)
    else {
      setFormData(prev => ({ ...prev, [name]: formatWithCommas(value) }));
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const skipToNext = () => {
  setCurrentStep(prev => Math.min(prev + 1, 5));
};

  const validateStep = () => {
    if (currentStep === 1) {
      return true;
    }
    setError('');
    return true;
  };

  const validateForm = () => {
    if (!formData.employment_salary && !formData.business_profit && !formData.pension_income) {
      setError('Please enter at least one income source');
      return false;
    }
    return true;
  };

  // ===== FIXED CALCULATE TAX FUNCTION =====
  const calculateTax = async () => {
  if (!validateForm()) return;
  
  setLoading(true);
  setError(null);

  try {
    const payload = {
      employment_salary: parseFormattedNumber(formData.employment_salary),
      employment_basic: parseFormattedNumber(formData.employment_basic),
      employment_housing: parseFormattedNumber(formData.employment_housing),
      employment_transport: parseFormattedNumber(formData.employment_transport),
      employment_bonus: parseFormattedNumber(formData.employment_bonus),
      business_profit: parseFormattedNumber(formData.business_profit),
      business_name: formData.business_name,
      business_type: formData.business_type,
      pension_income: parseFormattedNumber(formData.pension_income),
      pension_rsa: parseFormattedNumber(formData.pension_rsa),
      nhis: parseFormattedNumber(formData.nhis),
      nhf: parseFormattedNumber(formData.nhf),
      rent_paid: parseFormattedNumber(formData.rent_paid),
      paye_deducted: parseFormattedNumber(formData.paye_deducted),
      wht_credits: parseFormattedNumber(formData.wht_credits)
    };
    
    const response = await api.post('/api/v1/calculate/pit', payload);
    
    if (response.data.success) {
      setResult(response.data.data);
      
      // If user is not logged in, save the calculation to pending
      if (!isLoggedIn && setPendingCalculation) {
        setPendingCalculation({
          input_data: formData,
          result_data: response.data.data,
          tax_year: taxYear
        });
      }
    }
  } catch (err) {
    setError(err.message || 'Calculation failed');
  } finally {
    setLoading(false);
  }
};

const handleLoginSuccess = async (userData) => {
  setIsLoggedIn(true);
  setUser(userData);
  setCreditBalance(userData.credit_balance || 0);
  
  // Check if there's a pending calculation to save
  if (pendingCalculation) {
    try {
      // Auto-save the calculation (it's free!)
      await api.post('/api/calculations/save', {
        calculator_type: 'pit',
        input_data: pendingCalculation.input_data,
        result_data: pendingCalculation.result_data,
        tax_year: pendingCalculation.tax_year
      });
      
      // Show success message (optional)
      setShowNotification('Your calculation has been saved to your account!');
    } catch (err) {
      console.error('Failed to auto-save calculation', err);
    } finally {
      setPendingCalculation(null);
    }
  }
  
  // Check if there's pending form data to restore
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

  const saveCalculation = async () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    if (creditBalance < 1) {
      setShowCreditPrompt(true);
      return;
    }

    setSaveStatus('saving');

    try {
      await api.post('/api/calculations/save', {
        calculator_type: 'pit',
        input_data: formData,
        result_data: result,
        tax_year: taxYear
      });
      setCreditBalance(prev => prev - 1);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (err) {
      console.error('Save error:', err);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const clearForm = () => {
    setFormData({
      employment_salary: '', employment_basic: '', employment_housing: '', employment_transport: '',
      employment_bonus: '',
      business_name: '', business_type: '', business_profit: '', business_revenue: '', business_expenses: '',
      pension_income: '', pension_rsa: '', nhis: '', nhf: '', rent_paid: '', paye_deducted: '', wht_credits: ''
    });
    setResult(null);
    setCurrentStep(1);
  };

  const handleWhatIf = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    if (creditBalance < 2) {
      setShowCreditPrompt(true);
      return;
    }
    setShowWhatIf(true);
  };

  const calculateRentSavings = () => {
    const rent = parseFormattedNumber(formData.rent_paid) || 0;
    const relief = Math.min(rent * 0.2, 500000);
    const taxSaved = relief * 0.2;
    return { relief, taxSaved };
  };

  const stepLabels = ['Employment', 'Business', 'Other Income', 'Deductions', 'Tax Paid'];

  return (
    <div className="full-width-calculator pit-calculator">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5].map(step => (
            <div 
              key={step} 
              className={`progress-step ${currentStep >= step ? 'completed' : ''}`}
              onClick={() => setCurrentStep(step)}
            >
              <div className={`step-indicator ${currentStep >= step ? 'active' : ''}`}>
                {step}
              </div>
              <div className="step-label">{stepLabels[step-1]}</div>
            </div>
          ))}
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(currentStep / 5) * 100}%` }}></div>
        </div>
      </div>

      {/* Mumu Alerts */}
      {mumuAlerts.length > 0 && (
        <div className="alerts-container">
          {mumuAlerts.map((alert, i) => (
            <MumuAlert 
              key={i} 
              alert={alert} 
              onAction={() => {
                if (alert.type === 'rent_relief' && setActiveTab) {
                  setActiveTab('rent');
                }
              }} 
              onDismiss={() => {}} 
            />
          ))}
        </div>
      )}

      <div className="form-section">
        <div className="form-header">
          <h2>Personal Income Tax Calculator</h2>
          <div className="header-actions">
            <select value={taxYear} onChange={(e) => setTaxYear(parseInt(e.target.value))}>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            <button className="clear-btn" onClick={clearForm}>Clear</button>
          </div>
        </div>

        {/* Step 1: Employment Income */}
        {currentStep === 1 && (
          <div className="step-content">
            <h3>💰 Employment Income</h3>
            <p className="step-hint">Money from your job or salary. If you are self-employed, click "Skip" to proceed.</p>
            
            <div className="form-group">
              <label>Annual Salary (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="employment_salary"
                  value={formData.employment_salary}
                  onChange={handleChange}
                  placeholder="e.g., 5,000,000"
                />
              </div>
              <small>Your total salary before tax. If paid monthly, multiply by 12.</small>
            </div>

            <div className="form-group">
              <label>Basic Salary (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="employment_basic"
                  value={formData.employment_basic}
                  onChange={handleChange}
                  placeholder="e.g., 3,000,000"
                />
              </div>
              <small>Your base salary without allowances. Used to calculate pension and NHIS/NHF.</small>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Housing Allowance (₦)</label>
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="employment_housing"
                    value={formData.employment_housing}
                    onChange={handleChange}
                    placeholder="e.g., 1,000,000"
                  />
                </div>
                <small>Money your employer gives you for housing (different from rent you pay)</small>
              </div>
              <div className="form-group half">
                <label>Transport Allowance (₦)</label>
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="employment_transport"
                    value={formData.employment_transport}
                    onChange={handleChange}
                    placeholder="e.g., 600,000"
                  />
                </div>
                <small>Money your employer gives you for transportation</small>
              </div>
            </div>

            <div className="form-group">
              <label>13th Month Bonus (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="employment_bonus"
                  value={formData.employment_bonus}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="skip-section">
              <button className="skip-btn" onClick={skipToNext}>
                Not employed? Skip this section & fill next section →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Business Income */}
{currentStep === 2 && (
  <div className="step-content">
    <div className="step-header-with-skip">
      <h3>🏪 Business Income</h3>
      <button className="skip-btn" onClick={skipToNext}>
        Skip this section if you're employed & have filled previous section →
      </button>
    </div>
    <p className="step-hint">Tell us about your business or trade</p>
    
    {/* Rest of your business income form fields... */}
    <div className="form-group">
      <label>Business Name (if registered)</label>
      <input
        type="text"
        name="business_name"
        value={formData.business_name || ''}
        onChange={handleChange}
        placeholder="e.g., Deolu Shawarma Spot"
        className="text-input"
      />
      <small>Your business name as registered with CAC (optional)</small>
    </div>

    <div className="form-group">
      <label>Type of business</label>
      <div className="custom-select-wrapper">
        <select 
          name="business_type" 
          value={formData.business_type || ''} 
          onChange={handleChange}
          className="custom-select"
        >
          <option value="">Select business type</option>
          <option value="retail">🛒 Retail / Trading (shop, market stall)</option>
          <option value="services">💇 Services (salon, barbing, repairs)</option>
          <option value="food">🍔 Food / Restaurant / Catering</option>
          <option value="transport">🚗 Transport (taxi, bus, okada)</option>
          <option value="agriculture">🌽 Farming / Agriculture</option>
          <option value="professional">💼 Professional Services (consulting)</option>
          <option value="other">📌 Other</option>
        </select>
        <div className="select-arrow">▼</div>
      </div>
    </div>

    <div className="form-group highlight">
      <label>Business Profit (₦) <span className="required">*</span></label>
      <div className="input-wrapper">
        <span className="currency">₦</span>
        <input
          type="text"
          name="business_profit"
          value={formData.business_profit}
          onChange={handleChange}
          placeholder="e.g., 2,000,000"
        />
      </div>
      <small>Your profit after expenses (Total Sales − All Costs)</small>
    </div>

    <div className="form-row">
      <div className="form-group half">
        <label>Total Revenue/Sales (₦)</label>
        <div className="input-wrapper">
          <span className="currency">₦</span>
          <input
            type="text"
            name="business_revenue"
            value={formData.business_revenue || ''}
            onChange={handleChange}
            placeholder="e.g., 5,000,000"
          />
        </div>
        <small>Optional - helps with accuracy</small>
      </div>
      <div className="form-group half">
        <label>Total Expenses (₦)</label>
        <div className="input-wrapper">
          <span className="currency">₦</span>
          <input
            type="text"
            name="business_expenses"
            value={formData.business_expenses || ''}
            onChange={handleChange}
            placeholder="e.g., 3,000,000"
          />
        </div>
        <small>Optional - helps with accuracy</small>
      </div>
    </div>

    <div className="tip-box">
      <strong>📌 What counts as business profit?</strong>
      <p>If you're a trader: Profit = Sales − Cost of goods sold<br/>
      If you provide services: Profit = All money received − Business expenses<br/>
      Keep receipts for all expenses!</p>
    </div>

    {/* REMOVE THE OLD SKIP SECTION FROM BOTTOM */}
    {/* The old skip-section div at the bottom should be removed */}
  </div>
)}

        {/* Step 3: Other Income */}
        {currentStep === 3 && (
          <div className="step-content">
            <h3>📦 Other Income</h3>
            <p className="step-hint">Pension, rent from properties you own, etc.</p>
            
            <div className="form-group">
              <label>Pension Income (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="pension_income"
                  value={formData.pension_income}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
              <small>Monthly pension payments you receive (different from RSA contributions)</small>
            </div>
          </div>
        )}

        {/* Step 4: Deductions */}
        {currentStep === 4 && (
          <div className="step-content">
            <h3>💰 Allowable Deductions (NTA 2025)</h3>
            <p className="step-hint">These reduce your taxable income - keep receipts for all!</p>
            
            <div className="form-group highlight">
              <label>RSA Pension Contribution (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="pension_rsa"
                  value={formData.pension_rsa}
                  onChange={handleChange}
                  placeholder="e.g., 240,000"
                />
              </div>
              <small><strong>RSA = Retirement Savings Account</strong> - Money you save in your pension account. Up to 8% of your qualifying income is tax-free.</small>
            </div>

            <div className="form-row">
              <div className="form-group half highlight">
                <label>NHIS (₦)</label>
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="nhis"
                    value={formData.nhis}
                    onChange={handleChange}
                    placeholder="e.g., 150,000"
                  />
                </div>
                <small><strong>NHIS = National Health Insurance Scheme</strong> - Health insurance contributions. Up to 5% of basic salary is deductible.</small>
              </div>
              <div className="form-group half highlight">
                <label>NHF (₦)</label>
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="nhf"
                    value={formData.nhf}
                    onChange={handleChange}
                    placeholder="e.g., 75,000"
                  />
                </div>
                <small><strong>NHF = National Housing Fund</strong> - Housing contributions. Up to 2.5% of basic salary is deductible.</small>
              </div>
            </div>

            <div className="form-group rent-section">
              <label>Rent Paid (₦) - 20% deductible up to ₦500,000</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="rent_paid"
                  value={formData.rent_paid}
                  onChange={handleChange}
                  placeholder="e.g., 2,000,000"
                />
              </div>
              {formData.rent_paid && (
                <div className="rent-savings">
                  {(() => {
                    const { relief, taxSaved } = calculateRentSavings();
                    return (
                      <div className="savings-message">
                        🎉 You can claim <strong>{formatCurrency(relief)}</strong> as rent relief, 
                        saving you approximately <strong>{formatCurrency(taxSaved)}</strong> in tax!
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Tax Already Paid */}
        {currentStep === 5 && (
          <div className="step-content">
            <h3>🏦 Tax Already Paid</h3>
            <p className="step-hint">PAYE deducted by employer and WHT credits</p>
            
            <div className="form-group">
              <label>PAYE Deducted (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="paye_deducted"
                  value={formData.paye_deducted}
                  onChange={handleChange}
                  placeholder="e.g., 900,000"
                />
              </div>
              <small><strong>PAYE = Pay As You Earn</strong> - Tax your employer already deducted. Check your payslip.</small>
            </div>

            <div className="form-group">
              <label>WHT Credits (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="wht_credits"
                  value={formData.wht_credits}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
              <small><strong>WHT = Withholding Tax</strong> - Tax deducted by customers. Keep your WHT certificates.</small>
            </div>

            <div className="tip-box">
              <strong>📌 NTA 2025 Requirement:</strong> Keep these documents for 6 years:
              <ul>
                <li>Payslips (PAYE records)</li>
                <li>Rent receipts and tenancy agreement</li>
                <li>RSA pension statements</li>
                <li>NHIS/NHF payment receipts</li>
                <li>WHT credit certificates</li>
              </ul>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="step-navigation">
          {currentStep > 1 && (
            <button className="secondary-btn" onClick={prevStep}>← Back</button>
          )}
          {currentStep < 5 ? (
            <button className="primary-btn" onClick={nextStep}>Next →</button>
          ) : (
            <button className="calculate-btn" onClick={calculateTax} disabled={loading}>
              {loading ? 'Calculating...' : 'Calculate Tax'}
            </button>
          )}
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        {/* Results - FULLY RESTORED with charts and all features */}
        {result && (
          <div className="results-card">
            <h3>Your Tax Result</h3>
            
            <div className={`result-banner ${result.result_type}`}>
              {result.result_type === 'refund' ? '🎉' : result.result_type === 'additional' ? '⚠️' : '✅'}
              <span>
                {result.result_type === 'refund' && ` You overpaid by ${formatCurrency(result.refund_amount)}`}
                {result.result_type === 'additional' && ` You owe ${formatCurrency(result.additional_tax)}`}
                {result.result_type === 'balanced' && ' Your tax is perfectly balanced'}
              </span>
            </div>

            <div className="result-summary">
              <div className="summary-item">
                <span>Total Income</span>
                <strong>{formatCurrency(result.total_income)}</strong>
              </div>
              <div className="summary-item">
                <span>Total Deductions</span>
                <strong className="success">- {formatCurrency(result.total_deductions)}</strong>
              </div>
              <div className="summary-item highlight">
                <span>Taxable Income (NTA 2025)</span>
                <strong>{formatCurrency(result.chargeable_income)}</strong>
              </div>
            </div>

            {/* Tax Bands Chart - RESTORED */}
            <TaxBandsChart chargeableIncome={result.chargeable_income} />

            {/* Mumu Score Button */}
            {isLoggedIn && (
              <div className="mumu-score-section">
                <button className="mumu-score-btn" onClick={() => setShowMumuScore(true)}>
                  🛡️ View Your Mumu Score
                </button>
                <p className="mumu-score-hint">See how well you're doing according to NTA 2025 rules</p>
              </div>
            )}

            {/* What This Means - RESTORED */}
            <div className="what-this-means">
              <h4>What This Means</h4>
              <p>
                {result.result_type === 'refund' ? (
                  <>You overpaid by <strong>{formatCurrency(result.refund_amount)}</strong>. File for a refund before March 31st.</>
                ) : result.result_type === 'additional' ? (
                  <>You owe <strong>{formatCurrency(result.additional_tax)}</strong>. Pay by March 31st to avoid penalties.</>
                ) : (
                  <>Your tax is perfectly balanced. No payment or refund needed.</>
                )}
              </p>
            </div>

           {/* Action Buttons - FIXED with data preservation */}
<div className="action-buttons">
  {/* Save Button */}
  <button 
    className="action-btn save-btn" 
    onClick={() => {
      if (!isLoggedIn) {
        // Save current form data before showing login
        setPendingFormData(formData);
        setShowLoginPrompt(true);
      } else if (creditBalance < 1) {
        setShowCreditPrompt(true);
      } else {
        saveCalculation();
      }
    }}
  >
    {!isLoggedIn ? '🔒 Login to Save' : 
     creditBalance < 1 ? '⚠️ Need 1 credit' : 
     '💾 Save (1 credit)'}
  </button>
  
  {/* Report Button */}
 <button 
  className="action-btn report-btn" 
  onClick={() => {
    if (!isLoggedIn) {
      setPendingFormData(formData);
      setShowLoginPrompt(true);
      return;
    }
    if (creditBalance < 3) {
      setShowCreditPrompt(true);
      return;
    }
    setShowReportModal(true);
  }}
>
  {!isLoggedIn ? '🔒 Login to Download Report' : 
   creditBalance < 3 ? '⚠️ Need 3 credits' : 
   '📥 Download Comprehensive Tax Report (3 credits)'}
</button>
  
  {/* What-If Button */}
  <button 
    className="action-btn whatif-btn" 
    onClick={() => {
      if (!isLoggedIn) {
        setPendingFormData(formData);
        setShowLoginPrompt(true);
        return;
      }
      if (creditBalance < 2) {
        setShowCreditPrompt(true);
        return;
      }
      setShowWhatIf(true);
    }}
  >
    {!isLoggedIn ? '🔒 Login to Compare' : 
     creditBalance < 2 ? '⚠️ Need 2 credits' : 
     '🔄 Compare Scenarios (2 credits)'}
  </button>
</div>
            {saveStatus === 'success' && (
              <div className="save-success">✅ Calculation saved! (1 credit used)</div>
            )}
            {saveStatus === 'error' && (
              <div className="save-error">❌ Failed to save. Please try again.</div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {showReportModal && result && (
        <ReportGenerator
          calculation={{ input: formData, result }}
          type="pit"
          user={user}
          onClose={() => setShowReportModal(false)}
          creditBalance={creditBalance}
          setCreditBalance={setCreditBalance}
        />
      )}

      {showWhatIf && (
        <div className="modal-overlay">
          <WhatIfComparison
            baseScenario={formData}
            onClose={() => setShowWhatIf(false)}
            creditBalance={creditBalance}
            setCreditBalance={setCreditBalance}
            calculatorType="pit"
          />
        </div>
      )}

      {showMumuScore && result && (
        <div className="modal-overlay">
          <MumuScoreDashboard
            user={user}
            calculations={[{
              calculator_type: 'pit',
              input_data: formData,
              result_data: result,
              created_at: new Date().toISOString()
            }]}
            onClose={() => setShowMumuScore(false)}
          />
        </div>
      )}

      {showLoginPrompt && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={() => setShowLoginPrompt(false)}>✕</button>
            <div className="modal-icon">🔒</div>
            <h3>Login Required</h3>
            <p>Please log in to access this feature.</p>
            <div className="credit-note">💡 New users get 15 free credits!</div>
            <div className="modal-actions">
              <button onClick={() => setShowLoginPrompt(false)}>Cancel</button>
              <button onClick={() => { setShowLoginPrompt(false); requireLogin(); }}>Login</button>
            </div>
          </div>
        </div>
      )}

      {showCreditPrompt && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={() => setShowCreditPrompt(false)}>✕</button>
            <div className="modal-icon">⚠️</div>
            <h3>Insufficient Credits</h3>
            <p>You need 2 credits for What-If or 3 credits for Report.</p>
            <p className="balance">Your balance: {creditBalance} credits</p>
            <div className="modal-actions">
              <button onClick={() => setShowCreditPrompt(false)}>Cancel</button>
              <button onClick={() => { setShowCreditPrompt(false); window.dispatchEvent(new CustomEvent('open-credit-modal')); }}>Buy Credits</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .full-width-calculator { max-width: 1000px; margin: 0 auto; }
        .pit-calculator { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        
        .progress-bar-container { grid-column: 1 / -1; margin-bottom: 20px; }
        .progress-steps { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .progress-step { text-align: center; flex: 1; cursor: pointer; opacity: 0.7; }
        .progress-step.completed { opacity: 1; }
        .step-indicator { 
          width: 30px; height: 30px; border-radius: 50%; background: #2D3748; 
          color: white; display: flex; align-items: center; justify-content: center; 
          margin: 0 auto 5px; font-weight: 600;
        }
        .step-indicator.active { background: #4299E1; }
        .step-label { font-size: 11px; color: #A0AEC0; }
        .progress-track { height: 4px; background: #2D3748; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #4299E1, #48BB78); transition: width 0.3s; }
        
        .form-section { 
          background: #1A202C; border-radius: 24px; padding: 28px; color: white;
        }
        .form-header { 
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #2D3748;
        }
        .form-header h2 { margin: 0; color: #4299E1; }
        .header-actions { display: flex; gap: 12px; }
        .header-actions select { 
          padding: 8px; background: #2D3748; border: 1px solid #4A5568;
          border-radius: 8px; color: white;
        }
        .clear-btn { 
          padding: 8px 16px; background: #2D3748; border: none;
          border-radius: 8px; color: #A0AEC0; cursor: pointer;
        }
        
        .step-content h3 { margin: 0 0 4px 0; color: #4299E1; }
        .step-hint { color: #A0AEC0; font-size: 14px; margin-bottom: 24px; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; }
        .input-wrapper { position: relative; }
        .currency { 
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #A0AEC0;
        }
        .input-wrapper input, .text-input { 
          width: 100%; padding: 12px 12px 12px 40px; background: #2D3748;
          border: 1px solid #4A5568; border-radius: 8px; color: white;
        }
        .text-input { padding-left: 16px; } /* For non-currency inputs */
        small { display: block; margin-top: 4px; color: #A0AEC0; font-size: 12px; }
        
        .form-row { display: flex; gap: 20px; }
        .form-group.half { flex: 1; }
        
        .form-group.highlight { 
          padding: 16px; background: rgba(66,153,225,0.05); border-radius: 12px;
          border: 1px solid #4299E1;
        }
        
        .rent-section { 
          padding: 20px; background: rgba(72,187,120,0.05); border-radius: 12px;
          border: 1px solid #48BB78;
        }
        .rent-savings { 
          margin-top: 12px; padding: 12px; background: rgba(72,187,120,0.1);
          border-radius: 8px; color: #48BB78; font-size: 14px;
        }
        
        .skip-section { text-align: right; margin-top: 10px; }
        .skip-btn { 
          background: none; border: none; color: #4299E1;
          text-decoration: underline; cursor: pointer; font-size: 14px;
        }
        
        .custom-select-wrapper {
          position: relative;
          width: 100%;
        }
        .custom-select {
          width: 100%;
          padding: 12px 16px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          appearance: none;
          cursor: pointer;
        }
        .custom-select option {
          background: #1A202C;
          color: white;
        }
        .select-arrow {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #FFD700;
          pointer-events: none;
        }
        
        .tip-box { 
          padding: 16px; background: #2D3748; border-radius: 8px;
          border-left: 4px solid #4299E1; font-size: 13px;
        }
        .tip-box ul { margin: 8px 0 0 20px; padding: 0; }
        
        .step-navigation { 
          display: flex; justify-content: space-between; margin-top: 30px;
        }
        .secondary-btn, .primary-btn, .calculate-btn { 
          padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;
        }
        .secondary-btn { 
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .primary-btn { 
          background: #4299E1; border: none; color: white; margin-left: auto;
        }
        .calculate-btn { 
          width: 100%; background: #48BB78; border: none; color: white;
        }
        
        .results-card { 
          grid-column: 2; background: #1A202C; border-radius: 24px; padding: 24px;
        }
        .result-banner { 
          display: flex; align-items: center; gap: 12px; padding: 16px;
          border-radius: 12px; margin-bottom: 20px;
        }
        .result-banner.refund { background: rgba(72,187,120,0.1); border: 1px solid #48BB78; }
        .result-banner.additional { background: rgba(221,107,32,0.1); border: 1px solid #DD6B20; }
        .result-banner.balanced { background: rgba(66,153,225,0.1); border: 1px solid #4299E1; }
        
        .result-summary { margin-bottom: 20px; }
        .summary-item { 
          display: flex; justify-content: space-between; padding: 12px 0;
          border-bottom: 1px solid #2D3748;
        }
        .summary-item.highlight { 
          background: #2D3748; border-radius: 8px; padding: 12px; border: none;
        }
        .success { color: #48BB78; }
        
        .mumu-score-section { text-align: center; margin: 20px 0; }
        .mumu-score-btn { 
          padding: 12px 24px; background: linear-gradient(135deg, #FFD700, #FFA500);
          border: none; border-radius: 30px; color: black; font-weight: 600; cursor: pointer;
        }
        .mumu-score-hint { color: #A0AEC0; font-size: 13px; margin-top: 8px; }
        
        .what-this-means {
          margin: 20px 0;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .what-this-means h4 {
          margin: 0 0 8px 0;
          color: #4299E1;
        }
        .what-this-means p {
          margin: 0;
          color: #CBD5E0;
          line-height: 1.6;
        }
        
        .action-buttons { 
          display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px;
        }
        .action-btn { 
          flex: 1; padding: 10px; border: none; border-radius: 8px; 
          color: white; cursor: pointer; min-width: 100px;
        }
        .save-btn { background: #4A5568; }
        .report-btn { background: #4299E1; }
        .whatif-btn { background: #9F7AEA; }
        
        .save-success, .save-error { 
          margin-top: 16px; padding: 12px; border-radius: 8px; text-align: center;
        }
        .save-success { background: rgba(72,187,120,0.1); border: 1px solid #48BB78; color: #48BB78; }
        .save-error { background: rgba(221,107,32,0.1); border: 1px solid #DD6B20; color: #FBD38D; }
        
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; padding: 20px;
        }
        .modal-card {
          background: #1A202C; border-radius: 24px; padding: 32px;
          max-width: 400px; width: 100%; position: relative;
        }
        .close-btn {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: #A0AEC0; font-size: 20px;
          cursor: pointer;
        }
        .modal-icon { font-size: 48px; text-align: center; margin-bottom: 16px; }
        .modal-card h3 { text-align: center; margin: 0 0 8px 0; color: white; }
        .modal-card p { text-align: center; color: #CBD5E0; margin-bottom: 8px; }
        .balance { color: #FFD700 !important; font-weight: 600; }
        .credit-note { 
          text-align: center; padding: 12px; background: rgba(255,215,0,0.1);
          border-radius: 8px; color: #FFD700; margin: 20px 0;
        }
        .modal-actions { display: flex; gap: 12px; }
        .modal-actions button {
          flex: 1; padding: 12px; border-radius: 8px; cursor: pointer;
          font-weight: 600;
        }
        .modal-actions button:first-child {
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .modal-actions button:last-child {
          background: #4299E1; border: none; color: white;
        }
        
        @media (max-width: 768px) {
          .pit-calculator { grid-template-columns: 1fr; }
          .results-card { grid-column: 1; }
          .form-row { flex-direction: column; }
          .action-buttons { flex-direction: column; }
        }

.skip-section {
  text-align: right;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px dashed #4A5568;
}

.skip-btn {
  background: none;
  border: none;
  color: #4299E1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
}

.skip-btn:hover {
  color: #63B3ED;
}
.step-header-with-skip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 12px;
}

.step-header-with-skip h3 {
  margin: 0;
}

.step-header-with-skip .skip-btn {
  background: none;
  border: none;
  color: #4299E1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  white-space: nowrap;
}

.step-header-with-skip .skip-btn:hover {
  color: #63B3ED;
}
      `}</style>
    </div>
  );
};

export default PITCalculator;