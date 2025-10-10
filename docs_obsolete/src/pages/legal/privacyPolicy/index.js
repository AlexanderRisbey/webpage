import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"

function PrivacyPolicyPage() {

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
                                    Privacy Policy
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

                                        <p>LydiaRx Systems Ltd. ("LydiaRx," "we," "us," or "our") operates the website lydiarx.com (the "Site"). This Privacy Policy outlines how we collect, use, store, and protect personal information obtained through the Site. By accessing or using the Site, you agree to the terms of this Privacy Policy.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Information Collection and Use</h3>
                                        <div className="padding-bottom"/>

                                        <p>We may collect personal information from users in various ways, including:</p>
                                        <div className="padding-bottom"/>

                                        <ul>
                                            <li><strong>Contact Form:</strong> When you submit information through the contact form on our Site, we collect your name, email address, and any other information you choose to provide. This information is used to respond to your inquiries and provide customer support.</li>
                                        
                                            <li><strong>Google Analytics:</strong> We may enable Google Analytics to collect anonymous usage data, such as your IP address, browser type, operating system, and pages visited on the Site. This information helps us analyze trends, improve the Site's performance, and enhance user experience. Google Analytics may use cookies and other tracking technologies. You can opt-out of Google Analytics tracking by adjusting your browser settings or using Google's opt-out tool.</li>
                                        
                                            <li><strong>reCAPTCHA:</strong> The contact form on our Site may use reCAPTCHA to prevent spam and abuse. reCAPTCHA collects information about your interactions with the form to determine whether you're a human or a bot. Your use of reCAPTCHA is subject to Google's Privacy Policy and Terms of Service.</li>
                                        </ul>

                                        <div className="padding-bottom"/>
                                        <h3>Data Sharing</h3>
                                        <div className="padding-bottom"/>

                                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy or required by law. We may share your information with:</p>
                                        <div className="padding-bottom"/>

                                        <ul>
                                            <li><strong>Service Providers:</strong> We may engage third-party service providers to assist with website operation, analytics, and other services. These providers have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                                        </ul>

                                        <div className="padding-bottom"/>
                                        <h3>Data Security</h3>
                                        <div className="padding-bottom"/>

                                        <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Your Rights</h3>
                                        <div className="padding-bottom"/>

                                        <p>You have the right to access, update, or delete your personal information collected by us. If you would like to exercise these rights or have any questions about our privacy practices, please contact us at <a href="mailto:privacy@lydiarx.com">privacy@lydiarx.com</a>.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Changes to this Privacy Policy</h3>
                                        <div className="padding-bottom"/>

                                        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on the Site. Your continued use of the Site after the posting of changes constitutes your acceptance of such changes.</p>
                                        <div className="padding-bottom"/>

                                        <h3>Contact Us</h3>
                                        <div className="padding-bottom"/>

                                        <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact our Privacy Officer at <a href="mailto:privacy@lydiarx.com">privacy@lydiarx.com</a>.</p>

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
export default PrivacyPolicyPage