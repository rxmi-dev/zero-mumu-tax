// frontend/src/components/MumuScore/MumuScoreDashboard.jsx
import React, { useState, useEffect } from 'react';

const MumuScoreDashboard = ({ user, calculations, onClose }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('breakdown');

  useEffect(() => {
    calculateScore();
  }, [calculations]);

  const calculateScore = () => {
    setLoading(true);
    
    let calculatedScore = 100;
    const breakdown = [];
    let totalSavings = 0;

    calculations.forEach(calc => {
      const input = calc.input_data || {};
      const result = calc.result_data || {};
      
      if (calc.calculator_type === 'pit') {
        // Get user inputs for display
        const employmentSalary = parseFloat(input.employment_salary) || 0;
        const businessProfit = parseFloat(input.business_profit) || 0;
        const pensionIncome = parseFloat(input.pension_income) || 0;
        const totalIncome = employmentSalary + businessProfit + pensionIncome;
        
        // Check rent relief
const rentPaid = parseFloat(input.rent_paid) || 0;
const hasRentRelief = result.deductions_breakdown?.rent_relief > 0;

if (rentPaid > 0) {
  const potentialRelief = Math.min(rentPaid * 0.2, 500000);
  const taxSaved = potentialRelief * 0.2;
  
  if (!hasRentRelief) {
    calculatedScore -= 15;
    breakdown.push({
      category: 'Rent Relief',
      issue: 'You pay rent but did not claim rent relief',
      penalty: -15,
      savings: taxSaved,
      tip: `Based on your rent of ${formatCurrency(rentPaid)}, you can claim ${formatCurrency(potentialRelief)} as rent relief under NTA 2025 Section 34. This could save you ${formatCurrency(taxSaved)} in tax.`,
      ntaReference: 'NTA 2025 Section 34(2) - Rent Relief',
      userInput: `Rent Paid: ${formatCurrency(rentPaid)}`,
      recommendedAction: `Add rent relief to save ${formatCurrency(taxSaved)}`
    });
    totalSavings += taxSaved;
  } else {
    // They claimed it - good! Add to score positively
    breakdown.push({
      category: 'Rent Relief',
      issue: '✓ You claimed rent relief correctly',
      penalty: 0,
      savings: 0,
      tip: `You're claiming ${formatCurrency(potentialRelief)} in rent relief, saving approximately ${formatCurrency(taxSaved)} in tax.`,
      ntaReference: 'NTA 2025 Section 34(2) - Rent Relief',
      userInput: `Rent Paid: ${formatCurrency(rentPaid)} | Relief Claimed: ${formatCurrency(result.deductions_breakdown?.rent_relief)}`,
      recommendedAction: 'Keep your rent receipts for 6 years'
    });
  }
}
        
        // Check pension
        const pension = parseFloat(input.pension_rsa) || 0;
        const basic = parseFloat(input.employment_basic) || 0;
        const housing = parseFloat(input.employment_housing) || 0;
        const transport = parseFloat(input.employment_transport) || 0;
        const qualifying = basic + housing + transport;
        const maxPension = qualifying * 0.08;
        
        if (maxPension > 0 && pension < maxPension) {
          const additional = maxPension - pension;
          const taxSaved = additional * 0.20;
          const percentUsed = (pension / maxPension * 100).toFixed(1);
          
          calculatedScore -= pension < maxPension * 0.5 ? 10 : 5;
          breakdown.push({
            category: 'Pension (RSA)',
            issue: pension === 0 ? 'No pension contributions' : 'Pension contributions below maximum',
            penalty: pension < maxPension * 0.5 ? -10 : -5,
            savings: taxSaved,
            tip: `Under NTA 2025, you can contribute up to 8% of your qualifying income (Basic + Housing + Transport = ${formatCurrency(qualifying)}) to your RSA. You're currently at ${percentUsed}% of the maximum. Increasing by ${formatCurrency(additional)} could save ${formatCurrency(taxSaved)}.`,
            ntaReference: 'NTA 2025 Section 35(1) - Pension Contributions',
            userInput: `Current Pension: ${formatCurrency(pension)} | Maximum: ${formatCurrency(maxPension)}`,
            recommendedAction: `Increase pension by ${formatCurrency(additional)}`
          });
          totalSavings += taxSaved;
        }
        
        // Check NHIS
        const nhis = parseFloat(input.nhis) || 0;
        const maxNhis = basic * 0.05;
        
        if (maxNhis > 0 && nhis < maxNhis) {
          const additional = maxNhis - nhis;
          const taxSaved = additional * 0.20;
          const percentUsed = (nhis / maxNhis * 100).toFixed(1);
          
          calculatedScore -= nhis < maxNhis * 0.5 ? 5 : 3;
          breakdown.push({
            category: 'NHIS',
            issue: 'NHIS contributions below maximum',
            penalty: nhis < maxNhis * 0.5 ? -5 : -3,
            savings: taxSaved,
            tip: `NHIS (National Health Insurance Scheme) contributions up to 5% of basic salary are deductible. You're at ${percentUsed}% of the maximum. Adding ${formatCurrency(additional)} could save ${formatCurrency(taxSaved)}.`,
            ntaReference: 'NTA 2025 Section 36 - Health Insurance Premiums',
            userInput: `Current NHIS: ${formatCurrency(nhis)} | Maximum: ${formatCurrency(maxNhis)}`,
            recommendedAction: `Increase NHIS by ${formatCurrency(additional)}`
          });
          totalSavings += taxSaved;
        }
        
        // Check NHF
        const nhf = parseFloat(input.nhf) || 0;
        const maxNhf = basic * 0.025;
        
        if (maxNhf > 0 && nhf < maxNhf) {
          const additional = maxNhf - nhf;
          const taxSaved = additional * 0.20;
          
          calculatedScore -= 2;
          breakdown.push({
            category: 'NHF',
            issue: 'NHF contributions below maximum',
            penalty: -2,
            savings: taxSaved,
            tip: `NHF (National Housing Fund) contributions up to 2.5% of basic salary are deductible. Adding ${formatCurrency(additional)} could save ${formatCurrency(taxSaved)}.`,
            ntaReference: 'NTA 2025 Section 37 - National Housing Fund',
            userInput: `Current NHF: ${formatCurrency(nhf)} | Maximum: ${formatCurrency(maxNhf)}`,
            recommendedAction: `Increase NHF by ${formatCurrency(additional)}`
          });
          totalSavings += taxSaved;
        }
        
        // Check PAYE overpayment
        const payeDeducted = parseFloat(input.paye_deducted) || 0;
        const taxPayable = result.tax_payable || 0;
        
        if (payeDeducted > taxPayable) {
          const overpaid = payeDeducted - taxPayable;
          calculatedScore -= 10;
          breakdown.push({
            category: 'PAYE Overpayment',
            issue: 'You may be overpaying PAYE',
            penalty: -10,
            savings: overpaid,
            tip: `Your employer deducted ${formatCurrency(payeDeducted)} in PAYE, but your tax liability is only ${formatCurrency(taxPayable)}. You're due a refund of ${formatCurrency(overpaid)}.`,
            ntaReference: 'NTA 2025 Section 58 - Refund of Overpayment',
            userInput: `PAYE Deducted: ${formatCurrency(payeDeducted)} | Tax Payable: ${formatCurrency(taxPayable)}`,
            recommendedAction: 'File for refund using NRS Form A'
          });
          totalSavings += overpaid;
        }
      }
    });

    // Ensure score is within bounds (minimum 20)
    calculatedScore = Math.max(20, Math.min(100, calculatedScore));

    // Calculate rank based on NTA compliance
    let rank, rankDescription;
    if (calculatedScore >= 90) {
      rank = 'NTA 2025 Expert';
      rankDescription = 'You are fully compliant with NTA 2025 regulations and maximizing all deductions!';
    } else if (calculatedScore >= 75) {
      rank = 'Tax Compliant';
      rankDescription = 'You are compliant with NTA 2025 but there are opportunities to save more.';
    } else if (calculatedScore >= 50) {
      rank = 'Learning';
      rankDescription = 'You have some NTA 2025 knowledge. Follow our tips to improve.';
    } else if (calculatedScore >= 30) {
      rank = 'Getting Started';
      rankDescription = 'You are new to NTA 2025. Complete your profile and follow the tips.';
    } else {
      rank = 'Needs Attention';
      rankDescription = 'You may be overpaying tax. Review the NTA 2025 guidelines below.';
    }

    const betterThanPercent = Math.min(95, Math.floor(calculatedScore * 0.9 + 5));
    const inLagos = Math.min(90, Math.floor(calculatedScore * 0.85 + 10));

    setScore({
      score: calculatedScore,
      rank,
      rankDescription,
      breakdown,
      totalPotentialSavings: totalSavings,
      peerComparison: {
        betterThanPercent,
        inLagos
      }
    });
    
    setLoading(false);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#2E7D32';
    if (score >= 60) return '#4CAF50';
    if (score >= 40) return '#FFC107';
    if (score >= 20) return '#FF9800';
    return '#B22222';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Calculating your NTA 2025 compliance score...</p>
        <style>{`
          .loading-container {
            text-align: center;
            padding: 60px;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.1);
            border-top-color: #4299E1;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!score) {
    return (
      <div className="error-container">
        <p>Could not calculate your score. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="mumu-score-dashboard">
      <div className="dashboard-header">
        <h2>Your NTA 2025 Compliance Score</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="score-main-card" style={{ background: `linear-gradient(135deg, ${getScoreColor(score.score)}20, ${getScoreColor(score.score)}05)` }}>
        <div className="score-circle-container">
          <svg viewBox="0 0 120 120" className="score-circle">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke={getScoreColor(score.score)}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 54 * score.score / 100} ${2 * Math.PI * 54}`}
              strokeDashoffset={2 * Math.PI * 54 * 0.25}
              transform="rotate(-90 60 60)"
              style={{ transition: 'stroke-dasharray 1s ease' }}
            />
            <text x="60" y="60" textAnchor="middle" dy="0.3em" className="score-text">{score.score}</text>
          </svg>
        </div>

        <div className="score-info">
          <h3 className="rank">{score.rank}</h3>
          <p className="rank-description">{score.rankDescription}</p>
          
          <div className="comparison-stats">
            <div className="stat-item">
              <span className="stat-label">You know more than</span>
              <span className="stat-value">{score.peerComparison.betterThanPercent}% of Nigerians</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">In Lagos</span>
              <span className="stat-value">{score.peerComparison.inLagos}% of taxpayers</span>
            </div>
          </div>

          {score.totalPotentialSavings > 0 && (
            <div className="savings-potential">
              <span className="potential-label">You could save</span>
              <span className="potential-amount">{formatCurrency(score.totalPotentialSavings)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="dashboard-tabs">
        <button className={`tab-btn ${activeTab === 'breakdown' ? 'active' : ''}`} onClick={() => setActiveTab('breakdown')}>
          📊 NTA 2025 Analysis
        </button>
        <button className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`} onClick={() => setActiveTab('tips')}>
          💡 How to Improve
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'breakdown' && (
          <div className="breakdown-section">
            <h4>NTA 2025 Compliance Analysis</h4>
            {score.breakdown.length === 0 ? (
              <div className="no-issues">
                <p>✅ You are 100% compliant with NTA 2025! No issues found.</p>
                <p className="sub-text">You're maximizing all available deductions.</p>
              </div>
            ) : (
              <div className="breakdown-list">
                {score.breakdown.map((item, index) => (
                  <div key={index} className="breakdown-item">
                    <div className="item-header">
                      <span className="item-category">{item.category}</span>
                      <span className="item-penalty" style={{ color: '#B22222' }}>{item.penalty} points</span>
                    </div>
                    <div className="item-issue">{item.issue}</div>
                    <div className="item-input">
                      <strong>Your input:</strong> {item.userInput}
                    </div>
                    {item.savings > 0 && (
                      <div className="item-savings">
                        <strong>Potential savings:</strong> {formatCurrency(item.savings)}
                      </div>
                    )}
                    <div className="item-nta">
                      <strong>NTA Reference:</strong> {item.ntaReference}
                    </div>
                    <div className="item-tip">
                      💡 {item.tip}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="tips-section">
            <h4>How to Improve Your NTA 2025 Compliance</h4>
            {score.breakdown.length === 0 ? (
              <div className="no-tips">
                <p>You're already doing great! Share your knowledge with others.</p>
              </div>
            ) : (
              <div className="tips-list">
                {score.breakdown.map((item, index) => (
                  <div key={index} className="tip-item">
                    <div className="tip-icon">📌</div>
                    <div className="tip-content">
                      <strong>{item.category}</strong>
                      <p>{item.recommendedAction}</p>
                      <small>NTA 2025: {item.ntaReference}</small>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="dashboard-footer">
        <button className="share-btn" onClick={() => {
          navigator.clipboard?.writeText(`My NTA 2025 compliance score is ${score.score}! I am a ${score.rank}. Calculate yours at Zero Mumu Tax.`);
          alert('Copied to clipboard!');
        }}>
          📤 Share Your Score
        </button>
      </div>

      <style>{`
        .mumu-score-dashboard {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 900px;
          margin: 0 auto;
          color: white;
          max-height: 90vh;
          overflow-y: auto;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .dashboard-header h2 {
          margin: 0;
          font-size: 24px;
          color: #4299E1;
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
        .score-main-card {
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 32px;
          align-items: center;
          border: 1px solid #2D3748;
        }
        .score-circle-container {
          width: 180px;
          height: 180px;
        }
        .score-circle {
          width: 100%;
          height: 100%;
        }
        .score-text {
          fill: white;
          font-size: 32px;
          font-weight: 700;
        }
        .score-info {
          flex: 1;
        }
        .rank {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 700;
        }
        .rank-description {
          margin: 0 0 20px 0;
          color: #CBD5E0;
          font-size: 16px;
        }
        .comparison-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .stat-item {
          background: #2D3748;
          border-radius: 8px;
          padding: 12px 16px;
        }
        .stat-label {
          display: block;
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .stat-value {
          display: block;
          font-weight: 600;
          color: #FFD700;
        }
        .savings-potential {
          background: rgba(255,215,0,0.1);
          border: 1px solid #FFD700;
          border-radius: 8px;
          padding: 12px 16px;
          display: inline-block;
        }
        .potential-label {
          color: #A0AEC0;
          margin-right: 8px;
        }
        .potential-amount {
          color: #FFD700;
          font-weight: 700;
          font-size: 18px;
        }
        .dashboard-tabs {
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
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .tab-content {
          min-height: 200px;
          margin-bottom: 24px;
        }
        .breakdown-section h4,
        .tips-section h4 {
          margin: 0 0 16px 0;
          color: #4299E1;
        }
        .no-issues, .no-tips {
          text-align: center;
          padding: 40px;
          background: #2D3748;
          border: 1px solid #48BB78;
          border-radius: 12px;
        }
        .no-issues p, .no-tips p {
          color: #48BB78;
          margin: 0 0 8px 0;
        }
        .sub-text {
          color: #A0AEC0 !important;
        }
        .breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .breakdown-item {
          background: #2D3748;
          border-radius: 12px;
          padding: 16px;
        }
        .item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .item-category {
          font-weight: 600;
          color: #4299E1;
        }
        .item-penalty {
          font-weight: 700;
        }
        .item-issue {
          color: #FBD38D;
          margin-bottom: 8px;
        }
        .item-input {
          color: #A0AEC0;
          font-size: 13px;
          margin-bottom: 8px;
          padding: 4px 8px;
          background: #1A202C;
          border-radius: 4px;
        }
        .item-savings {
          color: #48BB78;
          margin-bottom: 8px;
        }
        .item-nta {
          color: #90CDF4;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .item-tip {
          color: white;
          padding: 8px;
          background: #1A202C;
          border-radius: 6px;
          font-size: 14px;
        }
        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tip-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .tip-icon {
          font-size: 20px;
        }
        .tip-content {
          flex: 1;
        }
        .tip-content strong {
          display: block;
          color: #4299E1;
          margin-bottom: 4px;
        }
        .tip-content p {
          margin: 0 0 4px 0;
          color: white;
        }
        .tip-content small {
          color: #A0AEC0;
        }
        .dashboard-footer {
          display: flex;
          justify-content: center;
          padding-top: 20px;
          border-top: 1px solid #2D3748;
        }
        .share-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .share-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(11,79,108,0.3);
        }
        @media (max-width: 768px) {
          .score-main-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .score-circle-container {
            margin: 0 auto;
          }
          .comparison-stats {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default MumuScoreDashboard;