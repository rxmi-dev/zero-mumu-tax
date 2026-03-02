// frontend/src/components/Reports/ReportGenerator.jsx
import React, { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';

const ReportGenerator = ({ calculation, type, user, onClose, creditBalance, setCreditBalance }) => {
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');

  // Safe number formatter (no NaN)
  const safeFormatCurrency = (value) => {
    if (value === null || value === undefined || value === '') return '₦0';
    
    let num;
    if (typeof value === 'string') {
      const cleaned = value.replace(/,/g, '').trim();
      num = parseFloat(cleaned);
    } else if (typeof value === 'number') {
      num = value;
    } else {
      return '₦0';
    }
    
    if (isNaN(num) || !isFinite(num)) return '₦0';
    
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
    console.log('Generating report with:', { calculation, user, type });
    
    // Validate we have data
    if (!calculation || !calculation.input || !calculation.result) {
      throw new Error('Missing calculation data');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    setCreditBalance(prev => prev - 3);
    const reportHTML = generateNRSFormattedReport();
    
    const blob = new Blob([reportHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    
  } catch (err) {
    console.error('Report generation failed:', err);
    setError('Failed to generate report. Please try again. ' + err.message);
  } finally {
    setGenerating(false);
  }
};

  const generateNRSFormattedReport = () => {
    const date = new Date().toLocaleDateString('en-NG', {
      day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const input = calculation.input || {};
    const result = calculation.result || {};
    const taxYear = new Date().getFullYear() - 1;

    // Safely parse all values
    const employmentSalary = safeFormatCurrency(input.employment_salary);
    const businessProfit = safeFormatCurrency(input.business_profit);
    const pensionIncome = safeFormatCurrency(input.pension_income);
    const pensionRSA = safeFormatCurrency(input.pension_rsa);
    const nhis = safeFormatCurrency(input.nhis);
    const nhf = safeFormatCurrency(input.nhf);
    const rentPaid = safeFormatCurrency(input.rent_paid);
    const payeDeducted = safeFormatCurrency(input.paye_deducted);
    const whtCredits = safeFormatCurrency(input.wht_credits);

    const totalIncome = safeFormatCurrency(result.total_income);
    const totalDeductions = safeFormatCurrency(result.total_deductions);
    const chargeableIncome = safeFormatCurrency(result.chargeable_income);
    const taxPayable = safeFormatCurrency(result.tax_payable);
    const refundAmount = safeFormatCurrency(result.refund_amount);
    const additionalTax = safeFormatCurrency(result.additional_tax);
    const effectiveRate = result.effective_rate || 0;

    // Tax band breakdown
    const getTaxBreakdown = () => {
      const income = result?.chargeable_income || 0;
      let breakdown = '';
      let remaining = income;
      
      const bands = [
        { limit: 800000, rate: 0, label: 'First ₦800,000' },
        { limit: 3000000, rate: 0.15, label: 'Next ₦2,200,000' },
        { limit: 12000000, rate: 0.18, label: 'Next ₦9,000,000' },
        { limit: 25000000, rate: 0.21, label: 'Next ₦13,000,000' },
        { limit: 50000000, rate: 0.23, label: 'Next ₦25,000,000' },
        { limit: Infinity, rate: 0.25, label: 'Above ₦50,000,000' }
      ];
      
      for (let i = 0; i < bands.length; i++) {
        if (remaining <= 0) break;
        const bandLimit = i === 0 ? bands[i].limit : bands[i].limit - bands[i-1].limit;
        const taxable = Math.min(remaining, bandLimit);
        const tax = taxable * bands[i].rate;
        breakdown += `<tr><td>${bands[i].label}</td><td>${(bands[i].rate * 100).toFixed(0)}%</td><td style="text-align: right;">${safeFormatCurrency(tax)}</td></tr>`;
        remaining -= taxable;
      }
      return breakdown;
    };

    const taxBreakdown = getTaxBreakdown();

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zero Mumu Tax - Personal Income Tax Report & Forms</title>
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
        
        .result-box {
            margin: 20px 0;
            padding: 20px;
            border: 2px solid;
            text-align: center;
        }
        
        .result-box.refund { border-color: #2E7D32; background: #e8f5e9; }
        .result-box.additional { border-color: #B22222; background: #ffebee; }
        .result-box.balanced { border-color: #0B4F6C; background: #e3f2fd; }
        
        .result-amount {
            font-size: 36px;
            font-weight: bold;
            margin: 10px 0;
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
                <p>Personal Income Tax Report & Filing Forms</p>
                <span class="ref-badge">NTA 2025 Compliant • Ref: ZMT-PIT-${Date.now().toString().slice(-8)}</span>
            </div>
        </div>

        <!-- Taxpayer Information -->
        <div class="section">
            <h2>👤 Taxpayer Information</h2>
            <div class="info-grid">
                <div class="info-item"><span class="info-label">Full Name:</span> <span class="info-value">${user?.full_name || '____________________'}</span></div>
                <div class="info-item"><span class="info-label">Email:</span> <span class="info-value">${user?.email || '____________________'}</span></div>
                <div class="info-item"><span class="info-label">Phone:</span> <span class="info-value">${user?.phone || '____________________'}</span></div>
                <div class="info-item"><span class="info-label">Tax Year:</span> <span class="info-value">${taxYear}</span></div>
                <div class="info-item"><span class="info-label">Assessment Date:</span> <span class="info-value">${date}</span></div>
                <div class="info-item"><span class="info-label">TIN:</span> <span class="info-value">____________________</span></div>
            </div>
        </div>

        <!-- Income Summary -->
        <div class="section">
            <h2>💰 Income Summary</h2>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                <tr><td>Employment Salary</td><td>${employmentSalary}</td></tr>
                <tr><td>Business Profit</td><td>${businessProfit}</td></tr>
                <tr><td>Pension Income</td><td>${pensionIncome}</td></tr>
                <tr class="total-row"><td><strong>Gross Income</strong></td><td><strong>${totalIncome}</strong></td></tr>
            </table>
        </div>

        <!-- Deductions -->
        <div class="section">
            <h2>🧾 Allowable Deductions</h2>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                <tr><td>RSA Pension Contribution</td><td>${pensionRSA}</td></tr>
                <tr><td>NHIS Contribution</td><td>${nhis}</td></tr>
                <tr><td>NHF Contribution</td><td>${nhf}</td></tr>
                <tr><td>Rent Relief (20% of rent, max ₦500,000)</td><td>${safeFormatCurrency(Math.min((parseFloat(input.rent_paid?.replace(/,/g,'') || 0) * 0.2), 500000))}</td></tr>
                <tr class="total-row"><td><strong>Total Deductions</strong></td><td><strong>${totalDeductions}</strong></td></tr>
            </table>
        </div>

        <!-- Tax Computation -->
        <div class="section">
            <h2>📊 Tax Computation</h2>
            <div class="info-item" style="margin-bottom: 15px;">
                <span class="info-label">Chargeable Income:</span>
                <span class="info-value"><strong>${chargeableIncome}</strong></span>
            </div>
            
            <table>
                <thead>
                    <tr><th>Income Band</th><th>Rate</th><th>Tax Amount</th></tr>
                </thead>
                <tbody>
                    ${taxBreakdown}
                </tbody>
                <tfoot>
                    <tr class="total-row"><td colspan="2"><strong>Total Tax Payable</strong></td><td><strong>${taxPayable}</strong></td></tr>
                </tfoot>
            </table>

            <div class="result-box ${result.result_type}">
                <h3>${result.result_type === 'refund' ? 'REFUND DUE' : result.result_type === 'additional' ? 'TAX PAYABLE' : 'TAX BALANCED'}</h3>
                ${result.result_type !== 'balanced' ? 
                    `<div class="result-amount">${safeFormatCurrency(result.result_type === 'refund' ? result.refund_amount : result.additional_tax)}</div>` : ''}
                <p>Effective Tax Rate: ${effectiveRate}%</p>
            </div>
        </div>

        <!-- NRS Filing Form -->
        <div class="form-section">
            <h2>NIGERIA REVENUE SERVICE - PERSONAL INCOME TAX FORM</h2>
            
            <h3>Section A: Personal Details</h3>
            <div class="form-field"><span class="form-label">Full Name:</span> <span class="form-value">${user?.full_name || '____________________'}</span></div>
            <div class="form-field"><span class="form-label">Email:</span> <span class="form-value">${user?.email || '____________________'}</span></div>
            <div class="form-field"><span class="form-label">Phone:</span> <span class="form-value">${user?.phone || '____________________'}</span></div>
            <div class="form-field"><span class="form-label">Date of Birth:</span> <span class="form-value">${user?.date_of_birth || '____________________'}</span></div>
            <div class="form-field"><span class="form-label">Occupation:</span> <span class="form-value">${user?.occupation || '____________________'}</span></div>
            <div class="form-field"><span class="form-label">State of Residence:</span> <span class="form-value">${user?.state_of_residence || '____________________'}</span></div>
            <div class="form-field"><span class="form-label">TIN:</span> <span class="form-value">____________________</span></div>

            <h3>Section B: Income Declaration</h3>
            <div class="form-field"><span class="form-label">Employment Income:</span> <span class="form-value">${employmentSalary}</span></div>
            <div class="form-field"><span class="form-label">Business Income:</span> <span class="form-value">${businessProfit}</span></div>
            <div class="form-field"><span class="form-label">Pension Income:</span> <span class="form-value">${pensionIncome}</span></div>
            <div class="form-field"><span class="form-label">Other Income:</span> <span class="form-value">₦0</span></div>

            <h3>Section C: Deductions Claimed</h3>
            <div class="form-field"><span class="form-label">RSA Pension:</span> <span class="form-value">${pensionRSA}</span></div>
            <div class="form-field"><span class="form-label">NHIS:</span> <span class="form-value">${nhis}</span></div>
            <div class="form-field"><span class="form-label">NHF:</span> <span class="form-value">${nhf}</span></div>
            <div class="form-field"><span class="form-label">Rent Paid:</span> <span class="form-value">${rentPaid}</span></div>
            <div class="form-field"><span class="form-label">Life Insurance:</span> <span class="form-value">₦0</span></div>
            <div class="form-field"><span class="form-label">Mortgage Interest:</span> <span class="form-value">₦0</span></div>

            <h3>Section D: Tax Computation</h3>
            <div class="form-field"><span class="form-label">Gross Income:</span> <span class="form-value">${totalIncome}</span></div>
            <div class="form-field"><span class="form-label">Total Deductions:</span> <span class="form-value">${totalDeductions}</span></div>
            <div class="form-field"><span class="form-label">Chargeable Income:</span> <span class="form-value">${chargeableIncome}</span></div>
            <div class="form-field"><span class="form-label">Tax Payable:</span> <span class="form-value">${taxPayable}</span></div>
            <div class="form-field"><span class="form-label">PAYE Already Deducted:</span> <span class="form-value">${payeDeducted}</span></div>
            <div class="form-field"><span class="form-label">WHT Credits:</span> <span class="form-value">${whtCredits}</span></div>
            <div class="form-field" style="font-weight: bold;"><span class="form-label">BALANCE DUE / (REFUND):</span> <span class="form-value">${result.result_type === 'refund' ? `(REFUND) ${refundAmount}` : result.result_type === 'additional' ? additionalTax : '₦0'}</span></div>

            <div class="declaration">
                <h3>Declaration</h3>
                <p>I declare that the information provided in this return is true, complete, and correct to the best of my knowledge and belief.</p>
                
                <div class="signature-line">
                    <div class="signature-box">
                        <p>Taxpayer's Signature</p>
                        <div></div>
                    </div>
                    <div class="signature-box">
                        <p>Date</p>
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
            <p>Generated by Zero Mumu Tax App • 3 credits used • Ref: ZMT-PIT-${Date.now().toString().slice(-8)}</p>
            <p>© 2026 Zero Mumu Tax. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  };

  return (
    <div className="modal-overlay">
      <div className="report-modal">
        <h2>Personal Income Tax Report</h2>
        <p className="subtitle">Generate your complete tax package (3 credits)</p>
        
        {error && <div className="error-message">⚠️ {error}</div>}

        <div className="preview-card">
          <h3>Your Report Includes:</h3>
          <ul className="feature-list">
            <li>✅ Detailed income and deductions breakdown</li>
            <li>✅ NTA 2025 tax band calculation</li>
            <li>✅ NRS-compatible filing form</li>
            <li>✅ Taxpayer declaration section</li>
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

export default ReportGenerator;