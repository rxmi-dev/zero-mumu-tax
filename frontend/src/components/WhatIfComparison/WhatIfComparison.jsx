// frontend/src/components/WhatIfComparison/WhatIfComparison.jsx
import React, { useState } from 'react';
import api from '../../utils/api';
import { formatCurrency, parseFormattedNumber, formatWithCommas } from '../../utils/formatters';

const WhatIfComparison = ({ 
  baseScenario, 
  onClose, 
  creditBalance, 
  setCreditBalance,
  calculatorType = 'pit'
}) => {
  const [scenarioA, setScenarioA] = useState(baseScenario || {});
  const [scenarioB, setScenarioB] = useState(baseScenario || {});
  const [resultA, setResultA] = useState(null);
  const [resultB, setResultB] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [savedComparison, setSavedComparison] = useState(null);
  const [showPresets, setShowPresets] = useState(false);
  const [validationError, setValidationError] = useState('');

  const presets = {
    increasePension: {
      name: 'Increase Pension',
      description: 'Add more to your pension to reduce tax',
      changes: {
        pension_rsa: (base) => {
          const basic = parseFloat(base.employment_basic) || 0;
          const housing = parseFloat(base.employment_housing) || 0;
          const transport = parseFloat(base.employment_transport) || 0;
          const qualifying = basic + housing + transport;
          const maxPension = qualifying * 0.08;
          return maxPension.toString();
        }
      }
    },
    claimRentRelief: {
      name: 'Claim Rent Relief',
      description: 'Add rent paid to claim up to ₦500,000 deduction',
      changes: {
        rent_paid: () => '2000000'
      }
    },
    addNHIS: {
      name: 'Add NHIS',
      description: 'Add NHIS contributions to reduce tax',
      changes: {
        nhis: (base) => {
          const basic = parseFloat(base.employment_basic) || 0;
          return (basic * 0.05).toString();
        }
      }
    },
    increaseBusiness: {
      name: 'Increase Business Income',
      description: 'See how more income affects your tax',
      changes: {
        business_profit: (base) => {
          const current = parseFloat(base.business_profit) || 0;
          return (current + 1000000).toString();
        }
      }
    }
  };

  const handleApplyPreset = (presetKey) => {
    const preset = presets[presetKey];
    const newScenarioB = { ...scenarioB };
    
    Object.entries(preset.changes).forEach(([field, calculator]) => {
      newScenarioB[field] = calculator(scenarioA);
    });
    
    setScenarioB(newScenarioB);
    setShowPresets(false);
    setValidationError('');
  };

  const handleChange = (scenario, field, value) => {
    const formattedValue = formatWithCommas(value);
    if (scenario === 'A') {
      setScenarioA(prev => ({ ...prev, [field]: formattedValue }));
    } else {
      setScenarioB(prev => ({ ...prev, [field]: formattedValue }));
    }
    setValidationError('');
  };

  const parseScenario = (scenario) => {
    const parsed = {};
    Object.keys(scenario).forEach(key => {
      parsed[key] = parseFormattedNumber(scenario[key]);
    });
    return parsed;
  };

  const hasChanges = () => {
    return Object.keys(scenarioA).some(key => 
      parseFormattedNumber(scenarioA[key]) !== parseFormattedNumber(scenarioB[key])
    );
  };

  const handleCompare = async () => {
    if (!hasChanges()) {
      setValidationError('Please make changes to Scenario B before comparing');
      return;
    }

    setLoading(true);
    setError('');
    setValidationError('');

    try {
      const response = await api.post('/api/calculations/compare', {
        scenarios: [parseScenario(scenarioA), parseScenario(scenarioB)],
        calculator_type: calculatorType
      });

      if (response.data.success) {
        setResultA(response.data.calculations[0].result);
        setResultB(response.data.calculations[1].result);
        setSavedComparison(response.data.comparison_group);
        setCreditBalance(response.data.new_balance);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Comparison failed');
    } finally {
      setLoading(false);
    }
  };

  const getDifference = (field) => {
    if (!resultA || !resultB) return null;
    const valA = resultA[field] || 0;
    const valB = resultB[field] || 0;
    const diff = valB - valA;
    const percent = valA !== 0 ? (diff / valA) * 100 : 0;
    return { diff, percent };
  };

  const getRecommendation = () => {
    if (!resultA || !resultB) return null;
    
    const taxA = resultA.tax_payable || resultA.total_tax_payable || 0;
    const taxB = resultB.tax_payable || resultB.total_tax_payable || 0;
    
    if (taxB < taxA) {
      const savings = taxA - taxB;
      return {
        type: 'positive',
        title: '✅ Good News!',
        message: `Scenario B saves you ${formatCurrency(savings)} in tax.`,
        details: 'These changes are beneficial under NTA 2025. Consider implementing them.'
      };
    } else if (taxB > taxA) {
      const extra = taxB - taxA;
      return {
        type: 'warning',
        title: '⚠️ Be Careful',
        message: `Scenario B would cost you ${formatCurrency(extra)} more in tax.`,
        details: 'Make sure the benefits of these changes outweigh the additional tax.'
      };
    } else {
      return {
        type: 'neutral',
        title: '📊 No Change',
        message: 'Both scenarios have the same tax liability.',
        details: 'Your changes do not affect your tax under NTA 2025.'
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="what-if-comparison">
      <div className="comparison-header">
        <h2>What-If Comparison</h2>
        <div className="credit-badge">2 credits</div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {validationError && (
        <div className="validation-message">
          ⚠️ {validationError}
        </div>
      )}

      <div className="presets-bar">
        <button className="presets-toggle" onClick={() => setShowPresets(!showPresets)}>
          💡 Quick Ideas {showPresets ? '▲' : '▼'}
        </button>
        
        {showPresets && (
          <div className="presets-grid">
            {Object.entries(presets).map(([key, preset]) => (
              <button
                key={key}
                className="preset-btn"
                onClick={() => handleApplyPreset(key)}
              >
                <span className="preset-name">{preset.name}</span>
                <span className="preset-desc">{preset.description}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="comparison-grid">
        {/* Scenario A - Base */}
        <div className="scenario-card base">
          <div className="scenario-header">
            <h3>Current Scenario</h3>
            <span className="scenario-badge">Your Current Inputs</span>
          </div>
          <div className="scenario-content">
            {calculatorType === 'pit' ? (
              <>
                <div className="form-group">
                  <label>Salary (₦)</label>
                  <input
                    type="text"
                    value={scenarioA.employment_salary || ''}
                    onChange={(e) => handleChange('A', 'employment_salary', e.target.value)}
                    placeholder="e.g., 5,000,000"
                  />
                </div>
                <div className="form-group">
                  <label>Business Profit (₦)</label>
                  <input
                    type="text"
                    value={scenarioA.business_profit || ''}
                    onChange={(e) => handleChange('A', 'business_profit', e.target.value)}
                    placeholder="e.g., 2,000,000"
                  />
                </div>
                <div className="form-group">
                  <label>Rent Paid (₦)</label>
                  <input
                    type="text"
                    value={scenarioA.rent_paid || ''}
                    onChange={(e) => handleChange('A', 'rent_paid', e.target.value)}
                    placeholder="e.g., 1,500,000"
                  />
                </div>
                <div className="form-group">
                  <label>Pension (₦)</label>
                  <input
                    type="text"
                    value={scenarioA.pension_rsa || ''}
                    onChange={(e) => handleChange('A', 'pension_rsa', e.target.value)}
                    placeholder="e.g., 240,000"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label>Turnover (₦)</label>
                  <input
                    type="text"
                    value={scenarioA.turnover || ''}
                    onChange={(e) => handleChange('A', 'turnover', e.target.value)}
                    placeholder="e.g., 50,000,000"
                  />
                </div>
                <div className="form-group">
                  <label>Trading Profit (₦)</label>
                  <input
                    type="text"
                    value={scenarioA.trading_profit || ''}
                    onChange={(e) => handleChange('A', 'trading_profit', e.target.value)}
                    placeholder="e.g., 10,000,000"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Scenario B - What-If */}
        <div className="scenario-card whatif">
          <div className="scenario-header">
            <h3>What-If Scenario</h3>
            <span className="scenario-badge">Try These Changes</span>
          </div>
          <div className="scenario-content">
            {calculatorType === 'pit' ? (
              <>
                <div className="form-group">
                  <label>Salary (₦)</label>
                  <input
                    type="text"
                    value={scenarioB.employment_salary || ''}
                    onChange={(e) => handleChange('B', 'employment_salary', e.target.value)}
                    placeholder="e.g., 5,000,000"
                  />
                </div>
                <div className="form-group">
                  <label>Business Profit (₦)</label>
                  <input
                    type="text"
                    value={scenarioB.business_profit || ''}
                    onChange={(e) => handleChange('B', 'business_profit', e.target.value)}
                    placeholder="e.g., 2,000,000"
                  />
                </div>
                <div className="form-group">
                  <label>Rent Paid (₦)</label>
                  <input
                    type="text"
                    value={scenarioB.rent_paid || ''}
                    onChange={(e) => handleChange('B', 'rent_paid', e.target.value)}
                    placeholder="e.g., 1,500,000"
                  />
                </div>
                <div className="form-group">
                  <label>Pension (₦)</label>
                  <input
                    type="text"
                    value={scenarioB.pension_rsa || ''}
                    onChange={(e) => handleChange('B', 'pension_rsa', e.target.value)}
                    placeholder="e.g., 240,000"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label>Turnover (₦)</label>
                  <input
                    type="text"
                    value={scenarioB.turnover || ''}
                    onChange={(e) => handleChange('B', 'turnover', e.target.value)}
                    placeholder="e.g., 50,000,000"
                  />
                </div>
                <div className="form-group">
                  <label>Trading Profit (₦)</label>
                  <input
                    type="text"
                    value={scenarioB.trading_profit || ''}
                    onChange={(e) => handleChange('B', 'trading_profit', e.target.value)}
                    placeholder="e.g., 10,000,000"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="comparison-actions">
        <button 
          className="compare-btn"
          onClick={handleCompare}
          disabled={loading || creditBalance < 2}
        >
          {loading ? 'Comparing...' : creditBalance < 2 ? 'Need 2 credits' : 'Compare Scenarios (2 credits)'}
        </button>
      </div>

      {resultA && resultB && (
        <div className="comparison-results">
          <h3>NTA 2025 Comparison Results</h3>
          
          {recommendation && (
            <div className={`recommendation-banner ${recommendation.type}`}>
              <div className="recommendation-content">
                <h4>{recommendation.title}</h4>
                <p className="recommendation-message">{recommendation.message}</p>
                <p className="recommendation-details">{recommendation.details}</p>
              </div>
            </div>
          )}

          <div className="results-table">
            <div className="results-header">
              <div className="header-item">Metric</div>
              <div className="header-item">Current</div>
              <div className="header-item">What-If</div>
              <div className="header-item">Difference</div>
            </div>

            {calculatorType === 'pit' ? (
              <>
                <ComparisonRow 
                  label="Total Income" 
                  field="total_income" 
                  resultA={resultA} 
                  resultB={resultB} 
                  format={formatCurrency}
                />
                <ComparisonRow 
                  label="Taxable Income" 
                  field="chargeable_income" 
                  resultA={resultA} 
                  resultB={resultB} 
                  format={formatCurrency}
                />
                <ComparisonRow 
                  label="Tax Payable" 
                  field="tax_payable" 
                  resultA={resultA} 
                  resultB={resultB} 
                  format={formatCurrency}
                  highlight
                />
              </>
            ) : (
              <>
                <ComparisonRow 
                  label="Total Income" 
                  field="total_income" 
                  resultA={resultA} 
                  resultB={resultB} 
                  format={formatCurrency}
                />
                <ComparisonRow 
                  label="Assessable Profit" 
                  field="assessable_profit" 
                  resultA={resultA} 
                  resultB={resultB} 
                  format={formatCurrency}
                />
                <ComparisonRow 
                  label="Total Tax" 
                  field="total_tax_payable" 
                  resultA={resultA} 
                  resultB={resultB} 
                  format={formatCurrency}
                  highlight
                />
              </>
            )}
          </div>

          <div className="nta-guidance">
            <h4>📋 NTA 2025 Guidance</h4>
            <ul>
              {resultB.tax_payable < resultA.tax_payable ? (
                <>
                  <li>✅ These changes are tax-efficient under NTA 2025</li>
                  <li>📌 Keep records of all deductions for 6 years</li>
                  <li>🗓️ File by March 31st to avoid penalties</li>
                </>
              ) : resultB.tax_payable > resultA.tax_payable ? (
                <>
                  <li>⚠️ This scenario increases your tax liability</li>
                  <li>💡 Consider other presets to find better savings</li>
                  <li>📊 Consult a tax professional for complex situations</li>
                </>
              ) : (
                <>
                  <li>📊 No tax impact - look for other ways to optimize</li>
                  <li>🏦 Pension contributions can reduce your tax</li>
                  <li>🏠 Rent relief is often missed - check if you qualify</li>
                </>
              )}
            </ul>
          </div>

          {savedComparison && (
            <div className="saved-notice">
              ✅ Comparison saved! View in "My Account" → "Saved Calculations"
            </div>
          )}
        </div>
      )}

      <style>{`
        .what-if-comparison {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 1200px;
          margin: 0 auto;
          color: white;
          max-height: 90vh;
          overflow-y: auto;
        }

        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2D3748;
        }

        .comparison-header h2 {
          margin: 0;
          font-size: 24px;
          color: #4299E1;
        }

        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid #FFD700;
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }

        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }

        .error-message, .validation-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }

        .presets-bar {
          margin-bottom: 24px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 12px;
          overflow: hidden;
        }

        .presets-toggle {
          width: 100%;
          padding: 16px;
          background: none;
          border: none;
          color: #4299E1;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .presets-toggle:hover {
          background: #364153;
        }

        .presets-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 16px;
          border-top: 1px solid #4A5568;
        }

        .preset-btn {
          padding: 16px;
          background: #364153;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .preset-btn:hover {
          background: #4299E1;
          border-color: #4299E1;
          transform: translateY(-2px);
        }

        .preset-name {
          display: block;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .preset-desc {
          display: block;
          font-size: 12px;
          color: #A0AEC0;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .scenario-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          overflow: hidden;
        }

        .scenario-card.base {
          border-color: #4299E1;
        }

        .scenario-card.whatif {
          border-color: #FFD700;
        }

        .scenario-header {
          padding: 16px;
          background: #1A202C;
          border-bottom: 1px solid #4A5568;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .scenario-header h3 {
          margin: 0;
          font-size: 18px;
        }

        .scenario-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .base .scenario-badge {
          background: rgba(66,153,225,0.2);
          color: #4299E1;
        }

        .whatif .scenario-badge {
          background: rgba(255,215,0,0.2);
          color: #FFD700;
        }

        .scenario-content {
          padding: 20px;
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

        .form-group input {
          width: 100%;
          padding: 10px 12px;
          background: #1A202C;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4299E1;
        }

        .comparison-actions {
          text-align: center;
          margin-bottom: 24px;
        }

        .compare-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .compare-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .comparison-results {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 24px;
        }

        .comparison-results h3 {
          margin: 0 0 20px 0;
          font-size: 20px;
          color: #4299E1;
        }

        .recommendation-banner {
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .recommendation-banner.positive {
          background: rgba(72,187,120,0.1);
          border: 1px solid #48BB78;
        }

        .recommendation-banner.warning {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
        }

        .recommendation-banner.neutral {
          background: rgba(66,153,225,0.1);
          border: 1px solid #4299E1;
        }

        .recommendation-banner h4 {
          margin: 0 0 8px 0;
          color: inherit;
        }

        .positive h4 { color: #48BB78; }
        .warning h4 { color: #DD6B20; }
        .neutral h4 { color: #4299E1; }

        .recommendation-message {
          margin: 0 0 4px 0;
          font-size: 16px;
          font-weight: 600;
        }

        .recommendation-details {
          margin: 0;
          color: #CBD5E0;
          font-size: 14px;
        }

        .results-table {
          margin-bottom: 24px;
        }

        .results-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          padding: 12px;
          background: #1A202C;
          border-radius: 8px;
          font-weight: 600;
          color: #A0AEC0;
          margin-bottom: 8px;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          padding: 12px;
          border-bottom: 1px solid #4A5568;
        }

        .row-diff {
          font-weight: 600;
        }

        .row-diff.positive {
          color: #48BB78;
        }

        .row-diff.negative {
          color: #DD6B20;
        }

        .nta-guidance {
          background: #1A202C;
          border-radius: 12px;
          padding: 20px;
          margin-top: 20px;
        }

        .nta-guidance h4 {
          margin: 0 0 12px 0;
          color: #4299E1;
        }

        .nta-guidance ul {
          margin: 0;
          padding-left: 20px;
          color: #CBD5E0;
        }

        .nta-guidance li {
          margin-bottom: 8px;
        }

        .saved-notice {
          margin-top: 20px;
          padding: 12px;
          background: rgba(72,187,120,0.1);
          border: 1px solid #48BB78;
          border-radius: 8px;
          color: #48BB78;
          text-align: center;
        }

        @media (max-width: 768px) {
          .what-if-comparison {
            padding: 20px;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .presets-grid {
            grid-template-columns: 1fr;
          }

          .results-header {
            display: none;
          }

          .comparison-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 16px;
          }

          .row-diff {
            padding-top: 8px;
            border-top: 1px solid #4A5568;
          }
        }
      `}</style>
    </div>
  );
};

// Helper component for comparison rows
const ComparisonRow = ({ label, field, resultA, resultB, format, highlight }) => {
  const valA = resultA[field] || 0;
  const valB = resultB[field] || 0;
  const diff = valB - valA;
  const percent = valA !== 0 ? (diff / valA) * 100 : 0;
  
  return (
    <div className={`comparison-row ${highlight ? 'highlight' : ''}`}>
      <div className="row-label">{label}</div>
      <div className="row-value-a">{format(valA)}</div>
      <div className="row-value-b">{format(valB)}</div>
      <div className={`row-diff ${diff > 0 ? 'positive' : diff < 0 ? 'negative' : ''}`}>
        {diff > 0 ? '▲' : diff < 0 ? '▼' : ''} 
        {format(Math.abs(diff))} ({percent.toFixed(1)}%)
      </div>
    </div>
  );
};

export default WhatIfComparison;