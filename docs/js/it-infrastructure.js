
const renderItInfrastructurePage = () => {
    const itInfrastructurePageContent = `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>
                            IT Infrastructure Services
                        </h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">Digital compliance for pharma and fast growing biotech</p>
                    </div>
                    <div class="about_header_shapes">
                        <img src="../assets/images/LydiaRx_web-art.svg" class="about_header-image" alt="LydiaRx Logo Art"/>
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
                                <h2>Expertise and Client Focus in CSV Solutions and Services</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    We specialize in providing comprehensive solutions to ensure the robustness, reliability, and compliance of your IT infrastructure. From data centers to workstations, applications to security protocols, we offer end-to-end support to meet your unique needs.
                                </p>
                            </div>
                            <div class="margin-vertical margin-xxlarge">
                            </div>
                            <div class="max-width-large">
                                <h2>IT Infrastructure Qualification</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Our qualification process covers every aspect of your IT infrastructure, including data centers, servers, workstations, and applications. We meticulously assess and validate each component to ensure compliance with industry regulations and standards.
                                </p>
                            </div>
                            <div class="padding-bottom"></div>
                            <div class="max-width-large">
                                <h2>Implementation Procedures</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    We implement rigorous procedures to streamline the deployment and maintenance of your IT infrastructure:
                                </p>
                                <ul style="margin: 2rem">
                                    <li>
                                        <span style="font-weight: bold;">IT Infrastructure Qualification SOP:</span> Standard Operating Procedures tailored to your infrastructure's unique requirements.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Workstation Qualification SOP:</span> Detailed protocols for workstation validation to guarantee optimal performance.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Data Migration Plan:</span> Seamless transition strategies to minimize disruption during data migration processes.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">IT Change Control:</span> Controlled processes to manage changes effectively while mitigating risks.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Vulnerability and Patch Management:</span> Proactive measures to identify and address vulnerabilities, ensuring a secure environment.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Incident Management:</span> Swift response protocols to handle IT incidents and minimize impact on operations.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Security & Access Management of GxP IT Infrastructure:</span> Robust security measures to safeguard GxP (Good Practices) compliant infrastructure.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Physical and Logical Security:</span> Comprehensive protection against physical breaches and cyber threats.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Performance Monitoring:</span> Continuous monitoring to optimize performance and maintain efficiency.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Data Center Qualification Plan:</span> Strategic plans to validate data center infrastructure for reliability and compliance.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Information and Facility Security Policy:</span> Policies to govern information and facility security practices in alignment with regulatory requirements.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Problem Management:</span> Proactive identification and resolution of IT problems to ensure uninterrupted operations.
                                    </li>             
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
    document.getElementById('root').insertAdjacentHTML('beforeend', itInfrastructurePageContent);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('it-infrastructure.html')) {
        renderItInfrastructurePage();
    }
});
