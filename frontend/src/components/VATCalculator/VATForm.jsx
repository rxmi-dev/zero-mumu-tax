// frontend/src/components/VATCalculator/VATForm.jsx
import React, { useState } from 'react';
import api from '../../utils/api';
import { formatWithCommas, parseFormattedNumber, formatCurrency } from '../../utils/formatters';

const VATCalculator = ({ isLoggedIn, creditBalance, setCreditBalance, restoreData, clearRestoreData, requireLogin, requireCredits }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    business_type: 'goods',
    business_type_other: '',
    what_do_you_sell: '',
    monthly_sales: '',
    is_registered: 'no',
    calc_type: 'net_to_gross',
    amount: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showCreditPrompt, setShowCreditPrompt] = useState(false);

  const businessTypes = [
    { value: 'goods', label: 'I sell goods (provisions, clothes, electronics, etc.)' },
    { value: 'services', label: 'I provide services (barbing, tailoring, repairs, etc.)' },
    { value: 'food', label: 'I sell food or run a restaurant' },
    { value: 'agriculture', label: 'I sell farm produce (cassava, yam, vegetables, etc.)' },
    { value: 'transport', label: 'I run transport business' },
    { value: 'other', label: 'Other (please specify)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'monthly_sales' || name === 'amount') {
      setFormData({ ...formData, [name]: formatWithCommas(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: null });
    }
    if (error) setError('');
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const validateStep = () => {
    const errors = {};
    
    if (currentStep === 1) {
      if (formData.business_type === 'other' && !formData.business_type_other?.trim()) {
        errors.business_type_other = 'Please describe your business type';
      }
      if (!formData.what_do_you_sell?.trim()) {
        errors.what_do_you_sell = 'Please tell us what you sell';
      }
    }
    
    if (currentStep === 2) {
      if (!formData.monthly_sales || parseFormattedNumber(formData.monthly_sales) <= 0) {
        errors.monthly_sales = 'Please enter your average monthly sales';
      }
    }
    
    if (currentStep === 3) {
      if (!formData.amount || parseFormattedNumber(formData.amount) <= 0) {
        errors.amount = 'Please enter an amount';
      }
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calculateVAT = async () => {
    if (!validateStep()) return;
    
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    if (creditBalance < 1) {
      setShowCreditPrompt(true);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const payload = {
        business_type: formData.business_type === 'other' ? formData.business_type_other : formData.business_type,
        what_do_you_sell: formData.what_do_you_sell,
        monthly_sales: parseFormattedNumber(formData.monthly_sales),
        is_registered: formData.is_registered === 'yes',
        calc_type: formData.calc_type,
        amount: parseFormattedNumber(formData.amount)
      };

      const response = await api.post('/api/v1/calculate/vat', payload);
      
      if (response.data.success) {
        setCreditBalance(prev => prev - 1);
        setResult(response.data.data);
        setFieldErrors({});
      } else {
        setError(response.data.error || 'Calculation failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = () => {
    if (validateStep()) {
      calculateVAT();
    }
  };

  return (
    <div className="vat-container">
      {/* Header */}
      <div className="vat-header">
        <h2>Value Added Tax (VAT) Calculator</h2>
        <p className="vat-subtitle">Calculate VAT at 7.5% • NTA 2025</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-steps">
          {[1, 2, 3].map(step => (
            <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
              <div className="step-number">{step}</div>
              <div className="step-label">
                {step === 1 ? 'Business' : step === 2 ? 'Sales' : 'Calculate'}
              </div>
            </div>
          ))}
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>
      </div>

      <div className="vat-card">
        {/* Step 1: Business Type */}
        {currentStep === 1 && (
          <div className="step-content">
            <h3>Tell us about your business</h3>
            
            <div className="form-group">
              <label>What kind of business do you do?</label>
              {businessTypes.map(type => (
                <div key={type.value} className="radio-option">
                  <input
                    type="radio"
                    name="business_type"
                    value={type.value}
                    checked={formData.business_type === type.value}
                    onChange={handleChange}
                    id={`business_${type.value}`}
                  />
                  <label htmlFor={`business_${type.value}`}>{type.label}</label>
                </div>
              ))}
            </div>

            {formData.business_type === 'other' && (
              <div className="form-group">
                <label>Please describe your business</label>
                <input
                  type="text"
                  name="business_type_other"
                  value={formData.business_type_other}
                  onChange={handleChange}
                  placeholder="e.g., I sell recharge cards"
                  className={fieldErrors.business_type_other ? 'error' : ''}
                />
                {fieldErrors.business_type_other && (
                  <div className="field-error">{fieldErrors.business_type_other}</div>
                )}
              </div>
            )}

            <div className="form-group highlight">
              <label>What exactly do you sell?</label>
              <input
                type="text"
                name="what_do_you_sell"
                value={formData.what_do_you_sell}
                onChange={handleChange}
                placeholder="e.g., provisions, clothes, food, services"
                className={fieldErrors.what_do_you_sell ? 'error' : ''}
              />
              {fieldErrors.what_do_you_sell && (
                <div className="field-error">{fieldErrors.what_do_you_sell}</div>
              )}
              <small>This helps us know if your items are VAT exempt</small>
            </div>
          </div>
        )}

        {/* Step 2: Sales Information */}
        {currentStep === 2 && (
          <div className="step-content">
            <h3>Tell us about your sales</h3>
            
            <div className="form-group">
              <label>Average monthly sales (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="monthly_sales"
                  value={formData.monthly_sales}
                  onChange={handleChange}
                  placeholder="e.g., 500,000"
                  className={fieldErrors.monthly_sales ? 'error' : ''}
                />
              </div>
              {fieldErrors.monthly_sales && (
                <div className="field-error">{fieldErrors.monthly_sales}</div>
              )}
              <small>Your total sales before expenses</small>
            </div>

            <div className="form-group">
              <label>Are you registered for VAT?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="is_registered"
                    value="yes"
                    checked={formData.is_registered === 'yes'}
                    onChange={handleChange}
                  />
                  Yes, I am registered
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="is_registered"
                    value="no"
                    checked={formData.is_registered === 'no'}
                    onChange={handleChange}
                  />
                  No, I am not registered
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Calculation */}
        {currentStep === 3 && (
          <div className="step-content">
            <h3>Calculate VAT</h3>
            
            <div className="form-group">
              <label>What do you want to calculate?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="calc_type"
                    value="net_to_gross"
                    checked={formData.calc_type === 'net_to_gross'}
                    onChange={handleChange}
                  />
                  Add VAT to price (net → gross)
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="calc_type"
                    value="gross_to_net"
                    checked={formData.calc_type === 'gross_to_net'}
                    onChange={handleChange}
                  />
                  Remove VAT from price (gross → net)
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Enter amount (₦)</label>
              <div className="input-wrapper">
                <span className="currency">₦</span>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="e.g., 100,000"
                  className={fieldErrors.amount ? 'error' : ''}
                />
              </div>
              {fieldErrors.amount && (
                <div className="field-error">{fieldErrors.amount}</div>
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="nav-section">
          {currentStep > 1 && (
            <button className="btn-secondary" onClick={prevStep}>
              ← Back
            </button>
          )}
          {currentStep < 3 ? (
            <button className="btn-primary" onClick={nextStep}>
              Next →
            </button>
          ) : (
            <button className="btn-calculate" onClick={handleCalculate} disabled={loading}>
              {loading ? 'Calculating...' : 'Calculate VAT (1 credit)'}
            </button>
          )}
        </div>

        {error && <div className="error-msg">{error}</div>}

        {/* Results */}
        {result && (
          <div className="results-section">
            <h3>VAT Calculation Result</h3>
            
            <div className="result-highlight">
              <div className="result-amount">{formatCurrency(result.vat)}</div>
              <div className="result-label">VAT Amount (7.5%)</div>
            </div>

            <div className="result-grid">
              <div className="result-item">
                <span className="result-item-label">
                  {formData.calc_type === 'net_to_gross' ? 'Net Amount' : 'Gross Amount'}
                </span>
                <span className="result-item-value">
                  {formatCurrency(formData.calc_type === 'net_to_gross' ? result.net : result.gross)}
                </span>
              </div>
              <div className="result-item total">
                <span className="result-item-label">
                  {formData.calc_type === 'net_to_gross' ? 'Gross Amount' : 'Net Amount'}
                </span>
                <span className="result-item-value">
                  {formatCurrency(formData.calc_type === 'net_to_gross' ? result.gross : result.net)}
                </span>
              </div>
            </div>

            {result.message && (
              <div className={`info-box ${result.is_eligible ? 'warning' : 'info'}`}>
                {result.message}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .vat-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 20px;
        }

        .vat-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .vat-header h2 {
          color: #4299E1;
          margin: 0 0 8px 0;
          font-size: 28px;
        }

        .vat-subtitle {
          color: #A0AEC0;
          margin: 0;
        }

        .progress-section {
          margin-bottom: 30px;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .step {
          text-align: center;
          flex: 1;
        }

        .step-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #2D3748;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 5px;
          font-weight: 600;
        }

        .step.active .step-number {
          background: #4299E1;
        }

        .step-label {
          font-size: 12px;
          color: #A0AEC0;
        }

        .progress-track {
          height: 4px;
          background: #2D3748;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4299E1, #48BB78);
          transition: width 0.3s;
        }

        .vat-card {
          background: #1A202C;
          border-radius: 16px;
          padding: 30px;
          color: white;
        }

        .step-content h3 {
          margin: 0 0 20px 0;
          color: #FFD700;
          font-size: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 10px;
          color: white;
          font-weight: 500;
        }

        .form-group.highlight {
          background: #2D3748;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #48BB78;
        }

        .radio-option {
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .radio-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .input-wrapper {
          position: relative;
        }

        .currency {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #A0AEC0;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 16px;
        }

        .input-wrapper input.error {
          border-color: #DD6B20;
        }

        small {
          display: block;
          margin-top: 5px;
          color: #A0AEC0;
          font-size: 12px;
        }

        .field-error {
          margin-top: 5px;
          color: #FBD38D;
          font-size: 13px;
        }

        .nav-section {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .btn-secondary, .btn-primary, .btn-calculate {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }

        .btn-primary {
          background: #4299E1;
          color: white;
          margin-left: auto;
        }

        .btn-calculate {
          width: 100%;
          background: #48BB78;
          color: white;
        }

        .error-msg {
          margin-top: 20px;
          padding: 12px;
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          color: #FBD38D;
        }

        .results-section {
          margin-top: 30px;
          padding: 25px;
          background: #2D3748;
          border-radius: 12px;
        }

        .results-section h3 {
          margin: 0 0 20px 0;
          color: #4299E1;
        }

        .result-highlight {
          text-align: center;
          padding: 20px;
          background: #1A202C;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .result-amount {
          font-size: 36px;
          font-weight: 800;
          color: #FFD700;
        }

        .result-label {
          color: #A0AEC0;
          margin-top: 5px;
        }

        .result-grid {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
        }

        .result-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: #1A202C;
          border-radius: 6px;
        }

        .result-item.total {
          background: rgba(72,187,120,0.1);
        }

        .result-item-label {
          color: #A0AEC0;
        }

        .result-item-value {
          font-weight: 600;
          color: white;
        }

        .info-box {
          padding: 15px;
          border-radius: 6px;
          font-size: 14px;
        }

        .info-box.warning {
          background: rgba(221,107,32,0.1);
          border-left: 4px solid #DD6B20;
          color: #FBD38D;
        }

        .info-box.info {
          background: rgba(66,153,225,0.1);
          border-left: 4px solid #4299E1;
          color: #90CDF4;
        }
      `}</style>
    </div>
  );
};

export default VATCalculator;