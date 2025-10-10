// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setAnalyticsCollectionEnabled, setConsent } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkUZB22-zcdI9K0j-ZjQastRg43deECZ4",
  authDomain: "lydiarx-001.firebaseapp.com",
  projectId: "lydiarx-001",
  storageBucket: "lydiarx-001.appspot.com",
  messagingSenderId: "469681685711",
  appId: "1:469681685711:web:960dec6e2dc931321623ba",
  measurementId: "G-45BVMELSGH"
};
setConsent()
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app)
const analytics = getAnalytics(app);

// const consentStatus = localStorage.getItem("analyticsConsent");
// console.log("checked status in firebase file:",consentStatus)
// if (consentStatus === "true") {
//   // Consent is granted
//   analytics.setAnalyticsCollectionEnabled(true);
// } else {
//   // Consent is denied
//   analytics.setAnalyticsCollectionEnabled(false);
// }

// // Function to enable or disable analytics based on consent
// export const setAnalyticsConsent = (consentStatus) => {
//   if (consentStatus) {
//     // Enable analytics if consent is granted
//     analytics.setAnalyticsCollectionEnabled(true);
//   } else {
//     // Disable analytics if consent is refused
//     analytics.setAnalyticsCollectionEnabled(false);
//   }

//   // Save consent status in local storage
//   localStorage.setItem("analyticsConsent", consentStatus ? "true" : "false");
// };

const getConsentStatus = () => {
  return localStorage.getItem("analyticsConsent");
};

const setConsentStatus = (consentStatus) => {
  localStorage.setItem("analyticsConsent", consentStatus ? "true" : "false");
};

export const checkConsentStatus = () => {
  const consentStatus = getConsentStatus();
  console.log("Checked status in firebase file:", consentStatus);
  setAnalyticsCollectionEnabled(analytics, consentStatus === "true");
};

export const setAnalyticsConsent = (consentStatus) => {
  setConsentStatus(consentStatus);
  setAnalyticsCollectionEnabled(analytics, consentStatus);
};