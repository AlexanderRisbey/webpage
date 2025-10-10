const SITE_BASE_URL = new URL('../../', import.meta.url);
const ASSET_BASE_URL = new URL('../', import.meta.url);

const toHref = (base, path = '') => new URL(path, base).href;
const pageHref = (path = '') => toHref(SITE_BASE_URL, path);
const assetHref = (path = '') => toHref(ASSET_BASE_URL, path);

window.firebaseConfig = {
  apiKey: 'AIzaSyAkUZB22-zcdI9K0j-ZjQastRg43deECZ4',
  authDomain: 'lydiarx-001.firebaseapp.com',
  projectId: 'lydiarx-001',
  storageBucket: 'lydiarx-001.appspot.com',
  messagingSenderId: '469681685711',
  appId: '1:469681685711:web:960dec6e2dc931321623ba',
  measurementId: 'G-45BVMELSGH',
};

window.app = firebase.initializeApp(window.firebaseConfig);
window.functions =
  typeof firebase.functions === 'function' ? firebase.functions(window.app) : null;
const analyticsInstance =
  typeof firebase.analytics === 'function' ? firebase.analytics() : null;

const routes = {
  home: '',
  about: 'about.html',
  contact: 'contact.html',
  aiStudio: 'products/ai-studio.html',
  trackAndTrace: 'products/track-and-trace.html',
  epi: 'products/epi.html',
  demo: 'products/demo.html',
  csv: 'services/csv.html',
  it: 'services/it-infrastructure.html',
  dataAnalytics: 'services/data-analytics.html',
  news: 'news/index.html',
  privacy: 'legal/privacy-policy.html',
  terms: 'legal/terms-of-service.html',
  modernSlavery: 'legal/modern-slavery.html',
};

const newsArticleHref = (id) => `${pageHref(routes.news)}?id=${encodeURIComponent(id)}`;

const icons = {
  dna: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m10 16 1.5 1.5"></path>
      <path d="m14 8-1.5-1.5"></path>
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
      <path d="m16.5 10.5 1 1"></path>
      <path d="m17 6-2.891-2.891"></path>
      <path d="M2 15c6.667-6 13.333 0 20-6"></path>
      <path d="m20 9 .891.891"></path>
      <path d="M3.109 14.109 4 15"></path>
      <path d="m6.5 12.5 1 1"></path>
      <path d="m7 18 2.891 2.891"></path>
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
    </svg>
  `,
  shieldCheck: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  `,
  network: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1"></rect>
      <rect x="2" y="16" width="6" height="6" rx="1"></rect>
      <rect x="9" y="2" width="6" height="6" rx="1"></rect>
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
      <path d="M12 12V8"></path>
    </svg>
  `,
  cpu: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20v2"></path>
      <path d="M12 2v2"></path>
      <path d="M17 20v2"></path>
      <path d="M17 2v2"></path>
      <path d="M2 12h2"></path>
      <path d="M2 17h2"></path>
      <path d="M2 7h2"></path>
      <path d="M20 12h2"></path>
      <path d="M20 17h2"></path>
      <path d="M20 7h2"></path>
      <path d="M7 20v2"></path>
      <path d="M7 2v2"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="8" y="8" width="8" height="8" rx="1"></rect>
    </svg>
  `,
  database: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  `,
  serverCog: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m10.852 14.772-.383.923"></path>
      <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path>
      <path d="m13.148 9.228.383-.923"></path>
      <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path>
      <path d="m14.772 10.852.923-.383"></path>
      <path d="m14.772 13.148.923.383"></path>
      <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path>
      <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path>
      <path d="M6 18h.01"></path>
      <path d="M6 6h.01"></path>
      <path d="m9.228 10.852-.923-.383"></path>
      <path d="m9.228 13.148-.923.383"></path>
    </svg>
  `,
  barChart: `
    <svg class="ai-studio-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 21v-6"></path>
      <path d="M12 21V9"></path>
      <path d="M19 21V3"></path>
    </svg>
  `,
};

const renderHeader = () => `
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

const renderFooter = () => `
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

const renderHomepage = (root) => {
  const homepageContent = `
    <main class="main-wrapper">
      <div id="startRef">
        <section class="section-home-header">
          <div id="canvas-container" style="position: fixed; height: 100vh; width: 100vw; z-index: -2;"></div>
          <div class="page-padding special top">
            <div class="container-large">
              <div class="home-header_component container-background">
                <h1 class="heading" style="text-align: left;">
                  Introducing LydiaRx AI R&amp;D Studio
                  Transforming Life Sciences with AI
                </h1>
                <div>
                  <div class="scroll-indicator-wrapper">
                    <div id="scroll-indicator"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-meet-os">
          <div class="page-padding">
            <div class="container-large">
              <div class="padding-vertical padding-huge">
                <div class="layout-1-col">
                  <div class="meet-os-content container-background">
                    <div class="ai-studio-container">
                      <div class="ai-studio-column">
                        ${icons.dna}
                        <h2>Discovery<br>Studio</h2>
                        <div class="margin-top margin-small">
                          <p>Empowering scientists with AI-driven insights to explore literature, analyze patents, and design candidates at unprecedented speed.</p>
                        </div>
                      </div>
                      <div class="ai-studio-column center">
                        ${icons.shieldCheck}
                        <h2>GxP Copilot<br>Suite</h2>
                        <div class="margin-top margin-small">
                          <p>Redefining compliance by automating documentation, inspections, and quality processes—ensuring accuracy and regulatory confidence.</p>
                        </div>
                      </div>
                      <div class="ai-studio-column">
                        ${icons.network}
                        <h2>R&amp;D Ops<br>Platform</h2>
                        <div class="margin-top margin-small">
                          <p>Unifying systems and workflows into a central AI-driven hub, enabling efficiency, scalability, and seamless data integrity.</p>
                        </div>
                      </div>
                    </div>
                    <div class="button-wrapper">
                      <a href="${pageHref(routes.aiStudio)}" class="button is-grey w-button">Find out more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-meet-os">
          <div class="page-padding">
            <div class="container-large">
              <div class="padding-vertical padding-huge">
                <div class="layout-1-col">
                  <div class="meet-os-content container-background">
                    <div class="ai-studio-container">
                      <div class="ai-studio-column">
                        ${icons.cpu}
                        <h2>Pharmaceutical<br>Track &amp; Trace</h2>
                        <div class="margin-top margin-small">
                          <p>Cutting-edge platform ensuring transparency and security across the pharma supply chain, from factory to pharmacy.</p>
                        </div>
                        <div class="button-wrapper">
                          <a href="${pageHref(routes.trackAndTrace)}" class="button is-grey w-button">More about this product</a>
                        </div>
                      </div>
                      <div class="ai-studio-column center">
                        ${icons.database}
                        <h2>Electronic Product<br>Information (ePI)</h2>
                        <div class="margin-top margin-small">
                          <p>Seamless digital access to essential medicine info, replacing paper leaflets with an intuitive, patient-friendly experience.</p>
                        </div>
                        <div class="button-wrapper">
                          <a href="${pageHref(routes.epi)}" class="button is-grey w-button">More about this product</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-meet-os">
          <div class="page-padding">
            <div class="container-large">
              <div class="padding-vertical padding-huge">
                <div class="layout-1-col">
                  <div class="meet-os-content container-background">
                    <div class="ai-studio-container">
                      <div class="ai-studio-column">
                        ${icons.shieldCheck}
                        <h2>CSV</h2>
                        <div class="margin-top margin-small">
                          <p>Comprehensive validation solutions to ensure system integrity, reliability, and full regulatory compliance.</p>
                        </div>
                        <div class="button-wrapper">
                          <a href="${pageHref(routes.csv)}" class="button is-grey w-button">More about this service</a>
                        </div>
                      </div>
                      <div class="ai-studio-column center">
                        ${icons.serverCog}
                        <h2>IT Infrastructure</h2>
                        <div class="margin-top margin-small">
                          <p>End-to-end IT infrastructure design, implementation, and qualification to build secure, scalable operations.</p>
                        </div>
                        <div class="button-wrapper">
                          <a href="${pageHref(routes.it)}" class="button is-grey w-button">More about this service</a>
                        </div>
                      </div>
                      <div class="ai-studio-column">
                        ${icons.barChart}
                        <h2>Data &amp; Analysis</h2>
                        <div class="margin-top margin-small">
                          <p>Advanced analytics and predictive insights to drive smarter pharmaceutical decisions and innovation.</p>
                        </div>
                        <div class="button-wrapper">
                          <a href="${pageHref(routes.dataAnalytics)}" class="button is-grey w-button">More about this service</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-meet-os">
          <div class="page-padding">
            <div class="container-large">
              <div class="padding-vertical padding-huge">
                <div class="layout-1-col">
                  <div class="meet-os-content container-background">
                    <div id="news-slider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="section-featured">
        <div class="page-padding">
          <div class="container-large">
            <div class="padding-vertical padding-huge">
              <div class="padding-vertical padding-huge">
                <div class="page-padding">
                  <div class="container-large">
                    <div class="cta_content">
                      <h2>LRx Check, Consumer App <br></h2>
                      <div class="button-wrapper">
                        <a href="${pageHref(routes.demo)}" class="button is-grey w-button">Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cta_image-wrapper">
                  <img src="${assetHref('images/lydiaRx_consumer app v1.png')}" loading="lazy" alt="Pharmaceutical Box being scanned by phone with LRx Check App" class="cta_image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
  root.insertAdjacentHTML('beforeend', homepageContent);
};

const initGlobe = () => {
  const container = document.getElementById('canvas-container');
  if (!container || typeof ThreeGlobe !== 'function' || typeof THREE === 'undefined') {
    return null;
  }

  const globe = new ThreeGlobe();
  globe.hexPolygonsData([]);
  globe.hexPolygonResolution(3);
  globe.hexPolygonMargin(0.1);
  if (typeof globe.hexPolygonUseDots === 'function') {
    globe.hexPolygonUseDots(false);
  }
  globe.hexPolygonColor(() => '#fff');
  globe.hexPolygonAltitude(0.001);
  if (typeof globe.hexPolygonCurvatureResolution === 'function') {
    globe.hexPolygonCurvatureResolution(5);
  }
  globe.arcsData([]);
  globe.arcColor('color');
  globe.arcDashLength(1);
  globe.arcDashGap(4);
  globe.arcDashInitialGap(() => Math.random() * 5);
  globe.arcDashAnimateTime(1000);

  const blueMaterial = new THREE.MeshStandardMaterial({ color: '#22577a' });
  globe.globeMaterial(blueMaterial);

  const scene = new THREE.Scene();
  scene.add(globe);
  scene.add(new THREE.AmbientLight(0xbbbbbb));
  scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

  const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 400;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  fetch(assetHref('json/110_countries.json'))
    .then((res) => res.json())
    .then((countries) => {
      if (countries && countries.features) {
        globe.hexPolygonsData(countries.features);
      }
    })
    .catch(() => {});

  const cities = [
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Berlin', lat: 52.52, lng: 13.405 },
    { name: 'New York', lat: 40.7128, lng: -74.006 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  ];

  const arcsData = [];
  for (let i = 0; i < cities.length; i += 1) {
    for (let j = i + 1; j < cities.length; j += 1) {
      arcsData.push({
        startLat: cities[i].lat,
        startLng: cities[i].lng,
        endLat: cities[j].lat,
        endLng: cities[j].lng,
        color: ['#22577aff', '#80ed99ff', '#22577aff'],
      });
    }
  }
  globe.arcsData(arcsData);

  const animate = () => {
    camera.lookAt(scene.position);
    globe.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onResize, false);

  return { camera };
};

const initNewsSlider = () => {
  const newsSliderContainer = document.getElementById('news-slider');
  if (!newsSliderContainer) {
    return;
  }

  fetch(assetHref('json/news.json'))
    .then((response) => response.json())
    .then((news) => {
      if (!Array.isArray(news) || news.length === 0) {
        newsSliderContainer.innerHTML = '<p>No news available at this time.</p>';
        return;
      }

      const slidesHTML = news
        .map(
          (item) => `
            <div class="swiper-slide">
              <a href="${newsArticleHref(item.id)}" style="width: 100%; text-decoration: none;">
                <div class="news-card">
                  <div>
                    <p class="news-card-date">${item.date}</p>
                    <h3 class="news-card-title">${item.title}</h3>
                    <p class="news-card-excerpt">${item.excerpt}</p>
                  </div>
                  <div class="button-wrapper" style="bottom: 0;">
                    <span class="button is-grey w-button">Read more</span>
                  </div>
                </div>
              </a>
            </div>
          `
        )
        .join('');

      newsSliderContainer.innerHTML = `
        <section class="news-container">
          <h2 style="margin-bottom: 30px;">Company News</h2>
          <div class="swiper">
            <div class="swiper-wrapper">
              ${slidesHTML}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
      `;

      if (typeof Swiper === 'function') {
        new Swiper('.swiper', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          spaceBetween: 20,
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          },
        });
      }
    })
    .catch(() => {
      newsSliderContainer.innerHTML = '<p>Unable to load news at this time.</p>';
    });
};

const initCookieBanner = () => {
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

const initScrollAnimations = (camera) => {
  const startRef = document.getElementById('startRef');
  if (!startRef || !camera) {
    return;
  }

  const screenWidth = window.innerWidth;

  const transform = (value, r1, r2) => {
    const scale = (r2[1] - r2[0]) / (r1[1] - r1[0]);
    return r2[0] + (value - r1[0]) * scale;
  };

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const startRefTop = startRef.offsetTop;
    const startRefHeight = startRef.offsetHeight;

    let scrollYProgress = (scrollY - startRefTop) / (startRefHeight - window.innerHeight);
    scrollYProgress = Math.max(0, Math.min(1, scrollYProgress));

    const cameraPosX = transform(
      scrollYProgress,
      [0, 1],
      screenWidth <= 479
        ? [-4, 2]
        : screenWidth <= 767
        ? [-6, 2]
        : screenWidth <= 991
        ? [-9, 2]
        : [-10, -30]
    );
    const cameraPosY = transform(
      scrollYProgress,
      [0, 1],
      screenWidth <= 479
        ? [7, -2]
        : screenWidth <= 767
        ? [6, -2]
        : screenWidth <= 991
        ? [4, -2]
        : [5, 5]
    );
    const cameraPosZ = transform(
      scrollYProgress,
      [0, 1],
      screenWidth <= 479
        ? [75, 20]
        : screenWidth <= 767
        ? [50, 20]
        : screenWidth <= 991
        ? [60, 20]
        : [45, -25]
    );

    const cameraLookX = transform(
      scrollYProgress,
      [0, 1],
      screenWidth <= 479
        ? [-4, 2]
        : screenWidth <= 767
        ? [-6, 2]
        : screenWidth <= 991
        ? [-9, 2]
        : [-10, -3]
    );
    const cameraLookY = transform(
      scrollYProgress,
      [0, 1],
      screenWidth <= 479
        ? [7, -2]
        : screenWidth <= 767
        ? [6, -2]
        : screenWidth <= 991
        ? [4, -2]
        : [5, 5]
    );
    const cameraLookZ = transform(
      scrollYProgress,
      [0, 1],
      screenWidth <= 479
        ? [75, 20]
        : screenWidth <= 767
        ? [50, 20]
        : screenWidth <= 991
        ? [60, 20]
        : [45, 2]
    );

    camera.position.x = cameraPosX;
    camera.position.y = cameraPosY;
    camera.position.z = cameraPosZ;
    camera.lookAt(cameraLookX, cameraLookY, 0);
  });
};

const isHomePath = () => {
  const path = window.location.pathname || '';
  if (path === '/' || path === '') {
    return true;
  }
  if (path.endsWith('/index.html')) {
    return true;
  }

  const basePathname = SITE_BASE_URL.pathname.replace(/\/$/, '');
  return (
    (basePathname && path === basePathname) ||
    (basePathname && path === `${basePathname}/`)
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) {
    return;
  }

  root.innerHTML = '';
  root.insertAdjacentHTML('beforeend', renderHeader());

  if (isHomePath()) {
    renderHomepage(root);
    const globeData = initGlobe();
    if (globeData && globeData.camera) {
      initScrollAnimations(globeData.camera);
    }
    initNewsSlider();
  }

  root.insertAdjacentHTML('beforeend', renderFooter());
  initCookieBanner();
});
