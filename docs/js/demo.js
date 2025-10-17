import { assetHref } from './utils.js';

export const renderDemoPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            LRx Check Demo
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Coming Soon</p>
                    </div>
                    <div class="about_header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="about_header-image" alt="LydiaRx Logo Art"/>
                    </div>
                </div>   
            </div>
        </section>
    </main>
    `;
}
