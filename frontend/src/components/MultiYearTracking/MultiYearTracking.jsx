// frontend/src/components/MultiYearTracking/MultiYearTracking.jsx
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { formatCurrency } from '../../utils/formatters';

const MultiYearTracking = ({ creditBalance, setCreditBalance, onClose }) => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearData, setYearData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingYear, setLoadingYear] = useState(false);
  const [error, setError] = useState('');
  const [unlockedYears, setUnlockedYears] = useState([]);

  useEffect(() => {
    fetchYears();
  }, []);

  const fetchYears = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/tax-years');
      if (response.data.success) {
        setYears(response.data.years);
      }
    } catch (err) {
      setError('Failed to load tax years');
    } finally {
      setLoading(false);
    }
  };

  const handleYearClick = async (year) => {
    if (unlockedYears.includes(year)) {
      // Already unlocked, just fetch data
      fetchYearData(year);
    } else {
      // Need to unlock (costs 5 credits)
      if (creditBalance < 5) {
        setError('Need 5 credits to unlock this year');
        return;
      }
      unlockYear(year);
    }
  };

  const unlockYear = async (year) => {
    setLoadingYear(true);
    setError('');

    try {
      // This would be a new endpoint to "purchase" a year
      // For now, we'll just deduct credits and fetch
      const response = await api.post('/api/tax-years/unlock', { year });
      
      if (response.data.success) {
        setCreditBalance(response.data.new_balance);
        setUnlockedYears([...unlockedYears, year]);
        fetchYearData(year);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to unlock year');
    } finally {
      setLoadingYear(false);
    }
  };

  const fetchYearData = async (year) => {
    setLoadingYear(true);
    try {
      const response = await api.get(`/api/tax-years/${year}`);
      if (response.data.success) {
        setYearData(response.data);
        setSelectedYear(year);
      }
    } catch (err) {
      setError('Failed to load year data');
    } finally {
      setLoadingYear(false);
    }
  };

  const getYearlyChange = (currentYear, previousYear) => {
    const current = years.find(y => y.year === currentYear);
    const previous = years.find(y => y.year === previousYear);
    
    if (!current || !previous) return null;
    
    const incomeChange = ((current.total_income - previous.total_income) / previous.total_income) * 100;
    const taxChange = ((current.total_tax_paid - previous.total_tax_paid) / previous.total_tax_paid) * 100;
    
    return { incomeChange, taxChange };
  };

  return (
    <div className="multi-year-tracking">
      <div className="tracking-header">
        <h2>Multi-Year Tax Tracking</h2>
        <div className="credit-badge">5 credits per year</div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {loading ? (
        <div className="loading">Loading years...</div>
      ) : years.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h3>No tax years yet</h3>
          <p>Save calculations across different years to see your tax history here.</p>
        </div>
      ) : (
        <>
          {/* Year Summary Cards */}
          <div className="years-grid">
            {years.map((year, index) => {
              const isUnlocked = unlockedYears.includes(year.year);
              const change = index > 0 ? getYearlyChange(year.year, years[index-1].year) : null;
              
              return (
                <div 
                  key={year.year}
                  className={`year-card ${selectedYear === year.year ? 'selected' : ''} ${isUnlocked ? 'unlocked' : 'locked'}`}
                  onClick={() => handleYearClick(year.year)}
                >
                  <div className="year-header">
                    <h3>{year.year}</h3>
                    {!isUnlocked && <span className="lock-badge">🔒</span>}
                  </div>
                  
                  {isUnlocked ? (
                    <>
                      <div className="year-stat">
                        <span className="stat-label">Income</span>
                        <span className="stat-value">{formatCurrency(year.total_income)}</span>
                      </div>
                      <div className="year-stat">
                        <span className="stat-label">Tax Paid</span>
                        <span className="stat-value">{formatCurrency(year.total_tax_paid)}</span>
                      </div>
                      <div className="year-stat">
                        <span className="stat-label">Effective Rate</span>
                        <span className="stat-value">{year.effective_rate.toFixed(1)}%</span>
                      </div>
                      
                      {change && (
                        <div className="year-change">
                          {change.incomeChange > 0 ? (
                            <span className="positive">▲ Income +{change.incomeChange.toFixed(1)}%</span>
                          ) : (
                            <span className="negative">▼ Income {change.incomeChange.toFixed(1)}%</span>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="lock-message">
                      <p>Click to unlock (5 credits)</p>
                      <button className="unlock-btn">Unlock →</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Year View */}
          {selectedYear && yearData && (
            <div className="year-details">
              <h3>{selectedYear} - Detailed Breakdown</h3>
              
              {loadingYear ? (
                <div className="loading">Loading details...</div>
              ) : (
                <>
                  <div className="summary-stats">
                    <div className="stat-card">
                      <div className="stat-title">Total Income</div>
                      <div className="stat-big">{formatCurrency(yearData.calculations.reduce((sum, c) => sum + (c.result_data?.total_income || 0), 0))}</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-title">Total Tax</div>
                      <div className="stat-big">{formatCurrency(yearData.calculations.reduce((sum, c) => sum + (c.result_data?.tax_payable || c.result_data?.total_tax_payable || 0), 0))}</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-title">Calculations</div>
                      <div className="stat-big">{yearData.calculations.length}</div>
                    </div>
                  </div>

                  <div className="calculations-list">
                    <h4>All Calculations from {selectedYear}</h4>
                    <table className="calculations-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Income</th>
                          <th>Tax</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearData.calculations.map(calc => (
                          <tr key={calc.id}>
                            <td>{new Date(calc.created_at).toLocaleDateString()}</td>
                            <td>
                              <span className={`type-badge type-${calc.calculator_type}`}>
                                {calc.calculator_type.toUpperCase()}
                              </span>
                            </td>
                            <td>{formatCurrency(calc.result_data?.total_income || calc.result_data?.assessable_profit || 0)}</td>
                            <td>{formatCurrency(calc.result_data?.tax_payable || calc.result_data?.total_tax_payable || 0)}</td>
                            <td>
                              <button className="view-btn" onClick={() => window.open(`/?tab=${calc.calculator_type}&restore=${calc.id}`, '_blank')}>
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Trend Chart Placeholder */}
                  <div className="trend-section">
                    <h4>Year-over-Year Trend</h4>
                    <div className="trend-chart">
                      {/* In a real implementation, you'd add a chart library here */}
                      <div className="chart-placeholder">
                        <div className="trend-bars">
                          {years.map((y, i) => (
                            <div key={y.year} className="trend-bar-group">
                              <div 
                                className="trend-bar income-bar" 
                                style={{ height: `${(y.total_income / Math.max(...years.map(y => y.total_income))) * 150}px` }}
                                title={`Income: ${formatCurrency(y.total_income)}`}
                              ></div>
                              <div 
                                className="trend-bar tax-bar" 
                                style={{ height: `${(y.total_tax_paid / Math.max(...years.map(y => y.total_income))) * 150}px` }}
                                title={`Tax: ${formatCurrency(y.total_tax_paid)}`}
                              ></div>
                              <div className="trend-year-label">{y.year}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}

      <style jsx>{`
        .multi-year-tracking {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tracking-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tracking-header h2 {
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
        .loading {
          text-align: center;
          padding: 40px;
          color: var(--text-muted);
        }
        .empty-state {
          text-align: center;
          padding: 60px;
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
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
          color: var(--text-muted);
          margin: 0;
        }
        .years-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .year-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .year-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-light);
          box-shadow: 0 10px 20px rgba(11,79,108,0.2);
        }
        .year-card.selected {
          border: 2px solid var(--primary-light);
          background: rgba(11,79,108,0.1);
        }
        .year-card.locked {
          opacity: 0.8;
          background: rgba(0,0,0,0.2);
        }
        .year-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .year-header h3 {
          margin: 0;
          font-size: 20px;
          color: var(--primary-light);
        }
        .lock-badge {
          font-size: 18px;
        }
        .year-stat {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .stat-label {
          color: var(--text-muted);
          font-size: 13px;
        }
        .stat-value {
          font-weight: 600;
        }
        .year-change {
          margin-top: 12px;
          padding: 8px;
          background: rgba(0,0,0,0.2);
          border-radius: 6px;
          text-align: center;
        }
        .positive {
          color: #2E7D32;
        }
        .negative {
          color: #B22222;
        }
        .lock-message {
          text-align: center;
          padding: 20px 0 10px;
        }
        .lock-message p {
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .unlock-btn {
          padding: 8px 20px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 20px;
          color: white;
          font-size: 13px;
          cursor: pointer;
        }
        .year-details {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
        }
        .year-details h3 {
          margin: 0 0 24px 0;
          font-size: 22px;
        }
        .summary-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .stat-title {
          color: var(--text-muted);
          font-size: 13px;
          margin-bottom: 8px;
        }
        .stat-big {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-light);
        }
        .calculations-list {
          margin-bottom: 32px;
        }
        .calculations-list h4 {
          margin: 0 0 16px 0;
          font-size: 18px;
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
        }
        .calculations-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border-light);
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
        .view-btn {
          padding: 4px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          color: white;
          font-size: 12px;
          cursor: pointer;
        }
        .trend-section {
          margin-top: 32px;
        }
        .trend-section h4 {
          margin: 0 0 20px 0;
          font-size: 18px;
        }
        .trend-chart {
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          padding: 24px;
        }
        .trend-bars {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 200px;
        }
        .trend-bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60px;
        }
        .trend-bar {
          width: 20px;
          margin: 0 2px;
          transition: height 0.3s;
        }
        .income-bar {
          background: linear-gradient(180deg, #4dabf7, #1971c2);
        }
        .tax-bar {
          background: linear-gradient(180deg, #FFD700, #FF8C00);
        }
        .trend-year-label {
          margin-top: 8px;
          font-size: 12px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default MultiYearTracking;