// frontend/src/components/NRSGuidance/NRSGuidance.jsx
import React, { useState } from 'react';

const NRSGuidance = () => {
  const [activeTab, setActiveTab] = useState('refund');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabs = [
    { id: 'refund', label: 'Refund Process', icon: '💰' },
    { id: 'deadlines', label: 'Deadlines', icon: '📅' },
    { id: 'documents', label: 'Documents', icon: '📎' },
    { id: 'penalties', label: 'Penalties', icon: '⚖️' },
    { id: 'contacts', label: 'Contacts', icon: '📞' },
    { id: 'faq', label: 'FAQ', icon: '❓' }
  ];

  const refundSteps = [
    { 
      step: 1, 
      title: 'File Your Return', 
      description: 'Complete your annual tax return showing the overpayment',
      details: 'Submit through NRS e-filing portal. Ensure all income and deductions are accurate.'
    },
    { 
      step: 2, 
      title: 'Attach Evidence', 
      description: 'Upload WHT certificates and proof of deductions',
      details: 'Documents must be clear PDFs. Include: WHT certificates, rent receipts, pension statements.'
    },
    { 
      step: 3, 
      title: 'Submit Application', 
      description: 'File Form A through NRS e-filing portal',
      details: 'Complete refund request form and attach all documents.'
    },
    { 
      step: 4, 
      title: 'Follow Up', 
      description: 'Contact Refund Desk if no response in 90 days',
      details: 'Call 0700-REFUND-NRS or email refunds@nrs.gov.ng with your reference number.'
    },
    { 
      step: 5, 
      title: 'Receive Payment', 
      description: 'Refund typically processed within 180 days',
      details: 'Funds credited to your registered bank account.'
    }
  ];

  const deadlines = [
    { 
      item: 'Personal Income Tax – Annual Returns', 
      deadline: 'March 31st',
      penalty: '₦25,000 – ₦50,000',
      note: 'For employed & self-employed individuals'
    },
    { 
      item: 'PAYE Remittance', 
      deadline: '10th of following month',
      penalty: '10% + interest at CBN rate',
      note: 'Employers must remit monthly'
    },
    { 
      item: 'VAT – Monthly Returns', 
      deadline: '21st of following month',
      penalty: '₦50,000 + 5% per month',
      note: 'For businesses registered for VAT'
    },
    { 
      item: 'Companies Income Tax – Annual', 
      deadline: '6 months after year-end',
      penalty: '₦100,000 + 10% of tax due',
      note: 'For all registered companies'
    }
  ];

  const documents = [
    { name: 'WHT Credit Notes/Certificates', required: true, icon: '📄' },
    { name: 'PAYE Deduction Schedules', required: true, icon: '📊' },
    { name: 'Rent Receipts & Tenancy Agreement', required: false, icon: '🏠' },
    { name: 'Pension Contribution Statements', required: true, icon: '💰' },
    { name: 'NHIS & NHF Payment Receipts', required: false, icon: '🏥' },
    { name: 'Tax Identification Number (TIN)', required: true, icon: '🆔' },
    { name: 'Valid ID (NIN, Driver\'s License, Passport)', required: true, icon: '🪪' }
  ];

  const penalties = [
    { offense: 'Late Filing (Individual)', penalty: '₦25,000', severity: 'medium' },
    { offense: 'Late Filing (Company)', penalty: '₦50,000', severity: 'high' },
    { offense: 'Late Payment', penalty: '10% + interest', severity: 'critical' },
    { offense: 'Failure to Register', penalty: '₦25,000', severity: 'medium' },
    { offense: 'Failure to Remit WHT', penalty: '200% of amount', severity: 'critical' }
  ];

  const contacts = [
    { type: 'Website', value: 'https://nrs.gov.ng', icon: '🌐' },
    { type: 'General Helpline', value: '0700-CALL-NRS', icon: '📞' },
    { type: 'Business Desk', value: '0700-BIZ-TAX', icon: '💼' },
    { type: 'Refund Desk', value: '0700-REFUND-NRS', icon: '💰' },
    { type: 'Email Support', value: 'support@nrs.gov.ng', icon: '📧' }
  ];

  const faqs = [
    {
      q: 'How long does it take to get a tax refund?',
      a: 'Typically 90–180 days from application date. You can track your refund status on the NRS e‑filing portal using your reference number.'
    },
    {
      q: 'Can I file my taxes without an accountant?',
      a: 'Yes! Individuals can file directly through the NRS e‑filing portal.'
    },
    {
      q: 'What happens if I miss the deadline?',
      a: 'Penalties apply immediately. Late filing: ₦25k–₦50k. Late payment: 10% + interest.'
    },
    {
      q: 'How do I get my Tax Identification Number (TIN)?',
      a: 'Register online at nrs.gov.ng/register. You\'ll receive your TIN via email within 48 hours.'
    }
  ];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return '#B22222';
      case 'high': return '#FF8C00';
      case 'medium': return '#FFD700';
      default: return '#4299E1';
    }
  };

  return (
    <div className="nrs-guidance">
      <div className="guidance-header">
        <h2>NRS Tax Guidance</h2>
        <p className="subtitle">Nigeria Revenue Service • NTA 2025</p>
      </div>

      {/* Tabs */}
      <div className="guidance-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="guidance-content">
        {/* REFUND TAB */}
        {activeTab === 'refund' && (
          <div className="refund-section">
            <h3>How to Claim Your Tax Refund</h3>
            
            <div className="refund-steps">
              {refundSteps.map((step) => (
                <div key={step.step} className="step-card">
                  <div className="step-number">{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <div 
                    className="step-details"
                    onClick={() => setExpandedFaq(expandedFaq === step.step ? null : step.step)}
                  >
                    {expandedFaq === step.step ? '▼ Less info' : '▶ More info'}
                  </div>
                  {expandedFaq === step.step && (
                    <div className="step-expanded">
                      {step.details}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="tip-card">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>Pro Tip</h4>
                <p>File your refund claim as soon as you discover overpayment. Keep all documents for 6 years.</p>
              </div>
            </div>
          </div>
        )}

        {/* DEADLINES TAB */}
        {activeTab === 'deadlines' && (
          <div className="deadlines-section">
            <h3>Filing Deadlines</h3>
            
            <div className="deadlines-grid">
              {deadlines.map((item, index) => (
                <div key={index} className="deadline-card">
                  <h4>{item.item}</h4>
                  <div className="deadline-date">{item.deadline}</div>
                  <div className="deadline-note">{item.note}</div>
                  <div className="deadline-penalty">
                    <strong>Penalty:</strong> {item.penalty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <div className="documents-section">
            <h3>Required Documents</h3>
            <p className="section-hint">Keep these documents ready when filing.</p>
            
            <div className="documents-grid">
              {documents.map((doc, index) => (
                <div key={index} className="document-card">
                  <div className="document-icon">{doc.icon}</div>
                  <div className="document-info">
                    <div className="document-name">{doc.name}</div>
                    {doc.required && <span className="required-badge">Required</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="retention-note">
              <span className="note-icon">⏰</span>
              <div className="note-content">
                <strong>Document Retention Period:</strong> Keep all documents for 6 years from the date of filing.
              </div>
            </div>
          </div>
        )}

        {/* PENALTIES TAB */}
        {activeTab === 'penalties' && (
          <div className="penalties-section">
            <h3>Penalties for Non‑Compliance</h3>
            
            <div className="penalties-list">
              {penalties.map((item, index) => {
                const color = getSeverityColor(item.severity);
                return (
                  <div key={index} className="penalty-item">
                    <div className="penalty-header">
                      <span className="penalty-offense">{item.offense}</span>
                      <span className="severity-badge" style={{ background: `${color}20`, color }}>
                        {item.severity}
                      </span>
                    </div>
                    <div className="penalty-amount">{item.penalty}</div>
                  </div>
                );
              })}
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">✅</div>
              <div className="compliance-content">
                <h4>Stay Compliant</h4>
                <p>Register with NRS, file on time, keep accurate records, and pay taxes when due.</p>
              </div>
            </div>
          </div>
        )}

        {/* CONTACTS TAB */}
        {activeTab === 'contacts' && (
          <div className="contacts-section">
            <h3>Nigeria Revenue Service (NRS) Contacts</h3>
            
            <div className="contacts-grid">
              {contacts.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <div className="contact-type">{contact.type}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ TAB */}
        {activeTab === 'faq' && (
          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                  <div className="faq-question">
                    <span>Q: {faq.q}</span>
                    <span className="faq-expand">{expandedFaq === index ? '−' : '+'}</span>
                  </div>
                  {expandedFaq === index && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .nrs-guidance {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          color: white;
        }
        .guidance-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .guidance-header h2 {
          margin: 0 0 8px 0;
          color: #4299E1;
        }
        .guidance-header .subtitle {
          color: #A0AEC0;
          margin: 0;
        }
        
        .guidance-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
          flex-wrap: wrap;
        }
        .tab-btn {
          flex: 1;
          padding: 12px 8px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-width: 100px;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .tab-icon {
          font-size: 16px;
        }
        .tab-label {
          font-size: 13px;
        }
        
        .guidance-content h3 {
          margin: 0 0 24px 0;
          color: #4299E1;
        }
        
        /* Refund Section */
        .refund-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .step-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          position: relative;
        }
        .step-number {
          width: 28px;
          height: 28px;
          background: #4299E1;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .step-card h4 {
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .step-card p {
          color: #CBD5E0;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .step-details {
          color: #4299E1;
          font-size: 13px;
          cursor: pointer;
        }
        .step-expanded {
          margin-top: 12px;
          padding: 12px;
          background: #1A202C;
          border-radius: 8px;
          color: #CBD5E0;
          font-size: 13px;
        }
        
        /* Deadlines Section */
        .deadlines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        .deadline-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          border-left: 4px solid #4299E1;
        }
        .deadline-card h4 {
          margin: 0 0 12px 0;
          color: #FFD700;
          font-size: 16px;
        }
        .deadline-date {
          font-size: 20px;
          font-weight: 700;
          color: #4299E1;
          margin-bottom: 8px;
        }
        .deadline-note {
          color: #CBD5E0;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .deadline-penalty {
          padding: 8px;
          background: #1A202C;
          border-radius: 6px;
          color: #FBD38D;
          font-size: 13px;
        }
        
        /* Documents Section */
        .documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        }
        .document-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .document-icon {
          font-size: 24px;
        }
        .document-info {
          flex: 1;
        }
        .document-name {
          font-weight: 500;
          margin-bottom: 4px;
        }
        .required-badge {
          background: #4299E1;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 10px;
        }
        .retention-note {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          border-left: 4px solid #48BB78;
        }
        .note-icon {
          font-size: 24px;
        }
        .note-content {
          color: #CBD5E0;
          font-size: 14px;
        }
        
        /* Penalties Section */
        .penalties-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .penalty-item {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .penalty-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .penalty-offense {
          font-weight: 600;
        }
        .severity-badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          text-transform: uppercase;
        }
        .penalty-amount {
          color: #FBD38D;
          font-weight: 600;
        }
        .compliance-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
          border-left: 4px solid #48BB78;
        }
        .compliance-icon {
          font-size: 32px;
        }
        .compliance-content h4 {
          margin: 0 0 4px 0;
          color: #48BB78;
        }
        .compliance-content p {
          margin: 0;
          color: #CBD5E0;
        }
        
        /* Contacts Section */
        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .contact-icon {
          font-size: 24px;
        }
        .contact-details {
          flex: 1;
        }
        .contact-type {
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 2px;
        }
        .contact-value {
          font-weight: 600;
          color: #FFD700;
        }
        
        /* FAQ Section */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
        }
        .faq-expand {
          color: #4299E1;
          font-size: 18px;
        }
        .faq-answer {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #4A5568;
          color: #CBD5E0;
          line-height: 1.6;
        }
        
        .tip-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
          border-left: 4px solid #FFD700;
          margin-top: 24px;
        }
        .tip-icon {
          font-size: 32px;
        }
        .tip-content h4 {
          margin: 0 0 4px 0;
          color: #FFD700;
        }
        .tip-content p {
          margin: 0;
          color: #CBD5E0;
        }
        
        .section-hint {
          color: #A0AEC0;
          margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
          .guidance-tabs {
            flex-direction: column;
          }
          .tab-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default NRSGuidance;