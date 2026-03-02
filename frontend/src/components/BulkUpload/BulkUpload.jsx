// frontend/src/components/BulkUpload/BulkUpload.jsx
import React, { useState, useRef } from 'react';
import api from '../../utils/api';
import { formatCurrency } from '../../utils/formatters';

const BulkUpload = ({ creditBalance, setCreditBalance, onClose }) => {
  const [file, setFile] = useState(null);
  const [calculatorType, setCalculatorType] = useState('pit');
  const [uploading, setUploading] = useState(false);
  const [job, setJob] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [previousJobs, setPreviousJobs] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Validate file type
    const validTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    
    if (!validTypes.includes(selectedFile.type) && 
        !selectedFile.name.endsWith('.csv') && 
        !selectedFile.name.endsWith('.xls') && 
        !selectedFile.name.endsWith('.xlsx')) {
      setError('Please upload a CSV or Excel file (.csv, .xls, .xlsx)');
      return;
    }

    setFile(selectedFile);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    if (creditBalance < 20) {
      setError('Need 20 credits for bulk upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('calculator_type', calculatorType);

    setUploading(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/api/bulk-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setJob(response.data);
        setCreditBalance(response.data.new_balance);
        setSuccess(`Upload complete! ${response.data.successful} successful, ${response.data.failed} failed.`);
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setFile(null);

        // Fetch updated job history
        fetchJobHistory();
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const fetchJobHistory = async () => {
    try {
      const response = await api.get('/api/bulk-upload/jobs');
      if (response.data.success) {
        setPreviousJobs(response.data.jobs);
      }
    } catch (err) {
      console.error('Failed to fetch job history', err);
    }
  };

  const downloadTemplate = () => {
    let template;
    
    if (calculatorType === 'pit') {
      template = `full_name,email,phone,employment_salary,employment_basic,employment_housing,employment_transport,business_profit,rent_paid,pension_rsa
John Doe,john@example.com,08012345678,5000000,3000000,1000000,600000,2000000,1500000,240000
Jane Smith,jane@example.com,08087654321,8000000,4800000,1600000,960000,0,2000000,384000`;
    } else {
      template = `business_name,business_type,turnover,total_assets,trading_profit,rental_income,operating_expenses
"Deolu's Supermarket Ltd",trading,50000000,20000000,10000000,0,6000000
"ABC Consulting Ltd",consulting,80000000,30000000,15000000,2000000,8000000`;
    }

    const blob = new Blob([template], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `template_${calculatorType}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadErrorReport = () => {
    if (!job || !job.errors) return;

    const errorCsv = 'Row,Error\n' + job.errors.map(e => `${e.row},"${e.error}"`).join('\n');
    const blob = new Blob([errorCsv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `error_report_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bulk-upload">
      <div className="upload-header">
        <h2>Bulk Upload</h2>
        <div className="credit-badge">20 credits</div>
        <button className="close-btn" onClick={onClose}>✕</button>
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

      <div className="upload-container">
        <div className="calculator-selector">
          <label>Calculation Type</label>
          <div className="selector-buttons">
            <button
              className={calculatorType === 'pit' ? 'active' : ''}
              onClick={() => setCalculatorType('pit')}
            >
              PIT (Employees)
            </button>
            <button
              className={calculatorType === 'cit' ? 'active' : ''}
              onClick={() => setCalculatorType('cit')}
            >
              CIT (Companies)
            </button>
          </div>
        </div>

        <div className="file-upload-area">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".csv,.xls,.xlsx"
            disabled={uploading}
          />
          <p className="file-info">
            Supported formats: CSV, Excel (.xls, .xlsx)<br />
            Max file size: 10MB (up to 1000 records)
          </p>
        </div>

        <div className="template-section">
          <button className="template-btn" onClick={downloadTemplate}>
            📥 Download Template
          </button>
          <span className="template-hint">
            Use our template to format your data correctly
          </span>
        </div>

        <div className="upload-actions">
          <button
            className="upload-btn"
            onClick={handleUpload}
            disabled={!file || uploading || creditBalance < 20}
          >
            {uploading ? (
              <>
                <span className="spinner"></span>
                Uploading...
              </>
            ) : creditBalance < 20 ? (
              'Need 20 credits'
            ) : (
              'Upload and Process (20 credits)'
            )}
          </button>
        </div>

        {uploading && (
          <div className="progress-indicator">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: job ? `${(job.processed_records / job.total_records) * 100}%` : '0%' }}></div>
            </div>
            <p className="progress-text">
              {job ? `Processing ${job.processed_records} of ${job.total_records} records...` : 'Uploading file...'}
            </p>
          </div>
        )}

        {job && job.failed > 0 && (
          <div className="error-report">
            <div className="report-header">
              <span className="report-title">⚠️ {job.failed} errors found</span>
              <button className="download-report-btn" onClick={downloadErrorReport}>
                Download Error Report
              </button>
            </div>
            <div className="error-preview">
              <h4>First {Math.min(job.errors.length, 5)} errors:</h4>
              <ul>
                {job.errors.slice(0, 5).map((err, idx) => (
                  <li key={idx}>Row {err.row}: {err.error}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="history-section">
        <button 
          className="history-toggle"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? '▼ Hide History' : '▶ View Previous Uploads'}
        </button>

        {showHistory && (
          <div className="history-list">
            {previousJobs.length === 0 ? (
              <p className="no-history">No previous uploads</p>
            ) : (
              previousJobs.map(j => (
                <div key={j.id} className="history-item">
                  <div className="history-info">
                    <span className="history-filename">{j.filename}</span>
                    <span className={`history-status status-${j.status}`}>
                      {j.status}
                    </span>
                  </div>
                  <div className="history-stats">
                    <span>{j.processed_records}/{j.total_records} records</span>
                    <span>{new Date(j.created_at).toLocaleString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="upload-footer">
        <p className="disclaimer">
          ⚠️ Bulk upload processes up to 1000 records at a time. 
          Each record costs the standard calculator credit (PIT free, CIT 2 credits).
          The 20 credit fee is for processing only.
        </p>
      </div>

      <style jsx>{`
        .bulk-upload {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 800px;
          margin: 0 auto;
        }
        .upload-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .upload-header h2 {
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
        .success-message {
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #2E7D32;
        }
        .upload-container {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .calculator-selector {
          margin-bottom: 24px;
        }
        .calculator-selector label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-muted);
          font-size: 14px;
        }
        .selector-buttons {
          display: flex;
          gap: 12px;
        }
        .selector-buttons button {
          flex: 1;
          padding: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
        }
        .selector-buttons button.active {
          background: var(--gradient-primary);
          border: none;
          color: white;
        }
        .file-upload-area {
          margin-bottom: 20px;
          padding: 30px;
          background: rgba(0,0,0,0.2);
          border: 2px dashed var(--border-light);
          border-radius: 12px;
          text-align: center;
        }
        .file-upload-area input {
          margin-bottom: 12px;
        }
        .file-info {
          color: var(--text-muted);
          font-size: 13px;
          margin: 0;
        }
        .template-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding: 16px;
          background: rgba(11,79,108,0.1);
          border-radius: 8px;
        }
        .template-btn {
          padding: 8px 16px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 13px;
          cursor: pointer;
        }
        .template-hint {
          color: var(--text-muted);
          font-size: 13px;
        }
        .upload-actions {
          text-align: center;
        }
        .upload-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .upload-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        .progress-indicator {
          margin-top: 20px;
        }
        .progress-bar {
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-light), #FFD700);
          transition: width 0.3s;
        }
        .progress-text {
          color: var(--text-muted);
          font-size: 13px;
          text-align: center;
        }
        .error-report {
          margin-top: 24px;
          padding: 16px;
          background: rgba(178,34,34,0.05);
          border: 1px solid rgba(178,34,34,0.2);
          border-radius: 8px;
        }
        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .report-title {
          color: #ff6b6b;
          font-weight: 600;
        }
        .download-report-btn {
          padding: 6px 12px;
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 4px;
          color: #ff6b6b;
          font-size: 12px;
          cursor: pointer;
        }
        .error-preview h4 {
          margin: 0 0 8px 0;
          font-size: 14px;
          color: var(--text-muted);
        }
        .error-preview ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
          font-size: 13px;
        }
        .history-section {
          margin-top: 24px;
        }
        .history-toggle {
          background: none;
          border: none;
          color: var(--primary-light);
          font-size: 14px;
          cursor: pointer;
          padding: 8px 0;
        }
        .history-list {
          margin-top: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 16px;
        }
        .no-history {
          color: var(--text-muted);
          text-align: center;
          margin: 20px 0;
        }
        .history-item {
          padding: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .history-item:last-child {
          border-bottom: none;
        }
        .history-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .history-filename {
          font-weight: 600;
        }
        .history-status {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          text-transform: uppercase;
        }
        .status-pending {
          background: rgba(255,140,0,0.1);
          color: #FF8C00;
        }
        .status-processing {
          background: rgba(11,79,108,0.1);
          color: var(--primary-light);
        }
        .status-completed {
          background: rgba(46,125,50,0.1);
          color: #2E7D32;
        }
        .status-failed {
          background: rgba(178,34,34,0.1);
          color: #ff6b6b;
        }
        .history-stats {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 12px;
        }
        .upload-footer {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }
        .disclaimer {
          color: var(--text-muted);
          font-size: 12px;
          text-align: center;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default BulkUpload;