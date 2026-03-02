// frontend/src/components/Auth/SavedCalculationViewer.jsx
import React, { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';
import CITReportGenerator from '../Reports/CITReportGenerator';
import ReportGenerator from '../Reports/ReportGenerator';

const SavedCalculationViewer = ({ calculation, onClose, onUse, creditBalance, setCreditBalance, setActiveTab: setParentActiveTab }) => {
  const [currentTab, setCurrentTab] = useState('details');
  const [showReportModal, setShowReportModal] = useState(false);

  if (!calculation) {
    return (
      <div className="modal-overlay">
        <div className="modal-card">No calculation data available</div>
      </div>
    );
  }

  // Debug: log the calculation type to console
  console.log('SavedCalculationViewer - calculation type:', calculation.calculator_type);

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-NG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const formatNumber = (val) => {
    if (!val && val !== 0) return '₦0';
    return formatCurrency(val);
  };

  const formatFieldName = (key) => {
    return key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  // ===== FULL DETAILS TAB =====
  const renderFullDetails = () => {
    const result = calculation.result_data || {};
    const input = calculation.input_data || {};

    if (calculation.calculator_type === 'pit') {
      if (result.exempt) {
        return (
          <div className="details-container text-center">
            <div className="emoji-large">🎉</div>
            <h3 className="success-text">Tax Exempt</h3>
            <p>Your income is below the minimum wage.</p>
            <p className="highlight-text">Minimum Wage: {formatNumber(result.minimum_wage)}</p>
          </div>
        );
      }

      return (
        <div className="details-container">
          <h4>💰 Income Details</h4>
          <table className="details-table">
            <tbody>
              {input.employment_salary && (
                <tr><td>Employment Salary</td><td className="amount">{formatNumber(input.employment_salary)}</td></tr>
              )}
              {input.employment_basic && (
                <tr><td>Basic Salary</td><td className="amount">{formatNumber(input.employment_basic)}</td></tr>
              )}
              {input.employment_housing && (
                <tr><td>Housing Allowance</td><td className="amount">{formatNumber(input.employment_housing)}</td></tr>
              )}
              {input.employment_transport && (
                <tr><td>Transport Allowance</td><td className="amount">{formatNumber(input.employment_transport)}</td></tr>
              )}
              {input.employment_bonus && (
                <tr><td>13th Month Bonus</td><td className="amount">{formatNumber(input.employment_bonus)}</td></tr>
              )}
              {input.business_profit && (
                <tr><td>Business Profit</td><td className="amount">{formatNumber(input.business_profit)}</td></tr>
              )}
              {input.pension_income && (
                <tr><td>Pension Income</td><td className="amount">{formatNumber(input.pension_income)}</td></tr>
              )}
            </tbody>
          </table>

          <h4 style={{ marginTop: '24px' }}>🧾 Deductions Claimed</h4>
          <table className="details-table">
            <tbody>
              {input.pension_rsa && (
                <tr><td>RSA Pension</td><td className="amount">{formatNumber(input.pension_rsa)}</td></tr>
              )}
              {input.nhis && (
                <tr><td>NHIS</td><td className="amount">{formatNumber(input.nhis)}</td></tr>
              )}
              {input.nhf && (
                <tr><td>NHF</td><td className="amount">{formatNumber(input.nhf)}</td></tr>
              )}
              {input.rent_paid && (
                <tr><td>Rent Paid</td><td className="amount">{formatNumber(input.rent_paid)}</td></tr>
              )}
              {input.paye_deducted && (
                <tr><td>PAYE Deducted</td><td className="amount">{formatNumber(input.paye_deducted)}</td></tr>
              )}
              {input.wht_credits && (
                <tr><td>WHT Credits</td><td className="amount">{formatNumber(input.wht_credits)}</td></tr>
              )}
            </tbody>
          </table>

          <h4 style={{ marginTop: '24px' }}>📊 Tax Calculation Results</h4>
          <table className="details-table">
            <tbody>
              <tr className="total-row">
                <td><strong>Total Income</strong></td>
                <td className="amount"><strong>{formatNumber(result.total_income)}</strong></td>
              </tr>
              <tr>
                <td>Total Deductions</td>
                <td className="amount">{formatNumber(result.total_deductions)}</td>
              </tr>
              <tr className="highlight-row">
                <td><strong>Taxable Income</strong></td>
                <td className="amount"><strong>{formatNumber(result.chargeable_income)}</strong></td>
              </tr>
              <tr>
                <td>Tax Payable</td>
                <td className="amount">{formatNumber(result.tax_payable)}</td>
              </tr>
              {result.paye_deducted > 0 && (
                <tr>
                  <td>PAYE Already Paid</td>
                  <td className="amount">{formatNumber(result.paye_deducted)}</td>
                </tr>
              )}
              <tr className={`result-row ${result.result_type}`}>
                <td><strong>Final Result</strong></td>
                <td className="amount">
                  <strong>
                    {result.result_type === 'refund' ? `REFUND: ${formatNumber(result.refund_amount)}` :
                     result.result_type === 'additional' ? `TAX DUE: ${formatNumber(result.additional_tax)}` :
                     'BALANCED'}
                  </strong>
                </td>
              </tr>
              <tr>
                <td>Effective Tax Rate</td>
                <td className="amount">{result.effective_rate || 0}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    if (calculation.calculator_type === 'cit') {
      return (
        <div className="details-container">
          <h4>🏢 Company Information</h4>
          <table className="details-table">
            <tbody>
              <tr><td>Business Name</td><td className="amount">{input.business_name || 'N/A'}</td></tr>
              <tr><td>Business Type</td><td className="amount">{input.business_type || 'N/A'}</td></tr>
              <tr><td>Annual Turnover</td><td className="amount">{formatNumber(input.turnover)}</td></tr>
              <tr><td>Total Assets</td><td className="amount">{formatNumber(input.total_assets)}</td></tr>
            </tbody>
          </table>

          <h4 style={{ marginTop: '24px' }}>📊 Tax Calculation</h4>
          <table className="details-table">
            <tbody>
              <tr>
                <td>Company Classification</td>
                <td className="amount">{result.company_tier === 'small' ? 'Small Company (0% CIT)' : 'Large Company (30% CIT)'}</td>
              </tr>
              <tr>
                <td>Assessable Profit</td>
                <td className="amount">{formatNumber(result.assessable_profit)}</td>
              </tr>
              {result.cit > 0 && (
                <tr>
                  <td>CIT ({result.cit_rate}%)</td>
                  <td className="amount">{formatNumber(result.cit)}</td>
                </tr>
              )}
              {result.levy > 0 && (
                <tr>
                  <td>Development Levy</td>
                  <td className="amount">{formatNumber(result.levy)}</td>
                </tr>
              )}
              <tr className="total-row">
                <td><strong>TOTAL TAX PAYABLE</strong></td>
                <td className="amount"><strong>{formatNumber(result.total_tax_payable)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    // ... other calculator types (vat, wht, rent) remain the same ...

    return <pre className="json-viewer">{JSON.stringify(calculation, null, 2)}</pre>;
  };

  // ===== WHAT YOU ENTERED TAB =====
  const renderInputs = () => {
    const input = calculation.input_data || {};
    const entries = Object.entries(input).filter(([_, value]) => 
      value && value !== '0' && value !== '' && value !== 0
    );

    if (entries.length === 0) {
      return (
        <div className="empty-state">
          <p>No input data available for this calculation.</p>
        </div>
      );
    }

    return (
      <div className="inputs-section">
        <h4>📝 What You Told Us</h4>
        <div className="inputs-grid">
          {entries.map(([key, value]) => (
            <div key={key} className="input-item">
              <span className="input-label">{formatFieldName(key)}</span>
              <span className="input-value">
                {typeof value === 'number' ? formatNumber(value) : value}
              </span>
            </div>
          ))}
        </div>
        <p className="inputs-note">These are the details you provided when saving this calculation.</p>
      </div>
    );
  };

  // ===== NEXT STEPS TAB =====
  const renderNextSteps = () => {
    const result = calculation.result_data || {};
    const type = calculation.calculator_type;

    const handleGoToGuidance = () => {
      if (setParentActiveTab) {
        setParentActiveTab('guidance');
        onClose();
      } else {
        window.location.href = '/?tab=guidance';
      }
    };

    const handleGoToWhatIf = () => {
      if (setParentActiveTab) {
        setParentActiveTab(type);
        onClose();
        setTimeout(() => {
          if (window.restoreWhatIf) {
            window.restoreWhatIf(calculation.input_data);
          }
        }, 500);
      }
    };

    return (
      <div className="next-steps-section">
        <h4>📋 What To Do Next</h4>
        
        {type === 'pit' && result.result_type === 'refund' && (
          <div className="step-card highlight">
            <div className="step-number">1</div>
            <div className="step-content">
              <h5>🎉 Claim Your Refund</h5>
              <p>You overpaid by <strong>{formatNumber(result.refund_amount)}</strong>.</p>
              <button className="step-btn" onClick={handleGoToGuidance}>
                See Refund Process →
              </button>
            </div>
          </div>
        )}

        {type === 'pit' && result.result_type === 'additional' && (
          <div className="step-card highlight warning">
            <div className="step-number">1</div>
            <div className="step-content">
              <h5>⚠️ Pay Your Tax</h5>
              <p>You owe <strong>{formatNumber(result.additional_tax)}</strong>.</p>
              <button className="step-btn" onClick={handleGoToGuidance}>
                Learn How to Pay →
              </button>
            </div>
          </div>
        )}

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h5>🔄 Use This Calculation Again</h5>
            <button className="step-btn" onClick={onUse}>
              Load into Calculator →
            </button>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h5>🔀 Try What-If Comparison</h5>
            <button className="step-btn" onClick={handleGoToWhatIf} disabled={creditBalance < 2}>
              {creditBalance < 2 ? 'Need 2 credits' : 'Compare Scenarios →'}
            </button>
          </div>
        </div>

        <div className="documents-reminder">
          <h5>📎 Remember to Keep:</h5>
          <ul>
            <li>Payslips and income records</li>
            <li>Rent receipts (if you claimed rent relief)</li>
            <li>Pension contribution statements</li>
            <li>NHIS/NHF payment receipts</li>
            <li>WHT credit certificates</li>
          </ul>
        </div>
      </div>
    );
  };

  // ===== HANDLE REPORT GENERATION BASED ON TYPE =====
  const handleGenerateReport = () => {
    if (creditBalance < 3) {
      alert('You need 3 credits to generate a report');
      return;
    }
    setShowReportModal(true);
  };

  return (
    <div className="modal-overlay">
      <div className="viewer-modal">
        {/* Header */}
        <div className="viewer-header">
          <div className="viewer-title">
            <span className="viewer-icon">📋</span>
            <div>
              <h2>{calculation.calculator_type?.toUpperCase() || 'Unknown'} Calculation</h2>
              <p className="viewer-date">Saved on {formatDate(calculation.created_at)}</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="viewer-tabs">
          <button className={`tab-btn ${currentTab === 'details' ? 'active' : ''}`} onClick={() => setCurrentTab('details')}>
            📊 Full Details
          </button>
          <button className={`tab-btn ${currentTab === 'inputs' ? 'active' : ''}`} onClick={() => setCurrentTab('inputs')}>
            📝 What You Entered
          </button>
          <button className={`tab-btn ${currentTab === 'next' ? 'active' : ''}`} onClick={() => setCurrentTab('next')}>
            📋 Next Steps
          </button>
        </div>

        {/* Content */}
        <div className="viewer-content">
          {currentTab === 'details' && renderFullDetails()}
          {currentTab === 'inputs' && renderInputs()}
          {currentTab === 'next' && renderNextSteps()}
        </div>

        {/* Actions */}
        <div className="viewer-actions">
          <button className="secondary-btn" onClick={onClose}>Close</button>
          <button className="primary-btn" onClick={onUse}>🔄 Use This Calculation</button>
          <button className="report-btn" onClick={handleGenerateReport} disabled={creditBalance < 3}>
  📥 Download Comprehensive Tax Report (3 credits)
</button>
        </div>
      </div>

      {/* Report Modal - FIXED */}
{showReportModal && (
  calculation.calculator_type === 'cit' ? (
    <CITReportGenerator
      calculation={{ input: calculation.input_data, result: calculation.result_data }}
      user={user}
      onClose={() => setShowReportModal(false)}
      creditBalance={creditBalance}
      setCreditBalance={setCreditBalance}
    />
  ) : (
    <ReportGenerator
      calculation={{ input: calculation.input_data, result: calculation.result_data }}
      type={calculation.calculator_type}
      user={user}
      onClose={() => setShowReportModal(false)}
      creditBalance={creditBalance}
      setCreditBalance={setCreditBalance}
    />
  )
)}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        .viewer-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 800px;
          width: 90%;
          max-height: 85vh;
          overflow-y: auto;
          color: white;
        }
        .viewer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2D3748;
        }
        .viewer-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .viewer-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .viewer-title h2 {
          margin: 0 0 4px 0;
          color: #4299E1;
        }
        .viewer-date {
          margin: 0;
          color: #A0AEC0;
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
        .viewer-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          cursor: pointer;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .details-container {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
        }
        .details-table {
          width: 100%;
          border-collapse: collapse;
        }
        .details-table td {
          padding: 8px;
          border-bottom: 1px solid #4A5568;
        }
        .details-table td.amount {
          text-align: right;
          font-weight: 600;
        }
        .total-row td {
          background: #1A202C;
          font-weight: 700;
        }
        .inputs-section {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
        }
        .inputs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
        }
        .input-item {
          background: #1A202C;
          border-radius: 8px;
          padding: 12px;
          border-left: 3px solid #4299E1;
        }
        .input-label {
          display: block;
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .input-value {
          font-weight: 600;
        }
        .next-steps-section {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
        }
        .step-card {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          padding: 16px;
          background: #1A202C;
          border-radius: 8px;
        }
        .step-number {
          width: 30px;
          height: 30px;
          background: #4299E1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .step-content {
          flex: 1;
        }
        .step-btn {
          padding: 8px 16px;
          background: #4299E1;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
        }
        .viewer-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #2D3748;
        }
        .secondary-btn, .primary-btn, .report-btn {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        .secondary-btn {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }
        .primary-btn {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          color: white;
        }
        .report-btn {
          background: #4299E1;
          border: none;
          color: white;
        }
        .report-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default SavedCalculationViewer;