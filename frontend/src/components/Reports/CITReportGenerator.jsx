// frontend/src/components/Reports/CITReportGenerator.jsx
import React, { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';

const CITReportGenerator = ({ calculation, user, onClose, creditBalance, setCreditBalance }) => {
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');

  // ===== SAFE NUMBER FORMATTER (NO NaN EVER!) =====
  const safeFormatCurrency = (value) => {
    // Handle null/undefined
    if (value === null || value === undefined) return '₦0';
    
    // Handle empty string
    if (value === '') return '₦0';
    
    let num;
    
    // If it's a string, clean it
    if (typeof value === 'string') {
      // Remove commas, spaces, and any non-numeric except decimal point and minus sign
      const cleaned = value.replace(/,/g, '').replace(/\s+/g, '').trim();
      
      // If it's empty after cleaning, return ₦0
      if (cleaned === '') return '₦0';
      
      num = parseFloat(cleaned);
    } 
    // If it's already a number
    else if (typeof value === 'number') {
      num = value;
    } 
    // If it's something else
    else {
      return '₦0';
    }
    
    // Final check for NaN or Infinity
    if (isNaN(num) || !isFinite(num)) return '₦0';
    
    // Format with commas
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const generateReport = async () => {
    if (creditBalance < 3) {
      setError('Insufficient credits. You need 3 credits for a comprehensive report.');
      return;
    }

    setGenerating(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCreditBalance(prev => prev - 3);
      const reportHTML = generateHTMLReport();
      const blob = new Blob([reportHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (err) {
      setError('Failed to generate report. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const generateHTMLReport = () => {
    const date = new Date().toLocaleDateString('en-NG', {
      day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const input = calculation.input || {};
    const result = calculation.result || {};
    const taxYear = new Date().getFullYear() - 1;

    // ===== SAFELY PARSE ALL VALUES =====
    // Basic info
    const businessName = input.business_name || 'TEST COMPANY';
    const businessType = input.business_type || 'manufacturing';
    
    // Financials
    const turnover = safeFormatCurrency(input.turnover);
    const totalAssets = safeFormatCurrency(input.total_assets);
    
    // Trading profit
    let tradingProfit = '₦0';
    if (input.has_trading_profit === 'yes' && input.trading_profit) {
      tradingProfit = safeFormatCurrency(input.trading_profit);
    }
    
    // Operating expenses
    let operatingExpenses = '₦0';
    if (input.has_operating_expenses === 'yes' && input.operating_expenses) {
      operatingExpenses = safeFormatCurrency(input.operating_expenses);
    }
    
    // Rental income
    let rentalIncome = '₦0';
    if (input.has_rental_income === 'yes' && input.rental_income) {
      rentalIncome = safeFormatCurrency(input.rental_income);
    }
    
    // Capital allowances
    let industrialBuilding = '₦0';
    let industrialBuildingAllowance = '₦0';
    if (input.has_industrial_building === 'yes' && input.industrial_building) {
      const cost = parseFloat(input.industrial_building.replace(/,/g, '')) || 0;
      industrialBuilding = safeFormatCurrency(cost);
      industrialBuildingAllowance = safeFormatCurrency(cost * 0.1);
    }
    
    let plantMachinery = '₦0';
    let plantMachineryAllowance = '₦0';
    if (input.has_plant_machinery === 'yes' && input.plant_machinery) {
      const cost = parseFloat(input.plant_machinery.replace(/,/g, '')) || 0;
      plantMachinery = safeFormatCurrency(cost);
      plantMachineryAllowance = safeFormatCurrency(cost * 0.2);
    }
    
    let furnitureFittings = '₦0';
    let furnitureFittingsAllowance = '₦0';
    if (input.has_furniture_fittings === 'yes' && input.furniture_fittings) {
      const cost = parseFloat(input.furniture_fittings.replace(/,/g, '')) || 0;
      furnitureFittings = safeFormatCurrency(cost);
      furnitureFittingsAllowance = safeFormatCurrency(cost * 0.2);
    }
    
    let motorVehicle = '₦0';
    let motorVehicleAllowance = '₦0';
    if (input.has_motor_vehicle === 'yes' && input.motor_vehicle) {
      const cost = parseFloat(input.motor_vehicle.replace(/,/g, '')) || 0;
      motorVehicle = safeFormatCurrency(cost);
      motorVehicleAllowance = safeFormatCurrency(cost * 0.2);
    }
    
    // Losses and credits
    let lossesBroughtForward = '₦0';
    if (input.has_losses_brought_forward === 'yes' && input.losses_brought_forward) {
      lossesBroughtForward = safeFormatCurrency(input.losses_brought_forward);
    }
    
    let whtCredits = '₦0';
    if (input.has_wht_credits === 'yes' && input.wht_credits) {
      whtCredits = safeFormatCurrency(input.wht_credits);
    }
    
    // Results from calculation
    const pbt = safeFormatCurrency(result.pbt);
    const assessableProfit = safeFormatCurrency(result.assessable_profit);
    const cit = safeFormatCurrency(result.cit);
    const levy = safeFormatCurrency(result.levy);
    const totalTax = safeFormatCurrency(result.total_tax_payable);
    const capitalAllowances = safeFormatCurrency(result.capital_allowances);
    
    const citRate = result.cit_rate || 0;
    const levyRate = result.levy_rate || 0;
    
    const companyTier = result.company_tier === 'small' ? 'Small Company (0% CIT)' : 'Large Company (30% CIT + 4% Levy)';
    const isSmall = result.company_tier === 'small';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zero Mumu Tax - CIT Report & Filing Forms</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Times New Roman', Times, serif;
            background: #ffffff;
            color: #000000;
            line-height: 1.5;
            padding: 40px;
        }
        
        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #008751;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            z-index: 1000;
        }
        
        .container {
            max-width: 1100px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        /* ZMT Header */
        .zmt-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #008751;
        }
        
        .zmt-logo {
            width: 80px;
            height: 80px;
        }
        
        .zmt-title h1 {
            color: #008751;
            font-size: 28px;
            margin: 0 0 5px 0;
        }
        
        .zmt-title p {
            color: #666;
            margin: 0;
        }
        
        .ref-badge {
            display: inline-block;
            background: #f0f0f0;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            color: #008751;
            margin-top: 5px;
        }
        
        /* Sections */
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        
        .section h2 {
            color: #008751;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section h3 {
            color: #0B4F6C;
            margin: 20px 0 10px 0;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed #ccc;
        }
        
        .info-label {
            font-weight: 600;
            color: #555;
        }
        
        .info-value {
            font-weight: 500;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        
        th {
            background: #e0e0e0;
            padding: 10px;
            text-align: left;
            border: 1px solid #ccc;
        }
        
        td {
            padding: 8px 10px;
            border: 1px solid #ccc;
        }
        
        .total-row {
            font-weight: bold;
            background: #f0f0f0;
        }
        
        .company-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        .badge-small {
            background: #e8f5e9;
            color: #2E7D32;
        }
        
        .badge-large {
            background: #ffebee;
            color: #B22222;
        }
        
        /* Form Section */
        .form-section {
            margin-top: 40px;
            padding: 30px;
            border: 2px solid #008751;
            border-radius: 8px;
            background: #fff;
        }
        
        .form-section h2 {
            color: #008751;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .form-field {
            display: flex;
            margin-bottom: 15px;
            border-bottom: 1px dashed #999;
            padding-bottom: 5px;
        }
        
        .form-label {
            width: 200px;
            font-weight: 600;
        }
        
        .form-value {
            flex: 1;
        }
        
        .declaration {
            margin-top: 30px;
            padding: 20px;
            border: 1px solid #000;
        }
        
        .signature-line {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
        }
        
        .signature-box {
            width: 200px;
        }
        
        .signature-box div {
            border-bottom: 1px solid #000;
            margin-top: 5px;
            height: 20px;
        }
        
        .official-use {
            margin-top: 30px;
            padding: 15px;
            background: #f0f0f0;
            border: 1px dashed #999;
        }
        
        .disclaimer {
            background: #fff9e6;
            border: 1px solid #FFD700;
            border-radius: 8px;
            padding: 16px;
            margin: 30px 0;
            font-size: 13px;
            color: #666;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
        
        @media print {
            .print-button { display: none; }
            body { padding: 0; }
            .container { box-shadow: none; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">🖨️ Print Report & Forms</button>

    <div class="container">
        <!-- ZMT Header -->
        <div class="zmt-header">
            <div class="zmt-logo">
                <svg width="80" height="80" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#008751" stroke-width="15"/>
                    <circle cx="100" cy="100" r="70" fill="#FFD700"/>
                    <text x="100" y="135" text-anchor="middle" fill="#4D3D1A" font-size="110" font-weight="900">₦</text>
                    <rect x="65" y="145" width="70" height="25" rx="5" fill="#006747"/>
                    <text x="100" y="163" text-anchor="middle" fill="white" font-size="18" font-weight="bold">ZMT</text>
                </svg>
            </div>
            <div class="zmt-title">
                <h1>ZERO MUMU TAX</h1>
                <p>Companies Income Tax Report & Filing Forms</p>
                <span class="ref-badge">NTA 2025 Compliant • Ref: ZMT-CIT-${Date.now().toString().slice(-8)}</span>
            </div>
        </div>

        <!-- Company Information -->
        <div class="section">
            <h2>🏢 Company Information</h2>
            <div class="info-grid">
                <div class="info-item"><span class="info-label">Business Name:</span> <span class="info-value">${businessName}</span></div>
                <div class="info-item"><span class="info-label">Business Type:</span> <span class="info-value">${businessType}</span></div>
                <div class="info-item"><span class="info-label">Annual Turnover:</span> <span class="info-value">${turnover}</span></div>
                <div class="info-item"><span class="info-label">Total Assets:</span> <span class="info-value">${totalAssets}</span></div>
                <div class="info-item"><span class="info-label">Years in Business:</span> <span class="info-value">${input.years_in_business || '1'} years</span></div>
                <div class="info-item"><span class="info-label">Classification:</span> <span class="info-value"><strong>${companyTier}</strong></span></div>
            </div>
        </div>

        <!-- Income & Expenses -->
        <div class="section">
            <h2>💰 Income & Expenses</h2>
            
            <h3>Income</h3>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                ${input.has_trading_profit === 'yes' ? `<tr><td>Trading Profit</td><td>${tradingProfit}</td></tr>` : ''}
                ${input.has_rental_income === 'yes' ? `<tr><td>Rental Income</td><td>${rentalIncome}</td></tr>` : ''}
            </table>

            <h3>Expenses</h3>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                ${input.has_operating_expenses === 'yes' ? `<tr><td>Operating Expenses</td><td>${operatingExpenses}</td></tr>` : ''}
            </table>

            <div class="total-row" style="padding: 10px; margin-top: 10px; text-align: right;">
                <strong>Profit Before Tax: ${pbt}</strong>
            </div>
        </div>

        <!-- Capital Allowances -->
        <div class="section">
            <h2>🏗️ Capital Allowances (NTA 2025)</h2>
            <table>
                <tr><th>Asset Type</th><th>Cost (₦)</th><th>Rate</th><th>Allowance (₦)</th></tr>
                ${input.has_industrial_building === 'yes' ? `<tr><td>Industrial Building</td><td>${industrialBuilding}</td><td>10%</td><td>${industrialBuildingAllowance}</td></tr>` : ''}
                ${input.has_plant_machinery === 'yes' ? `<tr><td>Plant & Machinery</td><td>${plantMachinery}</td><td>20%</td><td>${plantMachineryAllowance}</td></tr>` : ''}
                ${input.has_furniture_fittings === 'yes' ? `<tr><td>Furniture & Fittings</td><td>${furnitureFittings}</td><td>20%</td><td>${furnitureFittingsAllowance}</td></tr>` : ''}
                ${input.has_motor_vehicle === 'yes' ? `<tr><td>Motor Vehicle</td><td>${motorVehicle}</td><td>20%</td><td>${motorVehicleAllowance}</td></tr>` : ''}
                <tr class="total-row"><td colspan="3"><strong>Total Capital Allowances</strong></td><td><strong>${capitalAllowances}</strong></td></tr>
            </table>
        </div>

        <!-- Tax Calculation -->
        <div class="section">
            <h2>📊 Tax Calculation</h2>
            <table>
                <tr><td>Profit Before Tax</td><td>${pbt}</td></tr>
                <tr><td>Less: Capital Allowances</td><td>${capitalAllowances}</td></tr>
                ${lossesBroughtForward !== '₦0' ? `<tr><td>Less: Losses Brought Forward</td><td>${lossesBroughtForward}</td></tr>` : ''}
                <tr class="total-row"><td><strong>Assessable Profit</strong></td><td><strong>${assessableProfit}</strong></td></tr>
                <tr><td>CIT (${citRate}%)</td><td>${cit}</td></tr>
                <tr><td>Development Levy (${levyRate}%)</td><td>${levy}</td></tr>
                ${whtCredits !== '₦0' ? `<tr><td>Less: WHT Credits</td><td>${whtCredits}</td></tr>` : ''}
                <tr class="total-row"><td><strong>TOTAL TAX PAYABLE</strong></td><td><strong>${totalTax}</strong></td></tr>
            </table>
        </div>

        <!-- NRS Filing Form -->
        <div class="form-section">
            <h2>NIGERIA REVENUE SERVICE - COMPANY INCOME TAX FORM</h2>
            
            <h3>Section A: Company Details</h3>
            <div class="form-field"><span class="form-label">Company Name:</span> <span class="form-value">${businessName}</span></div>
            <div class="form-field"><span class="form-label">RC Number:</span> <span class="form-value">____________________</span></div>
            <div class="form-field"><span class="form-label">TIN:</span> <span class="form-value">____________________</span></div>
            <div class="form-field"><span class="form-label">Tax Year:</span> <span class="form-value">${taxYear}</span></div>
            <div class="form-field"><span class="form-label">Business Type:</span> <span class="form-value">${businessType}</span></div>

            <h3>Section B: Income Declaration</h3>
            <div class="form-field"><span class="form-label">Turnover/Sales:</span> <span class="form-value">${turnover}</span></div>
            <div class="form-field"><span class="form-label">Trading Profit:</span> <span class="form-value">${tradingProfit}</span></div>
            ${rentalIncome !== '₦0' ? `<div class="form-field"><span class="form-label">Rental Income:</span> <span class="form-value">${rentalIncome}</span></div>` : ''}

            <h3>Section C: Deductions & Allowances</h3>
            <div class="form-field"><span class="form-label">Operating Expenses:</span> <span class="form-value">${operatingExpenses}</span></div>
            <div class="form-field"><span class="form-label">Capital Allowances:</span> <span class="form-value">${capitalAllowances}</span></div>
            ${lossesBroughtForward !== '₦0' ? `<div class="form-field"><span class="form-label">Losses Brought Forward:</span> <span class="form-value">${lossesBroughtForward}</span></div>` : ''}

            <h3>Section D: Tax Computation</h3>
            <div class="form-field"><span class="form-label">Assessable Profit:</span> <span class="form-value">${assessableProfit}</span></div>
            <div class="form-field"><span class="form-label">CIT Payable:</span> <span class="form-value">${cit}</span></div>
            <div class="form-field"><span class="form-label">Development Levy:</span> <span class="form-value">${levy}</span></div>
            ${whtCredits !== '₦0' ? `<div class="form-field"><span class="form-label">WHT Credits:</span> <span class="form-value">${whtCredits}</span></div>` : ''}
            <div class="form-field" style="font-weight: bold;"><span class="form-label">TOTAL TAX DUE:</span> <span class="form-value">${totalTax}</span></div>

            <div class="declaration">
                <h3>Declaration</h3>
                <p>I declare that the information provided in this return is true, complete, and correct to the best of my knowledge and belief.</p>
                
                <div class="signature-line">
                    <div class="signature-box">
                        <p>Director's Signature</p>
                        <div></div>
                    </div>
                    <div class="signature-box">
                        <p>Date</p>
                        <div></div>
                    </div>
                </div>
                <div class="signature-line">
                    <div class="signature-box">
                        <p>Company Seal</p>
                        <div></div>
                    </div>
                    <div class="signature-box">
                        <p>For Official Use</p>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="official-use">
                <h4>For Official Use Only - NRS</h4>
                <div style="display: flex; gap: 40px;">
                    <div style="flex: 1;">
                        <p>Received by: ____________________</p>
                        <p>Date: ____________________</p>
                    </div>
                    <div style="flex: 1;">
                        <p>Payment Reference: ____________________</p>
                        <p>Verification Code: ____________________</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="disclaimer">
            <strong>📌 Important Notice:</strong> This document is a TAX PREPARATION TOOL generated by Zero Mumu Tax App based on the information you provided and calculations per the Nigeria Tax Act 2025 (NTA 2025). It is designed to help you prepare your tax return. This is NOT an official NRS form and cannot be submitted directly. Please transfer this information to the official NRS forms or consult a tax professional for official filing.
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Generated by Zero Mumu Tax App • 3 credits used • Ref: ZMT-CIT-${Date.now().toString().slice(-8)}</p>
            <p>© 2026 Zero Mumu Tax. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  };

  return (
    <div className="modal-overlay">
      <div className="report-modal">
        <h2>Companies Income Tax Report</h2>
        <p className="subtitle">Generate your complete tax package (3 credits)</p>
        
        {error && <div className="error-message">⚠️ {error}</div>}

        <div className="preview-card">
          <h3>Your Report Includes:</h3>
          <ul className="feature-list">
            <li>✅ Detailed tax computation with all schedules</li>
            <li>✅ Capital allowances breakdown</li>
            <li>✅ NRS-compatible filing form</li>
            <li>✅ Company declaration section</li>
            <li>✅ Print-ready professional format</li>
          </ul>
        </div>

        <div className="credit-info">
          <span>Cost: 3 credits</span>
          <span className={creditBalance < 3 ? 'insufficient' : 'sufficient'}>
            Your balance: {creditBalance} credits
          </span>
        </div>

        <div className="action-buttons">
          <button className="secondary-btn" onClick={onClose}>Cancel</button>
          <button className="primary-btn" onClick={generateReport} disabled={generating || creditBalance < 3}>
            {generating ? 'Generating...' : 'Generate Report & Forms'}
          </button>
        </div>
      </div>

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
        .report-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          color: white;
        }
        h2 { margin: 0 0 4px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }
        .preview-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .preview-card h3 {
          margin: 0 0 12px 0;
          color: #FFD700;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-list li {
          padding: 8px 0;
          border-bottom: 1px solid #4A5568;
        }
        .feature-list li:last-child {
          border-bottom: none;
        }
        .credit-info {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .insufficient { color: #DD6B20; }
        .sufficient { color: #48BB78; }
        .action-buttons {
          display: flex;
          gap: 12px;
        }
        .secondary-btn, .primary-btn {
          flex: 1;
          padding: 14px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .secondary-btn {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }
        .secondary-btn:hover {
          background: #2D3748;
        }
        .primary-btn {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          color: white;
        }
        .primary-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(11,79,108,0.3);
        }
        .primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default CITReportGenerator;