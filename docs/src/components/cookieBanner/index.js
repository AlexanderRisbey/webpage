// import React, { useState, useEffect } from "react";
// import { setAnalyticsConsent } from "../../firebase";

// const CookieBanner = () => {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     const consentStatus = localStorage.getItem("analyticsConsent");
//     console.log("checked status in banner file:",consentStatus)
//     setShowBanner(consentStatus === null); // Show banner if consent not given
//   }, []);

//   const handleAllow = () => {
//     setAnalyticsConsent(true); // Set consent to true
//     setShowBanner(false); // Hide banner after consent given
//   };

//   const handleDeny = () => {
//     setAnalyticsConsent(false); // Set consent to false
//     setShowBanner(false); // Hide banner after consent given
//   };

//   return (
//     showBanner && (
//       <div className="cookie-banner">
//         <p>We use cookies to improve your experience. Do you consent to analytics tracking?</p>
//         <button onClick={handleAllow}>Allow</button>
//         <button onClick={handleDeny}>Deny</button>
//       </div>
//     )
//   );
// };

// export default CookieBanner;


import React, { useState, useEffect } from 'react';
import { checkConsentStatus, setAnalyticsConsent } from '../../firebase';
import { Link } from 'react-router-dom';

const ConsentBanner = () => {
  const [consent, setConsent] = useState(() => localStorage.getItem("analyticsConsent") === "true");
  const [showBanner, setShowBanner] = useState(() => localStorage.getItem("analyticsConsent") === null);

  useEffect(() => {
    checkConsentStatus();
  }, []);

  const handleConsentChange = (status) => {
    setConsent(status);
    setAnalyticsConsent(status);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="consent-banner">
      <p>We use cookies and similar technologies to collect data for analytics purposes to improve your experience. By clicking "Accept", you consent to the use of analytics tracking. For more details, read our <Link to="/legal/privacy-policy" target="_blank">Privacy Policy</Link>.</p>
      <button onClick={() => handleConsentChange(true)}>Accept</button>
      <button onClick={() => handleConsentChange(false)}>Decline</button>
    </div>
  );
};

export default ConsentBanner;