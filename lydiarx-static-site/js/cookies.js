import { analyticsInstance } from './firebase.js';

export const initCookieBanner = () => {
  const consentBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const declineButton = document.getElementById('decline-cookies');

  if (!consentBanner || !acceptButton || !declineButton) {
    return;
  }

  const applyConsent = (status) => {
    localStorage.setItem('analyticsConsent', status ? 'true' : 'false');
    if (analyticsInstance && typeof analyticsInstance.setAnalyticsCollectionEnabled === 'function') {
      analyticsInstance.setAnalyticsCollectionEnabled(status);
    }
  };

  const storedConsent = localStorage.getItem('analyticsConsent');

  if (storedConsent === null) {
    consentBanner.style.display = 'block';
  } else {
    applyConsent(storedConsent === 'true');
    consentBanner.style.display = 'none';
  }

  acceptButton.addEventListener('click', () => {
    applyConsent(true);
    consentBanner.style.display = 'none';
  });

  declineButton.addEventListener('click', () => {
    applyConsent(false);
    consentBanner.style.display = 'none';
  });
};
