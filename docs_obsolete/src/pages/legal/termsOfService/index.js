import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"

function TermsOfServicePage() {

    return(
        <div className="page-wrapper">
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-large">
                                <h1>
                                    Terms of Service
                                </h1>
                                <div className="padding-bottom"/>
                            </div>
                            <div className="max-width-medium">
                                <p className="Paragraph">Last Updated: 25.04.2024</p>
                            </div>
                            <div class="ps_header_shapes">
                                <img src={LRxWebArt} className="ps_header-image" alt="LydiaRx Logo Art"/>
                            </div>
                        </div>   
                    </div>
                </section>
                <section className="section_about-us">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-section-huge">
                                <div className="about_component">
                                    <div className="max-width-large">
                                        <p>These Terms of Service ("Terms") govern your use of the website lydiarx.com (the "Site"). By accessing or using the Site, you agree to comply with these Terms.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Use of the Site</h3>
                                        <div className="padding-bottom"/>

                                        <p>You may use the Site for lawful purposes and in accordance with these Terms. You agree not to:</p>
                                        <div className="padding-bottom"/>

                                        <ul>
                                            <li>Violate any applicable laws or regulations;</li>

                                            <li>Use the Site in any way that may impair the performance, functionality, or availability of the Site;</li>

                                            <li>Engage in any unauthorized scraping, data mining, or similar data gathering activities;</li>

                                            <li>Interfere with or disrupt the security features of the Site or the servers and networks connected to the Site;</li>

                                            <li>Attempt to bypass any measures we may use to prevent or restrict access to the Site.</li>
                                        </ul>

                                        <div className="padding-bottom"/>
                                        <h3>Intellectual Property Rights</h3>
                                        <div className="padding-bottom"/>

                                        <p>All content on the Site, including text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations, is the property of LydiaRx or its content suppliers and is protected by international copyright laws.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Limitation of Liability</h3>
                                        <div className="padding-bottom"/>

                                        <p>In no event shall LydiaRx, its directors, officers, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Changes to Terms</h3>
                                        <div className="padding-bottom"/>

                                        <p>We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on the Site. Your continued use of the Site after the posting of changes constitutes your acceptance of such changes.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Contact Us</h3>
                                        <div className="padding-bottom"/>

                                        <p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:privacy@lydiarx.com">privacy@lydiarx.com</a>.</p>


                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default TermsOfServicePage