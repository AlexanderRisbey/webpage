import { isHomePath } from './utils.js';
import { initFirebase } from './firebase.js';
import { renderHeader, renderFooter, loadCSS } from './renderers.js';
import { initMobileMenu } from './mobile-menu.js';
import { renderHomepage } from './homepage.js';
import { initGlobe } from './globe.js';
import { initNewsSlider, renderNewsPage, initNewsPage } from './news.js';
import { initCookieBanner } from './cookies.js';
import { initDropdowns } from './ui.js';
import { renderTransitionScreen, initTransition } from './transition.js';
import { renderEpiPage, renderAiStudioPage, renderDemoPage } from './products.js';
import { renderTrackAndTracePage, initTrackAndTracePage } from './track-and-trace.js';
import { renderAboutPage, renderTeamMembers, handleBioPopup } from './about.js';
import { renderContactPage, handleContactForm } from './contact.js';
import { renderCsvPage, renderItInfrastructurePage, renderDataAnalyticsPage } from './services.js';
import { initScrollIndicator, renderScrollIndicator } from './scroll-indicator.js';
import { renderPrivacyPolicyPage, renderTermsOfServicePage, renderModernSlaveryPage } from './legal.js';
import { renderVentureStudioPage, renderInvestmentThesisPage, renderPortfolioPage } from './venture-studio.js';

document.addEventListener('DOMContentLoaded', async () => {
  await loadCSS();
  initFirebase();

  const root = document.getElementById('root');
  if (!root) {
    return;
  }

  root.innerHTML = '';
  root.insertAdjacentHTML('beforeend', renderHeader());
  root.insertAdjacentHTML('beforeend', renderTransitionScreen());

  initDropdowns();
  initTransition();

  const path = window.location.pathname;

  let isTrackAndTracePage = false;

  if (isHomePath()) {
    renderHomepage(root);
    const globe = initGlobe();
    initNewsSlider(() => {
        if(globe && globe.resize) {
            globe.resize();
        }
    });
    const scrollIndicatorContainer = document.getElementById('scroll-indicator-wrapper');
    if (scrollIndicatorContainer) {
      scrollIndicatorContainer.innerHTML = renderScrollIndicator();
      initScrollIndicator();
    }
  } else if (path.includes('epi.html')) {
    root.insertAdjacentHTML('beforeend', renderEpiPage());
  } else if (path.includes('ai-studio.html')) {
    root.insertAdjacentHTML('beforeend', renderAiStudioPage());
  } else if (path.includes('demo.html')) {
    root.insertAdjacentHTML('beforeend', renderDemoPage());
  } else if (path.includes('track-and-trace.html')) {
    root.insertAdjacentHTML('beforeend', renderTrackAndTracePage());
    isTrackAndTracePage = true;
  } else if (path.includes('about.html')) {
    root.insertAdjacentHTML('beforeend', renderAboutPage());
    renderTeamMembers();
    handleBioPopup();
  } else if (path.includes('contact.html')) {
    root.insertAdjacentHTML('beforeend', renderContactPage());
    handleContactForm();
  } else if (path.includes('csv.html')) {
    root.insertAdjacentHTML('beforeend', renderCsvPage());
  } else if (path.includes('it-infrastructure.html')) {
    root.insertAdjacentHTML('beforeend', renderItInfrastructurePage());
  } else if (path.includes('data-analytics.html')) {
    root.insertAdjacentHTML('beforeend', renderDataAnalyticsPage());
  } else if (path.includes('/news/')) {
    root.insertAdjacentHTML('beforeend', renderNewsPage());
    initNewsPage();
  } else if (path.includes('privacy-policy.html')) {
    root.insertAdjacentHTML('beforeend', renderPrivacyPolicyPage());
  } else if (path.includes('terms-of-service.html')) {
    root.insertAdjacentHTML('beforeend', renderTermsOfServicePage());
  } else if (path.endsWith('modern-slavery.html')) {
    root.insertAdjacentHTML('beforeend', renderModernSlaveryPage());
  } else if (path.endsWith('venture-studio/') || path.endsWith('venture-studio/index.html')) {
    root.insertAdjacentHTML('beforeend', renderVentureStudioPage());
  } else if (path.endsWith('venture-studio/investment-thesis.html')) {
    root.insertAdjacentHTML('beforeend', renderInvestmentThesisPage());
  } else if (path.endsWith('venture-studio/portfolio.html')) {
    root.insertAdjacentHTML('beforeend', renderPortfolioPage());
  }

  root.insertAdjacentHTML('beforeend', renderFooter());
  initCookieBanner();
  initMobileMenu();

  if (isTrackAndTracePage) {
    initTrackAndTracePage();
  }
});
