import { pageHref, assetHref } from './utils.js';
import { routes } from './routes.js';
import { getStyleVariant, STYLE_VARIANTS } from './ab-testing.js';

export const newsArticleHref = (id) => `${pageHref(routes.news)}?id=${encodeURIComponent(id)}`;

export const renderHeader = () => `
  <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav_component w-nav">
    <div class="page-padding nav">
      <div class="nav_container">
        <a href="${pageHref(routes.home)}" class="nav_brand-link w-nav-brand">
          <img src="${assetHref('images/LydiaRx_Logo_Light.svg')}" loading="lazy" alt="LydiaRx" class="nav_brand-logo">
        </a>
        <div class="nav_menu-wrapper">
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
        </div>
        <div class="nav_menu-button w-nav-button">
            <button class="mobileMenu-button">
                <svg width="23" height="18" viewBox="0 0 23 18">
                    <path fill="transparent" stroke-width="3" stroke="#fff" stroke-linecap="round" d="M 2 2.5 L 20 2.5" class="top"></path>
                    <path fill="transparent" stroke-width="3" stroke="#fff" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="1" class="middle"></path>
                    <path fill="transparent" stroke-width="3" stroke="#fff" stroke-linecap="round" d="M 2 16.346 L 20 16.346" class="bottom"></path>
                </svg>
            </button>
        </div>
      </div>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    <nav id="mobile-menu" class="mobile-menu">
        <ul class="menu">
            <li class="menu-link no-point logo-mobile-menu"> 
                <a href="${pageHref(routes.home)}" class="nav_brand-link w-nav-brand">
                    <img src="${assetHref('images/LydiaRx_Logo_Dark.svg')}" loading="lazy" alt="LydiaRx" class="nav_brand-logo">
                </a>
            </li>
            <li class="menu-link no-point">
                <a href="${pageHref(routes.about)}" class="mobile-menu-item">About</a>
            </li>
            <li class="menu-link no-point dropdown-mobile">
                <div class="mobile-menu-item is-for-dropdown">
                    <span>Products & Services</span>
                    <div style="margin-left: 5px; display: flex; align-items: center;">
                        <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M0 7 L 20 7 L 10 16" fill="#fff"></path>
                        </svg>
                    </div>
                </div>
                <ul class="dropdown-container-mobile menu">
                    <li class="white-point">
                        <a href="${pageHref(routes.aiStudio)}" class="mobile-menu-item">AI R&amp;D Studio</a>
                    </li>
                    <li class="white-point">
                        <a href="${pageHref(routes.trackAndTrace)}" class="mobile-menu-item">Track &amp; Trace</a>
                    </li>
                    <li class="white-point">
                        <a href="${pageHref(routes.epi)}" class="mobile-menu-item">Electronic product information</a>
                    </li>
                    <li class="white-point">
                        <a href="${pageHref(routes.csv)}" class="mobile-menu-item">Computer System Validation</a>
                    </li>
                    <li class="white-point">
                        <a href="${pageHref(routes.it)}" class="mobile-menu-item">IT Infrastructure Services</a>
                    </li>
                    <li class="white-point">
                        <a href="${pageHref(routes.dataAnalytics)}" class="mobile-menu-item">Data and Analytics</a>
                    </li>
                </ul>
            </li>
            <li class="menu-link no-point">
                <a href="${pageHref(routes.contact)}" class="mobile-menu-item">Contact</a>
            </li>
        </ul>
    </nav>
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

const STYLESHEET_MATCHERS = {
  fonts: (href) => href.endsWith('/assets/css/plus-jakarta-sans.css'),
  common: (href) => href.endsWith('/assets/css/common/common.css'),
  mobile: (href) => href.endsWith('/assets/css/mobile-menu-fix.css'),
  swiper: (href) => href.endsWith('/vendor/swiper-bundle.min.css'),
  about: (href) => href.endsWith('/assets/css/pages/about.css'),
  trackAndTrace: (href) => href.endsWith('/assets/css/pages/track-and-trace.css'),
  variantB: (href) => href.endsWith('/assets/css/main-theme-alt.css'),
};

const vendorHref = (path = '') => new URL(path, new URL('../vendor/', import.meta.url)).href;

const findStylesheet = (matcher) =>
  Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find((link) => matcher(link.href));

const ensureStylesheet = ({ id, href, matcher }) => {
  const existing = findStylesheet(matcher);
  if (existing) {
    existing.dataset.styleId = id;
    if (existing.href !== href) {
      existing.href = href;
    }
    return existing;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.styleId = id;
  document.head.appendChild(link);
  return link;
};

const removeStylesheet = (matcher) => {
  const existing = findStylesheet(matcher);
  if (existing) {
    existing.remove();
  }
};

const ensureBaseStylesheets = () => {
  const baseStyles = [
    { id: 'fonts', href: assetHref('css/plus-jakarta-sans.css'), matcher: STYLESHEET_MATCHERS.fonts },
    { id: 'common', href: assetHref('css/common/common.css'), matcher: STYLESHEET_MATCHERS.common },
    { id: 'mobile', href: assetHref('css/mobile-menu-fix.css'), matcher: STYLESHEET_MATCHERS.mobile },
    { id: 'swiper', href: vendorHref('swiper-bundle.min.css'), matcher: STYLESHEET_MATCHERS.swiper },
  ];

  baseStyles.forEach(ensureStylesheet);
};

const ensurePageStylesheet = () => {
  const path = window.location.pathname || '';
  if (path.includes('about.html')) {
    ensureStylesheet({
      id: 'page-about',
      href: assetHref('css/pages/about.css'),
      matcher: STYLESHEET_MATCHERS.about,
    });
  } else {
    removeStylesheet(STYLESHEET_MATCHERS.about);
  }

  if (path.includes('track-and-trace.html')) {
    ensureStylesheet({
      id: 'page-track-and-trace',
      href: assetHref('css/pages/track-and-trace.css'),
      matcher: STYLESHEET_MATCHERS.trackAndTrace,
    });
  } else {
    removeStylesheet(STYLESHEET_MATCHERS.trackAndTrace);
  }
};

const ensureVariantStylesheet = (variant) => {
  if (variant === STYLE_VARIANTS.B) {
    ensureStylesheet({
      id: 'variant-b',
      href: assetHref('css/main-theme-alt.css'),
      matcher: STYLESHEET_MATCHERS.variantB,
    });
  } else {
    removeStylesheet(STYLESHEET_MATCHERS.variantB);
  }
};

export const loadCSS = async () => {
  try {
    ensureBaseStylesheets();
    ensurePageStylesheet();
    const variant = getStyleVariant();
    ensureVariantStylesheet(variant);
    return variant;
  } catch (error) {
    console.error('Failed to load CSS:', error);
    return null;
  }
};
