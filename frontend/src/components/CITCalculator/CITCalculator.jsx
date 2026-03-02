// frontend/src/components/CITCalculator/CITCalculator.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import CITReportGenerator from '../Reports/CITReportGenerator';
import WhatIfComparison from '../WhatIfComparison/WhatIfComparison';
import MumuAlert from '../MumuAlert/MumuAlert';
import MumuScoreDashboard from '../MumuScore/MumuScoreDashboard';
import { formatWithCommas, parseFormattedNumber, formatCurrency } from '../../utils/formatters';

const CITCalculator = ({ 
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
    business_name: '',
    business_type: 'trading',
    industry: 'general',
    turnover: '',
    total_assets: '',
    years_in_business: '5',
    
    // Income toggles
    has_trading_profit: 'no',
    trading_profit: '',
    has_rental_income: 'no',
    rental_income: '',
    has_dividend_income: 'no',
    dividend_income: '',
    has_interest_income: 'no',
    interest_income: '',
    
    // Expense toggles
    has_operating_expenses: 'no',
    operating_expenses: '',
    has_interest_expense: 'no',
    interest_expense: '',
    has_bad_debts: 'no',
    bad_debts: '',
    has_pension_contributions: 'no',
    pension_contributions: '',
    
    // Capital Allowances
    has_industrial_building: 'no',
    industrial_building: '',
    has_plant_machinery: 'no',
    plant_machinery: '',
    has_furniture_fittings: 'no',
    furniture_fittings: '',
    has_motor_vehicle: 'no',
    motor_vehicle: '',
    
    // Losses and Credits
    has_losses_brought_forward: 'no',
    losses_brought_forward: '',
    has_wht_credits: 'no',
    wht_credits: '',
    
    // Special status
    is_first_4_years: false,
    is_professional_service: false
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showCreditPrompt, setShowCreditPrompt] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [showMumuScore, setShowMumuScore] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [mumuAlerts, setMumuAlerts] = useState([]);
  const [dismissedAlerts, setDismissedAlerts] = useState([]);

  useEffect(() => {
    if (restoreData && restoreData.type === 'cit') {
      setFormData(restoreData.data);
      if (clearRestoreData) clearRestoreData();
    }
  }, [restoreData, clearRestoreData]);

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      checkForMumuMoments();
    }
  }, [formData, result]);

  // ===== PLAIN ENGLISH EXPLANATIONS =====
  const explanations = {
    business_name: "Enter the exact name your business is registered with at CAC. This is the official name that will appear on your tax documents.",
    
    business_type: "Select what your business mainly does. Professional services like law firms, accounting firms, and medical practices are treated differently – they CANNOT qualify as small companies even if turnover is under ₦100M. They pay 30% CIT.",
    
    turnover: "Your TOTAL SALES for the year – all money that came into your business BEFORE paying any expenses. Example: If you sold goods worth ₦50 million, enter 50,000,000.",
    
    total_assets: "The TOTAL VALUE of everything your business OWNS – buildings, land, machines, vehicles, equipment, money in the bank, and money customers owe you.",
    
    years_in_business: "How many years has your company been operating? New businesses (less than 4 years) may be exempt from paying minimum tax.",
    
    trading_profit: "Profit from your main business activities (Sales minus Cost of Goods Sold). Example: You sold ₦1M worth of goods that cost you ₦400K – your profit is ₦600K.",
    
    rental_income: "Money you receive from renting property you own – shops, offices, houses rented to others. Enter the total rent received for the year.",
    
    operating_expenses: "Regular business costs: salaries, rent, electricity, internet, office supplies, transportation, marketing.",
    
    interest_expense: "Interest you paid on business loans, overdrafts, or borrowed money. Check loan statements.",
    
    pension_contributions: "Money paid into staff pension schemes (required by law). If you have employees, this is mandatory.",
    
    industrial_building: "Factory, warehouse, or building where you produce/manufacture goods. Not regular offices. Qualifies for 10% capital allowance.",
    
    plant_machinery: "Equipment used in production – generators, manufacturing machines, industrial equipment. Qualifies for 20% capital allowance.",
    
    furniture_fittings: "Office furniture, computers, printers, air conditioners, etc. Qualifies for 20% capital allowance.",
    
    motor_vehicle: "Cars, trucks, vans used for business (not personal use). Qualifies for 20% capital allowance.",
    
    losses_brought_forward: "If your business made a loss in previous years, you can use that loss to reduce tax in profitable years. Enter total unused losses.",
    
    wht_credits: "WHT (Withholding Tax) that customers deducted from your payments. You can claim this back. You should have certificates.",
    
    is_first_4_years: "If your business started less than 4 years ago, you may be exempt from paying minimum tax. This is a big benefit for new businesses!",
    
    is_professional_service: "Check this if you are a law firm, accounting firm, medical practice, or consulting firm. Professional services pay 30% CIT regardless of turnover."
  };

  const Explanation = ({ text }) => (
    <div className="explanation-box">
      <span className="explanation-icon">📌</span>
      <span className="explanation-text">{text}</span>
    </div>
  );

  const checkForMumuMoments = () => {
    const alerts = [];
    const turnover = parseFloat(formData.turnover) || 0;
    
    if (turnover <= 100000000 && result?.company_tier === 'large' && !formData.is_professional_service) {
      alerts.push({
        type: 'cit_classification',
        severity: 'high',
        title: 'Your business may be misclassified',
        message: `Based on your turnover of ₦${turnover.toLocaleString()}, you may qualify as a small company which pays 0% CIT.`,
        action: 'Learn about classification',
        potential_savings: result?.cit || 0,
        priority: 1
      });
    }
    
    setMumuAlerts(alerts.filter(a => !dismissedAlerts.includes(a.type)));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('profit') || name.includes('expense') || name.includes('building') || 
        name.includes('machinery') || name.includes('fittings') || name.includes('vehicle') ||
        name === 'turnover' || name === 'total_assets' || name.includes('losses') || 
        name.includes('wht') || name.includes('pension')) {
      setFormData(prev => ({ ...prev, [name]: formatWithCommas(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'has_trading_profit' && value === 'no' ? { trading_profit: '' } : {}),
      ...(field === 'has_rental_income' && value === 'no' ? { rental_income: '' } : {}),
      ...(field === 'has_dividend_income' && value === 'no' ? { dividend_income: '' } : {}),
      ...(field === 'has_interest_income' && value === 'no' ? { interest_income: '' } : {}),
      ...(field === 'has_operating_expenses' && value === 'no' ? { operating_expenses: '' } : {}),
      ...(field === 'has_interest_expense' && value === 'no' ? { interest_expense: '' } : {}),
      ...(field === 'has_bad_debts' && value === 'no' ? { bad_debts: '' } : {}),
      ...(field === 'has_pension_contributions' && value === 'no' ? { pension_contributions: '' } : {}),
      ...(field === 'has_industrial_building' && value === 'no' ? { industrial_building: '' } : {}),
      ...(field === 'has_plant_machinery' && value === 'no' ? { plant_machinery: '' } : {}),
      ...(field === 'has_furniture_fittings' && value === 'no' ? { furniture_fittings: '' } : {}),
      ...(field === 'has_motor_vehicle' && value === 'no' ? { motor_vehicle: '' } : {}),
      ...(field === 'has_losses_brought_forward' && value === 'no' ? { losses_brought_forward: '' } : {}),
      ...(field === 'has_wht_credits' && value === 'no' ? { wht_credits: '' } : {})
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const validateForm = () => {
    if (!formData.business_name?.trim()) {
      setError('Please enter your business name');
      return false;
    }
    if (!formData.turnover || parseFormattedNumber(formData.turnover) <= 0) {
      setError('Please enter your annual turnover');
      return false;
    }
    return true;
  };

  const calculateCapitalAllowances = () => {
    let total = 0;
    const rates = {
      industrial_building: 0.10,
      plant_machinery: 0.20,
      furniture_fittings: 0.20,
      motor_vehicle: 0.20
    };

    if (formData.has_industrial_building === 'yes') {
      total += parseFormattedNumber(formData.industrial_building) * rates.industrial_building;
    }
    if (formData.has_plant_machinery === 'yes') {
      total += parseFormattedNumber(formData.plant_machinery) * rates.plant_machinery;
    }
    if (formData.has_furniture_fittings === 'yes') {
      total += parseFormattedNumber(formData.furniture_fittings) * rates.furniture_fittings;
    }
    if (formData.has_motor_vehicle === 'yes') {
      total += parseFormattedNumber(formData.motor_vehicle) * rates.motor_vehicle;
    }

    return total;
  };

  const performCalculation = async () => {
    setLoading(true);
    setError(null);

    try {
      const tradingProfit = formData.has_trading_profit === 'yes' ? parseFormattedNumber(formData.trading_profit) : 0;
      const rentalIncome = formData.has_rental_income === 'yes' ? parseFormattedNumber(formData.rental_income) : 0;
      const dividendIncome = formData.has_dividend_income === 'yes' ? parseFormattedNumber(formData.dividend_income) : 0;
      const interestIncome = formData.has_interest_income === 'yes' ? parseFormattedNumber(formData.interest_income) : 0;
      
      const operatingExpenses = formData.has_operating_expenses === 'yes' ? parseFormattedNumber(formData.operating_expenses) : 0;
      const interestExpense = formData.has_interest_expense === 'yes' ? parseFormattedNumber(formData.interest_expense) : 0;
      const badDebts = formData.has_bad_debts === 'yes' ? parseFormattedNumber(formData.bad_debts) : 0;
      const pensionContributions = formData.has_pension_contributions === 'yes' ? parseFormattedNumber(formData.pension_contributions) : 0;
      
      const turnover = parseFormattedNumber(formData.turnover);
      const totalAssets = parseFormattedNumber(formData.total_assets);
      
      const totalIncome = tradingProfit + rentalIncome + dividendIncome + interestIncome;
      const totalExpenses = operatingExpenses + interestExpense + badDebts + pensionContributions;
      
      const pbt = totalIncome - totalExpenses;
      const capitalAllowances = calculateCapitalAllowances();
      const assessableProfit = Math.max(0, pbt - capitalAllowances);
      
      const lossesBroughtForward = formData.has_losses_brought_forward === 'yes' ? parseFormattedNumber(formData.losses_brought_forward) : 0;
      const profitAfterLosses = Math.max(0, assessableProfit - lossesBroughtForward);
      
      const isSmall = turnover <= 100000000 && totalAssets <= 250000000 && !formData.is_professional_service;
      const companyTier = isSmall ? 'small' : 'large';
      const citRate = isSmall ? 0 : 0.30;
      const levyRate = isSmall ? 0 : 0.04;
      
      const cit = profitAfterLosses * citRate;
      const levy = profitAfterLosses * levyRate;
      const totalTax = cit + levy;
      
      const whtCredits = formData.has_wht_credits === 'yes' ? parseFormattedNumber(formData.wht_credits) : 0;
      const finalTaxPayable = Math.max(0, totalTax - whtCredits);

      const result = {
        company_tier: companyTier,
        total_income: totalIncome,
        total_expenses: totalExpenses,
        pbt: pbt,
        capital_allowances: capitalAllowances,
        assessable_profit: profitAfterLosses,
        cit_rate: citRate * 100,
        cit: cit,
        levy_rate: levyRate * 100,
        levy: levy,
        total_tax_payable: finalTaxPayable,
        wht_credits_used: Math.min(whtCredits, totalTax)
      };

      setCreditBalance(prev => prev - 2);
      setResult(result);

    } catch (err) {
      setError(err.message || 'Calculation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = () => {
    if (!isLoggedIn) { setShowLoginPrompt(true); return; }
    if (!validateForm()) return;
    if (creditBalance < 2) { setShowCreditPrompt(true); return; }
    performCalculation();
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
        calculator_type: 'cit',
        input_data: formData,
        result_data: result,
        tax_year: new Date().getFullYear()
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

  const stepLabels = ['Business Info', 'Income', 'Expenses', 'Assets', 'Losses', 'Review'];

  return (
    <div className="cit-container">
      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map(step => (
            <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
              <div className="step-number">{step}</div>
              <div className="step-label">{stepLabels[step-1]}</div>
            </div>
          ))}
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(currentStep / 6) * 100}%` }}></div>
        </div>
      </div>

      {/* Mumu Alerts */}
      {mumuAlerts.length > 0 && (
        <div className="alerts-container">
          {mumuAlerts.map((alert, i) => (
            <MumuAlert key={i} alert={alert} onAction={() => {}} onDismiss={() => {}} />
          ))}
        </div>
      )}

      <div className="cit-card">
        <h2>Companies Income Tax (CIT) Calculator</h2>
        <p className="subtitle">NTA 2025 Compliant • 2 credits per calculation</p>

        {/* Step 1: Business Info */}
        {currentStep === 1 && (
          <div className="step-content">
            <h3>Step 1: Business Information</h3>
            
            <div className="form-group">
              <label>Business/Company Name <span className="required">*</span></label>
              <input
                type="text"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="e.g., Deolu's Supermarket Ltd"
              />
              <Explanation text={explanations.business_name} />
            </div>

            <div className="form-group">
              <label>What does your business do?</label>
              <select name="business_type" value={formData.business_type} onChange={handleChange}>
                <option value="trading">🛒 Trading / Retail (buying and selling goods)</option>
                <option value="manufacturing">🏭 Manufacturing / Production</option>
                <option value="services">💼 Services (salon, repairs, consulting)</option>
                <option value="professional">⚖️ Professional Services (Law, Accounting, Medical)</option>
                <option value="other">📌 Other</option>
              </select>
              <Explanation text={explanations.business_type} />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Annual Turnover (₦) <span className="required">*</span></label>
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="turnover"
                    value={formData.turnover}
                    onChange={handleChange}
                    placeholder="e.g., 50,000,000"
                  />
                </div>
                <Explanation text={explanations.turnover} />
              </div>
              <div className="form-group half">
                <label>Total Assets (₦) <span className="required">*</span></label>
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="total_assets"
                    value={formData.total_assets}
                    onChange={handleChange}
                    placeholder="e.g., 20,000,000"
                  />
                </div>
                <Explanation text={explanations.total_assets} />
              </div>
            </div>

            <div className="form-group">
              <label>Years in Business</label>
              <select name="years_in_business" value={formData.years_in_business} onChange={handleChange}>
                <option value="1">Less than 1 year</option>
                <option value="2">1-2 years</option>
                <option value="3">3-4 years</option>
                <option value="5">5+ years</option>
              </select>
              <Explanation text={explanations.years_in_business} />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.is_first_4_years}
                  onChange={(e) => setFormData({...formData, is_first_4_years: e.target.checked})}
                />
                My business is less than 4 years old
              </label>
              <Explanation text={explanations.is_first_4_years} />
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.is_professional_service}
                  onChange={(e) => setFormData({...formData, is_professional_service: e.target.checked})}
                />
                This is a professional service firm (law, accounting, medical, consulting)
              </label>
              <Explanation text={explanations.is_professional_service} />
            </div>
          </div>
        )}

        {/* Step 2: Income */}
        {currentStep === 2 && (
          <div className="step-content">
            <h3>Step 2: Income Sources</h3>
            
            <div className="toggle-section">
              <label>Trading Profit</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_trading_profit === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_trading_profit', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_trading_profit === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_trading_profit', 'no')}>No</button>
              </div>
              {formData.has_trading_profit === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="trading_profit"
                      value={formData.trading_profit}
                      onChange={handleChange}
                      placeholder="Enter trading profit"
                    />
                  </div>
                  <Explanation text={explanations.trading_profit} />
                </>
              )}
            </div>

            <div className="toggle-section">
              <label>Rental Income</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_rental_income === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_rental_income', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_rental_income === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_rental_income', 'no')}>No</button>
              </div>
              {formData.has_rental_income === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="rental_income"
                      value={formData.rental_income}
                      onChange={handleChange}
                      placeholder="Enter rental income"
                    />
                  </div>
                  <Explanation text={explanations.rental_income} />
                </>
              )}
            </div>

            <div className="toggle-section">
              <label>Dividend Income</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_dividend_income === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_dividend_income', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_dividend_income === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_dividend_income', 'no')}>No</button>
              </div>
              {formData.has_dividend_income === 'yes' && (
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="dividend_income"
                    value={formData.dividend_income}
                    onChange={handleChange}
                    placeholder="Enter dividend income"
                  />
                </div>
              )}
            </div>

            <div className="toggle-section">
              <label>Interest Income</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_interest_income === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_interest_income', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_interest_income === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_interest_income', 'no')}>No</button>
              </div>
              {formData.has_interest_income === 'yes' && (
                <div className="input-wrapper">
                  <span className="currency">₦</span>
                  <input
                    type="text"
                    name="interest_income"
                    value={formData.interest_income}
                    onChange={handleChange}
                    placeholder="Enter interest income"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Expenses */}
        {currentStep === 3 && (
          <div className="step-content">
            <h3>Step 3: Allowable Expenses</h3>
            
            <div className="toggle-section">
              <label>Operating Expenses</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_operating_expenses === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_operating_expenses', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_operating_expenses === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_operating_expenses', 'no')}>No</button>
              </div>
              {formData.has_operating_expenses === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="operating_expenses"
                      value={formData.operating_expenses}
                      onChange={handleChange}
                      placeholder="Salaries, rent, utilities, etc."
                    />
                  </div>
                  <Explanation text={explanations.operating_expenses} />
                </>
              )}
            </div>

            <div className="toggle-section">
              <label>Interest Expense</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_interest_expense === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_interest_expense', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_interest_expense === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_interest_expense', 'no')}>No</button>
              </div>
              {formData.has_interest_expense === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="interest_expense"
                      value={formData.interest_expense}
                      onChange={handleChange}
                      placeholder="Interest on loans"
                    />
                  </div>
                  <Explanation text={explanations.interest_expense} />
                </>
              )}
            </div>

            <div className="toggle-section">
              <label>Pension Contributions (for staff)</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_pension_contributions === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_pension_contributions', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_pension_contributions === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_pension_contributions', 'no')}>No</button>
              </div>
              {formData.has_pension_contributions === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="pension_contributions"
                      value={formData.pension_contributions}
                      onChange={handleChange}
                      placeholder="Staff pension contributions"
                    />
                  </div>
                  <Explanation text={explanations.pension_contributions} />
                </>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Capital Allowances */}
        {currentStep === 4 && (
          <div className="step-content">
            <h3>Step 4: Capital Allowances</h3>
            <p className="step-hint">These reduce your taxable profit (NTA 2025)</p>
            
            <div className="toggle-section highlight">
              <label>Industrial Building (10% annual allowance)</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_industrial_building === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_industrial_building', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_industrial_building === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_industrial_building', 'no')}>No</button>
              </div>
              {formData.has_industrial_building === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="industrial_building"
                      value={formData.industrial_building}
                      onChange={handleChange}
                      placeholder="Cost of building"
                    />
                  </div>
                  <Explanation text={explanations.industrial_building} />
                </>
              )}
            </div>

            <div className="toggle-section highlight">
              <label>Plant & Machinery (20% annual allowance)</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_plant_machinery === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_plant_machinery', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_plant_machinery === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_plant_machinery', 'no')}>No</button>
              </div>
              {formData.has_plant_machinery === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="plant_machinery"
                      value={formData.plant_machinery}
                      onChange={handleChange}
                      placeholder="Cost of equipment"
                    />
                  </div>
                  <Explanation text={explanations.plant_machinery} />
                </>
              )}
            </div>

            <div className="toggle-section highlight">
              <label>Furniture & Fittings (20% annual allowance)</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_furniture_fittings === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_furniture_fittings', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_furniture_fittings === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_furniture_fittings', 'no')}>No</button>
              </div>
              {formData.has_furniture_fittings === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="furniture_fittings"
                      value={formData.furniture_fittings}
                      onChange={handleChange}
                      placeholder="Cost of furniture"
                    />
                  </div>
                  <Explanation text={explanations.furniture_fittings} />
                </>
              )}
            </div>

            <div className="toggle-section highlight">
              <label>Motor Vehicle (20% annual allowance)</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_motor_vehicle === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_motor_vehicle', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_motor_vehicle === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_motor_vehicle', 'no')}>No</button>
              </div>
              {formData.has_motor_vehicle === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="motor_vehicle"
                      value={formData.motor_vehicle}
                      onChange={handleChange}
                      placeholder="Cost of vehicles"
                    />
                  </div>
                  <Explanation text={explanations.motor_vehicle} />
                </>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Losses and Credits */}
        {currentStep === 5 && (
          <div className="step-content">
            <h3>Step 5: Losses and Tax Credits</h3>
            
            <div className="toggle-section">
              <label>Losses Brought Forward</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_losses_brought_forward === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_losses_brought_forward', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_losses_brought_forward === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_losses_brought_forward', 'no')}>No</button>
              </div>
              {formData.has_losses_brought_forward === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="losses_brought_forward"
                      value={formData.losses_brought_forward}
                      onChange={handleChange}
                      placeholder="Unrelieved losses from prior years"
                    />
                  </div>
                  <Explanation text={explanations.losses_brought_forward} />
                </>
              )}
            </div>

            <div className="toggle-section">
              <label>WHT Credits</label>
              <div className="yes-no-toggle">
                <button className={`toggle-btn ${formData.has_wht_credits === 'yes' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_wht_credits', 'yes')}>Yes</button>
                <button className={`toggle-btn ${formData.has_wht_credits === 'no' ? 'active' : ''}`}
                  onClick={() => handleToggle('has_wht_credits', 'no')}>No</button>
              </div>
              {formData.has_wht_credits === 'yes' && (
                <>
                  <div className="input-wrapper">
                    <span className="currency">₦</span>
                    <input
                      type="text"
                      name="wht_credits"
                      value={formData.wht_credits}
                      onChange={handleChange}
                      placeholder="Withholding tax deducted"
                    />
                  </div>
                  <Explanation text={explanations.wht_credits} />
                </>
              )}
            </div>
          </div>
        )}

        {/* Step 6: Review and Calculate */}
        {currentStep === 6 && (
          <div className="step-content">
            <h3>Step 6: Review & Calculate</h3>
            
            <div className="review-card">
              <h4>{formData.business_name}</h4>
              <p><strong>Business Type:</strong> {formData.business_type}</p>
              <p><strong>Annual Turnover:</strong> {formatCurrency(parseFormattedNumber(formData.turnover))}</p>
              <p><strong>Total Assets:</strong> {formatCurrency(parseFormattedNumber(formData.total_assets))}</p>
              
              {formData.has_trading_profit === 'yes' && (
                <p><strong>Trading Profit:</strong> {formatCurrency(parseFormattedNumber(formData.trading_profit))}</p>
              )}
              {formData.has_operating_expenses === 'yes' && (
                <p><strong>Operating Expenses:</strong> {formatCurrency(parseFormattedNumber(formData.operating_expenses))}</p>
              )}
              
              <div className="capital-summary">
                <strong>Capital Allowances:</strong>
                {formData.has_industrial_building === 'yes' && (
                  <p>Industrial Building: {formatCurrency(parseFormattedNumber(formData.industrial_building) * 0.1)} (10%)</p>
                )}
                {formData.has_plant_machinery === 'yes' && (
                  <p>Plant & Machinery: {formatCurrency(parseFormattedNumber(formData.plant_machinery) * 0.2)} (20%)</p>
                )}
              </div>
            </div>

            <button className="btn-calculate" onClick={handleCalculate} disabled={loading}>
              {loading ? 'Calculating...' : 'Calculate CIT (2 credits)'}
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="nav-section">
          {currentStep > 1 && (
            <button className="btn-secondary" onClick={prevStep}>← Back</button>
          )}
          {currentStep < 6 ? (
            <button className="btn-primary" onClick={nextStep}>Next →</button>
          ) : null}
        </div>

        {error && <div className="error-msg">{error}</div>}

        {/* Results Section - ENHANCED */}
{result && (
  <div className="results-card">
    <h3>Companies Income Tax Result</h3>
    
    {/* Company Classification Banner */}
    <div className={`company-banner ${result.company_tier}`}>
      <div className="banner-icon">
        {result.company_tier === 'small' ? '✅' : '🏢'}
      </div>
      <div className="banner-text">
        <strong>{result.company_tier === 'small' ? 'Small Company' : 'Standard/Large Company'}</strong>
        <p>
          {result.company_tier === 'small' 
            ? '0% CIT (Turnover ≤ ₦100M, Assets ≤ ₦250M)' 
            : `${result.cit_rate}% CIT + ${result.levy_rate}% Development Levy`}
        </p>
      </div>
    </div>

    {/* Tax Calculation Summary */}
    <div className="result-summary">
      <div className="summary-row">
        <span>Profit Before Tax</span>
        <strong>{formatCurrency(result.pbt)}</strong>
      </div>
      <div className="summary-row highlight">
        <span>Capital Allowances</span>
        <strong className="success">{formatCurrency(result.capital_allowances)}</strong>
      </div>
      <div className="summary-row">
        <span>Assessable Profit</span>
        <strong>{formatCurrency(result.assessable_profit)}</strong>
      </div>
      {result.cit > 0 && (
        <div className="summary-row">
          <span>CIT ({result.cit_rate}%)</span>
          <strong>{formatCurrency(result.cit)}</strong>
        </div>
      )}
      {result.levy > 0 && (
        <div className="summary-row">
          <span>Development Levy</span>
          <strong>{formatCurrency(result.levy)}</strong>
        </div>
      )}
      {result.wht_credits_used > 0 && (
        <div className="summary-row">
          <span>WHT Credits Applied</span>
          <strong>{formatCurrency(result.wht_credits_used)}</strong>
        </div>
      )}
      <div className="summary-row total">
        <span>TOTAL TAX PAYABLE</span>
        <strong className="total-amount">{formatCurrency(result.total_tax_payable)}</strong>
      </div>
    </div>

    {/* Tax Bands Visualization (for reference) */}
    <div className="tax-bands-section">
      <h4>📊 NTA 2025 Tax Bands (For Reference)</h4>
      <div className="bands-container">
        <div className="band-item">
          <span className="band-label">First ₦800,000</span>
          <span className="band-rate">0%</span>
        </div>
        <div className="band-item">
          <span className="band-label">Next ₦2,200,000</span>
          <span className="band-rate">15%</span>
        </div>
        <div className="band-item">
          <span className="band-label">Next ₦9,000,000</span>
          <span className="band-rate">18%</span>
        </div>
        <div className="band-item">
          <span className="band-label">Next ₦13,000,000</span>
          <span className="band-rate">21%</span>
        </div>
        <div className="band-item">
          <span className="band-label">Next ₦25,000,000</span>
          <span className="band-rate">23%</span>
        </div>
        <div className="band-item">
          <span className="band-label">Above ₦50,000,000</span>
          <span className="band-rate">25%</span>
        </div>
      </div>
    </div>

    {/* What This Means Section */}
    <div className="what-this-means">
      <h4>📋 What This Means For Your Business</h4>
      
      {result.company_tier === 'small' ? (
        <div className="meaning-card success">
          <div className="meaning-icon">✅</div>
          <div className="meaning-content">
            <strong>Good news! Your business qualifies as a Small Company</strong>
            <p>Under NTA 2025, small companies pay 0% Companies Income Tax. You have ₦0 tax to pay on your profit of {formatCurrency(result.assessable_profit)}.</p>
            <p className="note">You still need to file an annual return by March 31st, even if tax is ₦0.</p>
          </div>
        </div>
      ) : (
        <div className="meaning-card">
          <div className="meaning-icon">🏢</div>
          <div className="meaning-content">
            <strong>Your business is classified as a Standard/Large Company</strong>
            <p>Your tax is calculated at {result.cit_rate}% on your assessable profit of {formatCurrency(result.assessable_profit)}.</p>
            <p>Total tax payable: <strong>{formatCurrency(result.total_tax_payable)}</strong></p>
            <p className="note">Payment is due within 6 months of your year-end. File your returns on time to avoid penalties.</p>
          </div>
        </div>
      )}

      {result.capital_allowances > 0 && (
        <div className="allowance-note">
          <span className="note-icon">💰</span>
          <span>You claimed <strong>{formatCurrency(result.capital_allowances)}</strong> in capital allowances, reducing your taxable profit.</span>
        </div>
      )}

      {result.wht_credits_used > 0 && (
        <div className="credit-note">
          <span className="note-icon">✅</span>
          <span>WHT credits of <strong>{formatCurrency(result.wht_credits_used)}</strong> were applied to reduce your tax.</span>
        </div>
      )}
    </div>

    {/* Action Buttons - ENHANCED */}
    <div className="action-buttons">
      <button 
        className="action-btn save-btn" 
        onClick={() => {
          if (!isLoggedIn) {
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
      
      <button 
        className="action-btn report-btn" 
        onClick={() => {
          if (!isLoggedIn) {
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
      
      <button 
        className="action-btn whatif-btn" 
        onClick={() => {
          if (!isLoggedIn) {
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
  </div>
)}
      </div>

      {/* Modals */}
      {showReportModal && result && (
  <CITReportGenerator
    calculation={{ input: formData, result }}
    user={user}  // ← Add this line
    onClose={() => setShowReportModal(false)}
    creditBalance={creditBalance}
    setCreditBalance={setCreditBalance}
  />
)}
      {showWhatIf && (
        <div className="modal-overlay">
          <WhatIfComparison baseScenario={formData} onClose={() => setShowWhatIf(false)} creditBalance={creditBalance} setCreditBalance={setCreditBalance} calculatorType="cit" />
        </div>
      )}

      <style>{`
        .cit-container { max-width: 800px; margin: 0 auto; }
        
        .progress-section { margin-bottom: 30px; }
        .progress-steps { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .step { text-align: center; flex: 1; }
        .step-number { 
          width: 30px; height: 30px; border-radius: 50%; background: #2D3748; 
          color: white; display: flex; align-items: center; justify-content: center; 
          margin: 0 auto 5px; font-weight: 600;
        }
        .step.active .step-number { background: #4299E1; }
        .step-label { font-size: 11px; color: #A0AEC0; }
        .progress-track { height: 4px; background: #2D3748; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #4299E1, #48BB78); transition: width 0.3s; }
        
        .cit-card { 
          background: #1A202C; border-radius: 24px; padding: 32px; color: white;
        }
        h2 { margin: 0 0 8px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        
        .step-content h3 { margin: 0 0 20px 0; color: #FFD700; }
        
        .form-group { margin-bottom: 25px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; font-weight: 500; }
        .required { color: #DD6B20; margin-left: 4px; }
        
        .input-wrapper { position: relative; }
        .currency { 
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #A0AEC0;
        }
        .input-wrapper input, .form-group select { 
          width: 100%; padding: 12px 12px 12px 40px; background: #2D3748;
          border: 1px solid #4A5568; border-radius: 8px; color: white;
        }
        
        .explanation-box {
          margin-top: 8px;
          padding: 10px 12px;
          background: rgba(66,153,225,0.1);
          border-left: 4px solid #4299E1;
          border-radius: 4px;
          font-size: 13px;
          color: #CBD5E0;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .explanation-icon { color: #4299E1; }
        
        .form-row { display: flex; gap: 20px; }
        .form-group.half { flex: 1; }
        
        .checkbox-group { margin: 20px 0; }
        .checkbox-label { display: flex; align-items: center; gap: 8px; margin-bottom: 15px; cursor: pointer; }
        
        .toggle-section { 
          margin-bottom: 25px; padding: 16px; background: #2D3748; border-radius: 12px;
        }
        .toggle-section.highlight {
          background: rgba(72,187,120,0.1);
          border-left: 4px solid #48BB78;
        }
        .yes-no-toggle { display: flex; gap: 10px; margin: 10px 0; }
        .toggle-btn { 
          flex: 1; padding: 10px; background: #4A5568; border: none; 
          border-radius: 8px; color: white; cursor: pointer;
        }
        .toggle-btn.active { background: #4299E1; }
        
        .nav-section { 
          display: flex; justify-content: space-between; margin-top: 30px;
        }
        .btn-secondary, .btn-primary, .btn-calculate { 
          padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;
          border: none;
        }
        .btn-secondary { 
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .btn-primary { 
          background: #4299E1; color: white; margin-left: auto;
        }
        .btn-calculate { 
          width: 100%; background: #48BB78; color: white;
        }
        
        .error-msg { 
          margin-top: 20px; padding: 12px; background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20; border-radius: 8px; color: #FBD38D;
        }
        
        .review-card { 
          padding: 20px; background: #2D3748; border-radius: 12px; margin-bottom: 20px;
        }
        .review-card h4 { margin: 0 0 10px 0; color: #FFD700; }
        .capital-summary { 
          margin-top: 15px; padding: 12px; background: #1A202C; border-radius: 8px;
        }
        
        .results-card { 
          margin-top: 30px; padding: 24px; background: #2D3748; border-radius: 16px;
        }
        .result-banner { 
          text-align: center; padding: 20px; background: #1A202C; border-radius: 12px;
          margin-bottom: 20px;
        }
        .company-badge { margin-bottom: 10px; }
        .company-badge.small { color: #48BB78; }
        .company-badge.large { color: #FBD38D; }
        .result-amount { font-size: 36px; font-weight: 800; color: #FFD700; }
        
        .result-details { margin-bottom: 20px; }
        .detail-row { 
          display: flex; justify-content: space-between; padding: 12px;
          border-bottom: 1px solid #4A5568;
        }
        .detail-row.highlight { background: #1A202C; border-radius: 8px; }
        
        .action-buttons { 
          display: flex; gap: 10px; margin-top: 20px;
        }
        .action-btn { 
          flex: 1; padding: 12px; border: none; border-radius: 8px;
          color: white; cursor: pointer;
        }
        .save-btn { background: #4A5568; }
        .report-btn { background: #4299E1; }
        .whatif-btn { background: #9F7AEA; }
        
        .save-success { 
          margin-top: 16px; padding: 12px; background: rgba(72,187,120,0.1);
          border: 1px solid #48BB78; border-radius: 8px; color: #48BB78; text-align: center;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; padding: 20px;
        }
/* Company Banner */
.company-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.company-banner.small {
  background: rgba(72, 187, 120, 0.1);
  border: 1px solid #48BB78;
}

.company-banner.large {
  background: rgba(66, 153, 225, 0.1);
  border: 1px solid #4299E1;
}

.banner-icon {
  font-size: 32px;
}

.banner-text strong {
  display: block;
  font-size: 18px;
  margin-bottom: 4px;
}

.banner-text p {
  margin: 0;
  color: #A0AEC0;
  font-size: 14px;
}

/* Result Summary */
.result-summary {
  background: #2D3748;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #4A5568;
}

.summary-row:last-child {
  border-bottom: none;
}

.summary-row.highlight {
  background: #1A202C;
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
}

.summary-row.total {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #4A5568;
  font-size: 18px;
}

.success {
  color: #48BB78;
}

.total-amount {
  color: #FFD700;
  font-size: 24px;
}

/* Tax Bands Section */
.tax-bands-section {
  background: #2D3748;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.tax-bands-section h4 {
  margin: 0 0 16px 0;
  color: #4299E1;
  font-size: 16px;
}

.bands-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.band-item {
  background: #1A202C;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.band-label {
  display: block;
  color: #A0AEC0;
  font-size: 13px;
  margin-bottom: 4px;
}

.band-rate {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #FFD700;
}

/* What This Means Section */
.what-this-means {
  background: #2D3748;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.what-this-means h4 {
  margin: 0 0 16px 0;
  color: #4299E1;
  font-size: 16px;
}

.meaning-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: #1A202C;
  border-radius: 12px;
  margin-bottom: 16px;
}

.meaning-card.success {
  border-left: 4px solid #48BB78;
}

.meaning-icon {
  font-size: 28px;
}

.meaning-content {
  flex: 1;
}

.meaning-content strong {
  display: block;
  margin-bottom: 8px;
  color: white;
  font-size: 16px;
}

.meaning-content p {
  margin: 0 0 8px 0;
  color: #CBD5E0;
  line-height: 1.6;
}

.note {
  color: #A0AEC0 !important;
  font-size: 13px;
  font-style: italic;
}

.allowance-note, .credit-note {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #1A202C;
  border-radius: 8px;
  margin-top: 12px;
}

.allowance-note {
  border-left: 4px solid #48BB78;
}

.credit-note {
  border-left: 4px solid #4299E1;
}

.note-icon {
  font-size: 20px;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.action-btn {
  flex: 1;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.save-btn {
  background: #4A5568;
  color: white;
}

.save-btn:hover:not(:disabled) {
  background: #5A6778;
}

.report-btn {
  background: #4299E1;
  color: white;
}

.report-btn:hover:not(:disabled) {
  background: #3182CE;
}

.whatif-btn {
  background: #9F7AEA;
  color: white;
}

.whatif-btn:hover:not(:disabled) {
  background: #8B5CF6;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.save-success {
  margin-top: 16px;
  padding: 12px;
  background: rgba(72, 187, 120, 0.1);
  border: 1px solid #48BB78;
  border-radius: 8px;
  color: #48BB78;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }
  
  .bands-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .meaning-card {
    flex-direction: column;
    text-align: center;
  }
}

      `}</style>
    </div>
  );
};

export default CITCalculator;