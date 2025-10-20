import { assetHref } from './utils.js';

export const renderTermsOfServicePage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_page_header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            Terms of Service
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Last Updated: 25.04.2024</p>
                    </div>
                    <div class="header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="header-shape-image" alt="LydiaRx Logo Art"/>
                    </div>
                </div>   
            </div>
        </section>
        <section class="section_about-us">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-section-huge">
                        <div class="about_component">
                            <div class="max-width-large">
                                <p>These Terms of Service ("Terms") govern your use of the website lydiarx.com (the "Site"). By accessing or using the Site, you agree to comply with these Terms.</p>
                                <div class="padding-bottom"></div>

                                <h3>Use of the Site</h3>
                                <div class="padding-bottom"></div>

                                <p>You may use the Site for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                <div class="padding-bottom"></div>

                                <ul>
                                    <li>Violate any applicable laws or regulations;</li>

                                    <li>Use the Site in any way that may impair the performance, functionality, or availability of the Site;</li>

                                    <li>Engage in any unauthorized scraping, data mining, or similar data gathering activities;</li>

                                    <li>Interfere with or disrupt the security features of the Site or the servers and networks connected to the Site;</li>

                                    <li>Attempt to bypass any measures we may use to prevent or restrict access to the Site.</li>
                                </ul>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h3>Intellectual Property Rights</h3>
                                <div class="padding-bottom"></div>

                                <p>All content on the Site, including text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations, is the property of LydiaRx or its content suppliers and is protected by international copyright laws.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h3>Limitation of Liability</h3>
                                <div class="padding-bottom"></div>

                                <p>In no event shall LydiaRx, its directors, officers, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h3>Changes to Terms</h3>
                                <div class="padding-bottom"></div>

                                <p>We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on the Site. Your continued use of the Site after the posting of changes constitutes your acceptance of such changes.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h3>Contact Us</h3>
                                <div class="padding-bottom"></div>

                                <p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:privacy@lydiarx.com">privacy@lydiarx.com</a>.</p>


                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}
