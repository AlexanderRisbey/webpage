export const firebaseConfig = {
  apiKey: 'AIzaSyAkUZB22-zcdI9K0j-ZjQastRg43deECZ4',
  authDomain: 'lydiarx-001.firebaseapp.com',
  projectId: 'lydiarx-001',
  storageBucket: 'lydiarx-001.appspot.com',
  messagingSenderId: '469681685711',
  appId: '1:469681685711:web:960dec6e2dc931321623ba',
  measurementId: 'G-45BVMELSGH',
};

let analyticsInstance = null;

export const initFirebase = () => {
  if (typeof firebase !== 'undefined' && firebase.initializeApp) {
    try {
      window.app = firebase.initializeApp(firebaseConfig);
      window.functions = typeof firebase.functions === 'function' ? firebase.functions(window.app) : null;
      analyticsInstance = typeof firebase.analytics === 'function' ? firebase.analytics() : null;
    } catch (error) {
      console.warn('Firebase initialization failed:', error);
      window.app = null;
      window.functions = null;
    }
  } else {
    console.warn('Firebase not loaded, analytics and functions will be disabled');
    window.app = null;
    window.functions = null;
  }
  return analyticsInstance;
};

export { analyticsInstance };
