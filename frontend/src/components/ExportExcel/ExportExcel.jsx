// frontend/src/components/ExportExcel/ExportExcel.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { formatCurrency } from '../../utils/formatters';

const ExportExcel = ({ creditBalance, setCreditBalance, onClose }) => {
  const [calculations, setCalculations] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState('');
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchCalculations();
  }, []);

  const fetchCalculations = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/calculations');
      if (response.data.success) {
        setCalculations(response.data.calculations);
      }
    } catch (err) {
      setError('Failed to load calculations');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(calculations.map(c => c.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
      setSelectAll(false);
    } else {
      setSelectedIds([...selectedIds, id]);
      if (selectedIds.length + 1 === calculations.length) {
        setSelectAll(true);
      }
    }
  };

  const handleExport = async () => {
    if (selectedIds.length === 0) {
      setError('Please select at least one calculation');
      return;
    }

    if (creditBalance < 2) {
      setError('Need 2 credits for export');
      return;
    }

    setExporting(true);
    setError('');

    try {
      const response = await api.post('/api/export/excel', {
        calculation_ids: selectedIds
      }, {
        responseType: 'blob'
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `tax_calculations_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Update credit balance (backend will return new balance, but we can't access it from blob response)
      // For now, we'll assume it worked and deduct locally
      setCreditBalance(prev => prev - 2);

      setSelectedIds([]);
      setSelectAll(false);
    } catch (err) {
      setError('Export failed. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  const getCalculationSummary = (calc) => {
    if (calc.calculator_type === 'pit') {
      return {
        amount: calc.result_data?.tax_payable,
        income: calc.result_data?.total_income,
        type: 'PIT'
      };
    } else if (calc.calculator_type === 'cit') {
      return {
        amount: calc.result_data?.total_tax_payable,
        income: calc.result_data?.assessable_profit,
        type: 'CIT'
      };
    } else if (calc.calculator_type === 'vat') {
      return {
        amount: calc.result_data?.vat,
        income: calc.result_data?.net,
        type: 'VAT'
      };
    } else if (calc.calculator_type === 'wht') {
      return {
        amount: calc.result_data?.rate,
        income: null,
        type: 'WHT'
      };
    } else if (calc.calculator_type === 'rent') {
      return {
        amount: calc.result_data?.actual_relief,
        income: calc.result_data?.rent,
        type: 'Rent'
      };
    }
    return { amount: 0, income: 0, type: 'Unknown' };
  };

  return (
    <div className="export-excel">
      <div className="export-header">
        <h2>Export to Excel</h2>
        <div className="credit-badge">2 credits</div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      <div className="export-container">
        <div className="selection-bar">
          <div className="selection-info">
            <span className="selected-count">{selectedIds.length} selected</span>
            <span className="total-count">of {calculations.length} calculations</span>
          </div>
          <button className="select-all-btn" onClick={handleSelectAll}>
            {selectAll ? 'Deselect All' : 'Select All'}
          </button>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading calculations...</p>
          </div>
        ) : calculations.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📊</div>
            <h3>No calculations to export</h3>
            <p>Save some calculations first, then export them here.</p>
          </div>
        ) : (
          <div className="calculations-list">
            <table className="calculations-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Income/Amount</th>
                  <th>Tax/Result</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {calculations.map(calc => {
                  const summary = getCalculationSummary(calc);
                  return (
                    <tr key={calc.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(calc.id)}
                          onChange={() => handleSelect(calc.id)}
                        />
                      </td>
                      <td>{new Date(calc.created_at).toLocaleDateString()}</td>
                      <td>
                        <span className={`type-badge type-${calc.calculator_type}`}>
                          {summary.type}
                        </span>
                      </td>
                      <td>{summary.income ? formatCurrency(summary.income) : '-'}</td>
                      <td className="amount-cell">{summary.amount ? formatCurrency(summary.amount) : '-'}</td>
                      <td>{calc.tax_year || '2026'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="export-footer">
          <div className="export-summary">
            <div className="summary-item">
              <span className="summary-label">Selected:</span>
              <span className="summary-value">{selectedIds.length} calculations</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Credit cost:</span>
              <span className="summary-value">2 credits</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Your balance:</span>
              <span className={`summary-value ${creditBalance < 2 ? 'insufficient' : 'sufficient'}`}>
                {creditBalance} credits
              </span>
            </div>
          </div>

          <button
            className="export-btn"
            onClick={handleExport}
            disabled={exporting || selectedIds.length === 0 || creditBalance < 2}
          >
            {exporting ? (
              <>
                <span className="spinner"></span>
                Exporting...
              </>
            ) : creditBalance < 2 ? (
              'Need 2 credits'
            ) : (
              'Export to Excel (2 credits)'
            )}
          </button>
        </div>

        <div className="export-info">
          <h4>📋 What's included in the Excel file:</h4>
          <ul>
            <li><strong>Summary Sheet:</strong> Overview of all selected calculations</li>
            <li><strong>Individual Sheets:</strong> Detailed input and results for each calculation</li>
            <li><strong>Formatted Numbers:</strong> Proper currency formatting</li>
            <li><strong>Timestamps:</strong> When each calculation was created</li>
            <li><strong>Tax Year:</strong> Year of calculation</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .export-excel {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 1000px;
          margin: 0 auto;
        }
        .export-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .export-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
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
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
        }
        .export-container {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
        }
        .selection-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 12px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .selection-info {
          font-size: 14px;
        }
        .selected-count {
          color: var(--primary-light);
          font-weight: 600;
          margin-right: 4px;
        }
        .total-count {
          color: var(--text-muted);
        }
        .select-all-btn {
          padding: 6px 12px;
          background: transparent;
          border: 1px solid var(--border-light);
          border-radius: 4px;
          color: var(--text-muted);
          font-size: 13px;
          cursor: pointer;
        }
        .select-all-btn:hover {
          background: rgba(255,255,255,0.05);
        }
        .loading-state {
          text-align: center;
          padding: 60px;
        }
        .spinner {
          display: inline-block;
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: var(--primary-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .empty-state {
          text-align: center;
          padding: 60px;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .empty-state h3 {
          margin: 0 0 8px 0;
        }
        .empty-state p {
          color: var(--text-muted);
          margin: 0;
        }
        .calculations-list {
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 24px;
        }
        .calculations-table {
          width: 100%;
          border-collapse: collapse;
        }
        .calculations-table th {
          text-align: left;
          padding: 12px;
          background: rgba(0,0,0,0.3);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 13px;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .calculations-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .calculations-table input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .type-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
        .type-pit {
          background: rgba(77,171,247,0.2);
          color: #4dabf7;
        }
        .type-cit {
          background: rgba(139,92,246,0.2);
          color: #8B5CF6;
        }
        .type-vat {
          background: rgba(255,140,0,0.2);
          color: #FF8C00;
        }
        .type-wht {
          background: rgba(11,79,108,0.2);
          color: var(--primary-light);
        }
        .type-rent {
          background: rgba(46,125,50,0.2);
          color: #2E7D32;
        }
        .amount-cell {
          font-weight: 600;
          color: #FFD700;
        }
        .export-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
        }
        .export-summary {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .summary-item {
          display: flex;
          flex-direction: column;
        }
        .summary-label {
          color: var(--text-muted);
          font-size: 12px;
          margin-bottom: 4px;
        }
        .summary-value {
          font-size: 18px;
          font-weight: 600;
        }
        .summary-value.insufficient {
          color: #B22222;
        }
        .summary-value.sufficient {
          color: #2E7D32;
        }
        .export-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .export-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .export-btn .spinner {
          width: 16px;
          height: 16px;
          margin: 0;
        }
        .export-info {
          margin-top: 24px;
          padding: 16px;
          background: rgba(11,79,108,0.1);
          border-radius: 8px;
        }
        .export-info h4 {
          margin: 0 0 12px 0;
          color: var(--primary-light);
        }
        .export-info ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
        }
        .export-info li {
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
};

export default ExportExcel;