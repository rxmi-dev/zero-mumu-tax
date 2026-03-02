// frontend/src/components/RouteHandler.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteHandler = ({ setActiveTab, setRestoreCalculation }) => {
  const location = useLocation();

  useEffect(() => {
    // Only set tab from URL on initial page load or refresh
    // Don't override when user clicks tabs
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    
    // Check if this is the first load (no active tab in state yet)
    const hasActiveTab = localStorage.getItem('activeTab');
    
    if (tab && !hasActiveTab) {
      // Only set from URL on first load
      if (['pit', 'cit', 'vat', 'wht', 'rent', 'guidance', 'account'].includes(tab)) {
        setActiveTab(tab);
      }
    }

    // Check for restore data in sessionStorage (backup method)
    const restoreData = sessionStorage.getItem('restore_calculation');
    if (restoreData) {
      try {
        const parsed = JSON.parse(restoreData);
        setRestoreCalculation(parsed);
        sessionStorage.removeItem('restore_calculation');
      } catch (e) {
        console.error('Failed to parse restore data', e);
      }
    }
  }, [location.search]); // Only depend on search, not full location

  return null;
};

export default RouteHandler;