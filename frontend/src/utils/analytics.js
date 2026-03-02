// frontend/src/utils/analytics.js
import api from './api';

export const trackEvent = async (eventType, data = {}) => {
  try {
    await api.post('/api/analytics/track', {
      event_type: eventType,
      ...data,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    // Silently fail - analytics shouldn't break the app
    console.debug('Analytics error:', err);
  }
};

export const trackFeatureUsage = async (feature, credits = 0) => {
  try {
    await api.post('/api/analytics/feature', {
      feature_name: feature,
      credits_spent: credits
    });
  } catch (err) {
    console.debug('Analytics error:', err);
  }
};