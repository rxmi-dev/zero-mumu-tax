// frontend/src/components/NRSFormPrefill/NRSFormPrefill.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { formatCurrency } from '../../utils/formatters';

const NRSFormPrefill = ({ creditBalance, setCreditBalance, onClose }) => {
  const [calculations, setCalculations] = useState([]);
  const [selectedCalc, setSelectedCalc] = useState(null);
  const [formType, setFormType] = useState('pit');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(null);
  const [formHtml, setFormHtml] = useState('');
  const [showPreview, setShowPreview] = useState(false);

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

  const handleGenerateForm = async () => {
    if (!selectedCalc) {
      setError('Please select a calculation');
      return;
    }

    if (creditBalance < 3) {
      setError('Need 3 credits for form pre-fill');
      return;
    }

    setGenerating(true);
    setError('');

    try {
      const response = await api.post('/api/nrs/form/prefill', {
        calculation_id: selectedCalc,
        form_type: formType
      });

      if (response.data.success) {
        setFormData(response.data.form_data);
        setFormHtml(response.data.form_html);
        setShowPreview(true);
        setCreditBalance(response.data.new_balance);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate form');
    } finally {
      setGenerating(false);
    }
  };

  const getCalculationSummary = (calc) => {
    if (calc.calculator_type === 'pit') {
      return {
        title: `PIT - ₦${calc.result_data?.total_income?.toLocaleString()}`,
        date: new Date(calc.created_at).toLocaleDateString()
      };
    } else if (calc.calculator_type === 'cit') {
      return {
        title: `CIT - ${calc.input_data?.business_name || 'Business'}`,
        date: new Date(calc.created_at).toLocaleDateString()
      };
    }
    return {
      title: `${calc.calculator_type.toUpperCase()} Calculation`,
      date: new Date(calc.created_at).toLocaleDateString()
    };
  };

  return (
    <div className="nrs-form-prefill">
      <div className="form-header">
        <h2>NRS Form Pre-fill</h2>
        <div className="credit-badge">3 credits</div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {!showPreview ? (
        <div className="selection-container">
          <div className="form-type-selector">
            <label>Form Type</label>
            <div className="selector-buttons">
              <button
                className={formType === 'pit' ? 'active' : ''}
                onClick={() => setFormType('pit')}
              >
                PIT Form (Personal)
              </button>
              <button
                className={formType === 'cit' ? 'active' : ''}
                onClick={() => setFormType('cit')}
              >
                CIT Form (Company)
              </button>
            </div>
          </div>

          <div className="calculation-selector">
            <label>Select Calculation</label>
            {loading ? (
              <div className="loading-small">Loading...</div>
            ) : calculations.length === 0 ? (
              <div className="no-calculations">
                <p>No saved calculations found.</p>
                <p className="hint">Save a calculation first to pre-fill forms.</p>
              </div>
            ) : (
              <select
                value={selectedCalc || ''}
                onChange={(e) => setSelectedCalc(parseInt(e.target.value))}
                className="dark-select"
              >
                <option value="">-- Select a calculation --</option>
                {calculations
                  .filter(c => c.calculator_type === formType)
                  .map(calc => {
                    const summary = getCalculationSummary(calc);
                    return (
                      <option key={calc.id} value={calc.id}>
                        {summary.title} - {summary.date}
                      </option>
                    );
                  })}
              </select>
            )}
          </div>

          <button
            className="generate-btn"
            onClick={handleGenerateForm}
            disabled={!selectedCalc || generating || creditBalance < 3}
          >
            {generating ? 'Generating...' : creditBalance < 3 ? 'Need 3 credits' : 'Generate Form (3 credits)'}
          </button>
        </div>
      ) : (
        <div className="preview-container">
          <div className="preview-actions">
            <button className="back-btn" onClick={() => setShowPreview(false)}>← Back</button>
            <button className="print-btn" onClick={() => window.print()}>🖨️ Print</button>
            <button className="download-btn" onClick={() => {
              const blob = new Blob([formHtml], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `nrs_form_${formType}_${new Date().toISOString().split('T')[0]}.html`;
              a.click();
            }}>📥 Download</button>
          </div>
          <iframe srcDoc={formHtml} className="form-iframe" title="NRS Form" />
        </div>
      )}

      <style>{`
        .nrs-form-prefill {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 1000px;
          margin: 0 auto;
          color: white;
        }
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2D3748;
        }
        .form-header h2 {
          margin: 0;
          color: #4299E1;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid #FFD700;
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
        }
        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
        }
        .selection-container {
          background: #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .form-type-selector {
          margin-bottom: 24px;
        }
        .form-type-selector label {
          display: block;
          margin-bottom: 8px;
          color: #A0AEC0;
        }
        .selector-buttons {
          display: flex;
          gap: 12px;
        }
        .selector-buttons button {
          flex: 1;
          padding: 12px;
          background: #4A5568;
          border: none;
          border-radius: 8px;
          color: #A0AEC0;
          cursor: pointer;
        }
        .selector-buttons button.active {
          background: #4299E1;
          color: white;
        }
        .calculation-selector {
          margin-bottom: 24px;
        }
        .calculation-selector label {
          display: block;
          margin-bottom: 8px;
          color: #A0AEC0;
        }
        .calculation-selector select.dark-select {
          width: 100%;
          padding: 12px;
          background: #1A202C;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }
        .calculation-selector select.dark-select option {
          background: #1A202C;
          color: white;
          padding: 8px;
        }
        .generate-btn {
          width: 100%;
          padding: 14px;
          background: #48BB78;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        .preview-container {
          background: #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .preview-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        .back-btn {
          padding: 8px 16px;
          background: #4A5568;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }
        .print-btn, .download-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .print-btn { background: #4299E1; color: white; }
        .download-btn { background: #FFD700; color: black; }
        .form-iframe {
          width: 100%;
          height: 600px;
          border: 1px solid #4A5568;
          border-radius: 8px;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default NRSFormPrefill;