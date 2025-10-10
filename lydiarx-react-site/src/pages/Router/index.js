import React from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import { gtag, initDataLayer, install } from 'ga-gtag';

import paths from './paths';

import HomePage from '../home/index';
import ComingSoonPage from '../comingSoon';
import AboutUsPage from '../about-us';
import TTPage from '../products/trackAndTrace';
import EpiPage from '../products/epi';
import CsvPage from '../services/csv';
import ItInfrastructurePage from '../services/itInfrastructure';
import DataAnalyticsPage from '../services/dataAnalytics';
import ContactPage from '../contact-us';
import PressPage from '../press';
import PressReleasePage from '../press/press-release';
import DemoPage from '../products/demo';
import PrivacyPolicyPage from '../legal/privacyPolicy';
import TermsOfServicePage from '../legal/termsOfService';
import ModernSlaveryStatementPage from '../legal/modernSlavery';
import { ScrollToTop } from '../../services';
import CookieBanner from '../../components/cookieBanner';
import AIStudioPage from '../products/aiStudio';
import DynamicNewsPage from '../../components/news/dynamicNewsPage';

const AnimatedComponent = ()=> {
  // initDataLayer();
  // gtag('consent', 'default', {
  //   'ad_storage': 'denied',
  //   'analytics_storage': 'denied'
  // });
  // install('G-45BVMELSGH');

  const location = useLocation();
  ScrollToTop()
  const locationArr = location.pathname?.split("/") ?? [];
  return (
    
    <AnimatePresence mode="wait" initial={true}>
          <Routes location={location} key={locationArr[1]}>
              <Route exact path={paths.ROOT} element={<HomePage/>}/>
              <Route exact path={paths.ABOUT} element={<AboutUsPage/>}/>
              <Route exact path={paths.CONTACT} element={<ContactPage/>}/>
              <Route exact path={paths.PRESS} element={<PressPage/>}/>
              <Route exact path={paths.PRESSRELEASE} element={<PressReleasePage/>}/>
              <Route exact path={paths.EPI} element={<EpiPage/>}/>
              <Route exact path={paths.AISTUDIO} element={<AIStudioPage/>}/>
              <Route exact path={paths.DEMO} element={<DemoPage/>}/>
              <Route exact path={paths.TT} element={<TTPage/>}/>
              <Route exact path={paths.CSV} element={<CsvPage/>}/>
              <Route exact path={paths.IT} element={<ItInfrastructurePage/>}/>
              <Route exact path={paths.DA} element={<DataAnalyticsPage/>}/>
              <Route exact path={paths.PRIVACY} element={<PrivacyPolicyPage/>}/>
              <Route exact path={paths.TERMS} element={<TermsOfServicePage/>}/>
              <Route exact path={paths.MSS} element={<ModernSlaveryStatementPage/>}/>
              <Route path="/news/:id" element={<DynamicNewsPage />} />
          </Routes>
    </AnimatePresence>
  );
}

const RouterComponent = () => {
  
    return (
    <BrowserRouter>
      <AnimatedComponent />
      <CookieBanner />
    </BrowserRouter>
  );
};

export default RouterComponent;