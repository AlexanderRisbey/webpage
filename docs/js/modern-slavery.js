import { assetHref } from './utils.js';

export const renderModernSlaveryPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            Modern Slavery Statement
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Last Updated: 01.01.2025</p>
                    </div>
                    <div class="about_header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="about_header-image" alt="LydiaRx Logo Art"/>
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
                                <h2>Modern Slavery Statement</h2>
                                <div class="padding-bottom"></div>

                                <p><strong>Introduction</strong></p>
                                <div class="padding-bottom"></div>

                                <p>This statement is made pursuant to Section 54 of the Modern Slavery Act 2015 and sets out the steps taken by LydiaRx Systems Ltd. ("LydiaRx" or "the Company") to prevent modern slavery and human trafficking in our business and supply chains during the financial year 2024.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <p><strong>About LydiaRx</strong></p>
                                <div class="padding-bottom"></div>

                                <p>LydiaRx is committed to conducting its business ethically and with integrity, and we are dedicated to upholding human rights across all aspects of our operations. We provide Pharmaceutical Track and Trace, Electronic Product Information (ePI) products, Computer Validation Service, IT Infrastructure Design, Implementation & Qualification, Data & Analysis services to our customers and maintain a responsible and transparent approach to our supply chain management.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <p><strong>Our Policies</strong></p>
                                <div class="padding-bottom"></div>
                                <ol>
                                    <li><strong>Supplier Code of Conduct:</strong> We have established a Supplier Code of Conduct that outlines our expectations regarding ethical conduct, labor practices, and human rights. We require all suppliers and contractors to adhere to these standards.</li>

                                    <li><strong>Due Diligence Process:</strong> We conduct due diligence assessments of new and existing suppliers to evaluate their compliance with our Supplier Code of Conduct. This process includes risk assessments and periodic reviews to identify and mitigate potential risks of modern slavery and human trafficking.</li>

                                    <li><strong>Employee Training:</strong> We provide training to our employees to raise awareness of modern slavery and human trafficking issues. This training includes identifying signs of exploitation, reporting procedures, and our commitment to ethical business practices.</li>

                                    <li><strong>Whistleblowing Policy:</strong> We have established a whistleblowing policy that encourages employees, suppliers, and other stakeholders to report any concerns related to modern slavery or human trafficking. Reports are thoroughly investigated, and appropriate action is taken in response.</li>
                                </ol>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <p><strong>Supply Chain Management</strong></p>
                                <div class="padding-bottom"></div>

                                <p>We recognize the importance of understanding and addressing modern slavery risks within our supply chain. Our approach includes:</p>
                                <div class="padding-bottom"></div>
                                <ul>
                                    <li>Conducting risk assessments to identify high-risk suppliers and industries.</li>

                                    <li>Engaging with suppliers to promote awareness of modern slavery risks and expectations for compliance.</li>

                                    <li>Evaluating supplier performance based on ethical considerations, including labor practices and human rights.</li>

                                    <li>Taking appropriate action, including termination of contracts, in cases where suppliers fail to meet our ethical standards.</li>
                                </ul>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <p><strong>Future Steps</strong></p>
                                <div class="padding-bottom"></div>
                                <ul>
                                    <li>Enhance our supplier engagement and due diligence processes to further mitigate risks.</li>

                                    <li>Expand our employee training programs to ensure all staff members understand their role in preventing modern slavery.</li>

                                    <li>Collaborate with industry partners and stakeholders to share best practices and promote ethical supply chain management.</li>
                                </ul>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <p><strong>Conclusion</strong></p>
                                <div class="padding-bottom"></div>

                                <p>LydiaRx remains committed to preventing modern slavery and human trafficking in all aspects of our business. We will continue to uphold the principles of transparency, accountability, and respect for human rights as we work towards a world free from exploitation and forced labor.</p>
                                <div class="padding-bottom"></div>

                                <p><strong>Signed: Najib Rehman, CEO</strong></p>
                                <p><strong>Date: 26.04.2024</strong></p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}
