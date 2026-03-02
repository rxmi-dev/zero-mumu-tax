// ========================================
// COMMA FORMATTING UTILITIES - WITH ALL EXPORTS
// ========================================

/**
 * Format number with commas as you type
 * Example: 1000000 → 1,000,000
 */
export const formatWithCommas = (value) => {
  if (!value) return '';
  
  // Remove all non-digit characters except decimal point
  let cleanValue = value.replace(/[^\d.]/g, '');
  
  // Prevent multiple decimal points
  const parts = cleanValue.split('.');
  if (parts.length > 2) {
    cleanValue = parts[0] + '.' + parts.slice(1).join('');
  }
  
  if (parts[0]) {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  return parts.join('.');
};

/**
 * Remove commas and convert to number
 */
export const parseFormattedNumber = (value) => {
  if (!value) return 0;
  const cleanValue = value.replace(/,/g, '');
  const num = parseFloat(cleanValue);
  return isNaN(num) ? 0 : num;
};

/**
 * Handle input change with comma formatting
 */
export const handleCommaInput = (e, setFormData) => {
  const { name, value } = e.target;
  const formattedValue = formatWithCommas(value);
  
  setFormData(prev => ({
    ...prev,
    [name]: formattedValue
  }));
};

/**
 * Format currency for display - WITH ₦ SYMBOL AND COMMAS
 * THIS WAS MISSING - NOW EXPORTED
 */
export const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return '₦0';
  return '₦' + Number(amount).toLocaleString('en-NG');
};