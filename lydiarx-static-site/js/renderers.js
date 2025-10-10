import { pageHref, assetHref } from './utils.js';
import { routes } from './routes.js';

export const newsArticleHref = (id) => `${pageHref(routes.news)}?id=${encodeURIComponent(id)}`;

export const renderHeader = () => `
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav_component w-nav">
    <div class="page-padding nav">
      <div class="nav_container">
        <a href="${pageHref(routes.home)}" class="nav_brand-link w-nav-brand">
          <img src="${assetHref('images/LydiaRx_Logo_Light.svg')}" loading="lazy" alt="LydiaRx" class="nav_brand-logo">
        </a>
        <nav role="navigation" class="nav_menu w-nav-menu">
          <div class="nav_left-wrapper">
            <div class="nav_link-wrapper">
              <a href="${pageHref(routes.about)}" class="nav_link w-nav-link">About</a>
              <div class="nav_link-line"></div>
            </div>
            <div class="nav_link-wrapper dropdown">
              <div class="nav_link is-for-dropdown w-dropdown-toggle">
                <div>Products &amp; Services <br></div>
                <div style="margin-left: 5px; display: flex; align-items: center;">
                  <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M0 7 L 20 7 L 10 16"></path>
                  </svg>
                </div>
              </div>
              <div class="dropdown-container">
                <div class="dropdown-content">
                  <h6 class="dropdownTitle">Products</h6>
                  <a href="${pageHref(routes.aiStudio)}" class="dropdownItem">AI R&amp;D Studio</a>
                  <a href="${pageHref(routes.trackAndTrace)}" class="dropdownItem">Track &amp; Trace</a>
                  <a href="${pageHref(routes.epi)}" class="dropdownItem">Electronic product information</a>
                </div>
                <div class="dropdown-content">
                  <h6 class="dropdownTitle">Consultancy Services</h6>
                  <a href="${pageHref(routes.csv)}" class="dropdownItem">Computer System Validation</a>
                  <a href="${pageHref(routes.it)}" class="dropdownItem">IT Infrastructure Design, Implementation and Qualification</a>
                  <a href="${pageHref(routes.dataAnalytics)}" class="dropdownItem">Data and Analytics</a>
                </div>
              </div>
            </div>
            <div class="nav_link-wrapper">
              <a href="${pageHref(routes.contact)}" class="nav_link w-nav-link">Contact</a>
              <div class="nav_link-line"></div>
            </div>
          </div>
        </nav>
        <div class="nav_menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
  </div>
`;

export const renderFooter = () => `
  <footer class="footer_component">
    <div class="page-padding">
      <div class="container-large">
        <div class="footer_grid">
          <div class="footer_col">
            <a href="${pageHref(routes.home)}" class="nav_brand-link w-nav-brand">
              <img src="${assetHref('images/LydiaRx_Logo_Light.svg')}" loading="lazy" alt="LydiaRx" class="footer_brand-logo">
            </a>
          </div>
          <div class="footer_col">
            <h4 class="footer_heading">Products</h4>
            <div class="footer_links-grid">
              <a href="${pageHref(routes.trackAndTrace)}" class="footer_link">Pharmaceutical Track &amp; Trace</a>
              <a href="${pageHref(routes.epi)}" class="footer_link">Electronic Product Information (ePI)</a>
              <a href="${pageHref(routes.demo)}" class="footer_link">LRx Check Demo</a>
            </div>
          </div>
          <div class="footer_col">
            <h4 class="footer_heading">Services <br></h4>
            <div class="footer_links-grid">
              <a href="${pageHref(routes.csv)}" class="footer_link">Computer System Validation</a>
              <a href="${pageHref(routes.it)}" class="footer_link">IT Infrastructure</a>
              <a href="${pageHref(routes.dataAnalytics)}" class="footer_link">Data &amp; Analytics</a>
            </div>
          </div>
          <div class="footer_col">
            <h4 class="footer_heading">The Company</h4>
            <div class="footer_links-grid">
              <a href="${pageHref(routes.about)}" class="footer_link">About</a>
              <a href="${pageHref(routes.contact)}" class="footer_link">Contact</a>
            </div>
          </div>
        </div>
        <div class="footer_bottom-wrapper">
          <div class="footer_links-wrapper">
            <a href="${pageHref(routes.privacy)}" class="footer_link">Privacy Policy</a>
            <a href="${pageHref(routes.terms)}" class="footer_link">Terms of Service</a>
            <a href="${pageHref(routes.modernSlavery)}" class="footer_link">Modern slavery statement</a>
          </div>
          <div>© 2024 LydiaRx GmbH</div>
        </div>
      </div>
    </div>
  </footer>
`;
