import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"

function CsvPage() {

    return(
        <div className="page-wrapper">
            <Helmet>
                <title>CSV - LydiaRx</title>
                <meta property="description" content="Ensure the integrity and reliability of your critical systems with LydiaRx's computer system validation services. From design to qualification, our expert solutions meet regulatory requirements, setting the benchmark for compliance in the pharmaceutical industry." />
                <meta property="og:title" content="Computer System Validation - LydiaRx Solution" />
                <meta property="og:description" content="Ensure the integrity and reliability of your critical systems with LydiaRx's computer system validation services. From design to qualification, our expert solutions meet regulatory requirements, setting the benchmark for compliance in the pharmaceutical industry." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-medium">
                                <h1>
                                    Computer System Validation (CSV)
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
                                            Our expertise lies in quality oversight, information technology, and computer software validation. 
                                            Our trained experts excel in understanding the intricacies of operations within tight timelines, 
                                            particularly for clients expanding their laboratory capacities and implementing digital systems. 
                                            Unlike mere checkbox activities, our model accounts for the sequence of operations, ensuring comprehensive solutions. 
                                            We cater to a diverse clientele including Contract Development and Manufacturing Organizations (CDMOs), 
                                            GxP Software Providers, Clinical Startups, and the fast-growing Biotech & Pharma sector. 
                                            Our services encompass CSV frameworks, quality oversight, implementation and remediation of lab and enterprise systems, 
                                            as well as ensuring data integrity throughout.
                                        </p>
                                    </div>
                                    <div className="margin-vertical margin-xxlarge">
                                        {/* <div className="about_image-wrapper">
                                            <img src={AboutImage} className="about_image"/>
                                        </div> */}
                                    </div>
                                    <div className="max-width-large">
                                        <h4>Develop CSV frameworks</h4  >
                                        <ul style={{margin: "2rem"}}>
                                            <li>CSV program SOP</li>
                                            <li>
                                                CSV lifecycle documentation templates 
                                                (e.g. SIA, URS, FRA, validation plan, 
                                                validation summary report, qualification plans, RTM)
                                            </li>
                                            <li> 
                                                CSV supporting procedures (backup and
                                                restore, archival, business continuity,
                                                disaster recovery, audit trail
                                                management, access management,
                                                system admin procedures)
                                            </li>                                      
                                        </ul>
                                    </div>
                                    <div className="padding-bottom"/>
                                    <div className="max-width-large">
                                        <h4>Validate computerized systems</h4  >
                                        <ul style={{margin: "2rem"}}>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Laboratory systems</span> (e.g. LIMS, unicorn,
                                                empower, ELN, agilent, envision,
                                                softmax, lightcycler, solovpe)</li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Manufacturing systems</span> (e.g DeltaV, MES)
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Document management systems</span> (e.g.veeva, mastercontrol, compliancequest)
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Other Enterprise Systems</span> (e.g maximo, LMS, ERP, vaisala, Vbas)
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Cloud systems</span> (e.g. docusign, oracle, azure, AWS)
                                            </li>
                                            <li>
                                                <span style={{fontWeight: "bold"}}>Standalone computerized equipment</span>
                                            </li>                 
                                        </ul>
                                    </div>
                                    <div className="padding-bottom"/>
                                    <div className="max-width-large">
                                        <h4>Implement data integrity program</h4  >
                                        <ul style={{margin: "2rem"}}>
                                            <li>
                                                Develop data integrity procedures (e.g DI
                                                policy, data management, audit trail review,
                                                data flow mapping sops)
                                            </li>
                                            <li>
                                            Develop data maps and establish data criticality standards
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
export default CsvPage