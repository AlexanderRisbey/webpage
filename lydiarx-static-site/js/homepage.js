import { pageHref, assetHref } from './utils.js';
import { routes } from './routes.js';
import { icons } from './icons.js';

export const renderHomepage = (root) => {
  const homepageContent = `
    <main class="main-wrapper">
      <div id="startRef">
        <section class="section-home-header">
          <canvas id="globe-canvas" class="canvas" style="position:fixed; height: 100vh; width: 100vw; z-index: -2;"></canvas>
          <div id="globe-overlay" style="position:fixed; height: 100vh; width: 100vw; z-index: -1; background-color: #fff; opacity: 0;"></div>
          <div class="page-padding special top">
            <div class="container-large">
              <div class="home-header_component container-background">
                <h1 class="heading" style="text-align: left;">
                  Introducing LydiaRx AI R&D Studio
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
                        <h2>R&D Ops<br>Platform</h2>
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
