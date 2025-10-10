import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"

function ItInfrastructurePage() {

    return(
        <div className="page-wrapper">
            <Helmet>
                <title>IT Infrastructure Solutions - LydiaRx</title>
                <meta property="description" content="Empower your pharmaceutical endeavors with LydiaRx's IT infrastructure solutions. From network design to implementation and qualification, our tailored strategies enhance efficiency, scalability, and compliance in your IT environment." />
                <meta property="og:title" content="IT Infrastructure Solutions - LydiaRx" />
                <meta property="og:description" content="Empower your pharmaceutical endeavors with LydiaRx's IT infrastructure solutions. From network design to implementation and qualification, our tailored strategies enhance efficiency, scalability, and compliance in your IT environment." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-medium">
                                <h1>
                                    IT Infrastructure Services
                                </h1>
                                <div className="padding-bottom"/>
                                <p className="Paragraph">Digital compliance for pharma and fast growing biotech</p>
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
                                        <h2>Expertise and Client Focus in CSV Solutions and Services</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            We specialize in providing comprehensive solutions to ensure the robustness, reliability, and compliance of your IT infrastructure. From data centers to workstations, applications to security protocols, we offer end-to-end support to meet your unique needs.
                                        </p>
                                    </div>
                                    <div className="margin-vertical margin-xxlarge">
                                        {/* <div className="about_image-wrapper">
                                            <img src={AboutImage} className="about_image"/>
                                        </div> */}
                                    </div>
                                    <div className="max-width-large">
                                        <h2>IT Infrastructure Qualification</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            Our qualification process covers every aspect of your IT infrastructure, including data centers, servers, workstations, and applications. We meticulously assess and validate each component to ensure compliance with industry regulations and standards.
                                        </p>
                                    </div>
                                    <div className="padding-bottom"/>
                                    <div className="max-width-large">
                                        <h2>Implementation Procedures</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            We implement rigorous procedures to streamline the deployment and maintenance of your IT infrastructure:
                                        </p>
                                        <ul style={{margin: "2rem"}}>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>IT Infrastructure Qualification SOP:</span> Standard Operating Procedures tailored to your infrastructure's unique requirements.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Workstation Qualification SOP:</span> Detailed protocols for workstation validation to guarantee optimal performance.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Data Migration Plan:</span> Seamless transition strategies to minimize disruption during data migration processes.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>IT Change Control:</span> Controlled processes to manage changes effectively while mitigating risks.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Vulnerability and Patch Management:</span> Proactive measures to identify and address vulnerabilities, ensuring a secure environment.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Incident Management:</span> Swift response protocols to handle IT incidents and minimize impact on operations.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Security & Access Management of GxP IT Infrastructure:</span> Robust security measures to safeguard GxP (Good Practices) compliant infrastructure.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Physical and Logical Security:</span> Comprehensive protection against physical breaches and cyber threats.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Performance Monitoring:</span> Continuous monitoring to optimize performance and maintain efficiency.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Data Center Qualification Plan:</span> Strategic plans to validate data center infrastructure for reliability and compliance.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Information and Facility Security Policy:</span> Policies to govern information and facility security practices in alignment with regulatory requirements.
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Problem Management:</span> Proactive identification and resolution of IT problems to ensure uninterrupted operations.
                                            </li>             
                                        </ul>
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
export default ItInfrastructurePage