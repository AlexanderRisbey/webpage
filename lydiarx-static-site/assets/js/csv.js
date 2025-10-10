
const renderCsvPage = () => {
    const csvPageContent = `
    <main class="main-wrapper">
        <section class="section_product-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>
                            Computer System Validation (CSV)
                        </h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">Digital compliance for pharma and fast growing biotech</p>
                    </div>
                    <div class="ps_header_shapes">
                        <img src="../assets/images/LydiaRx_web-art.svg" class="ps_header-image" alt="LydiaRx Logo Art"/>
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
                            <div class="margin-vertical margin-xxlarge">
                            </div>
                            <div class="max-width-large">
                                <h4>Develop CSV frameworks</h4  >
                                <ul style="margin: 2rem">
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
                            <div class="padding-bottom"></div>
                            <div class="max-width-large">
                                <h4>Validate computerized systems</h4  >
                                <ul style="margin: 2rem">
                                    <li>
                                        <span style="font-weight: bold;">Laboratory systems</span> (e.g. LIMS, unicorn,
                                        empower, ELN, agilent, envision,
                                        softmax, lightcycler, solovpe)</li>
                                    <li>
                                        <span style="font-weight: bold;">Manufacturing systems</span> (e.g DeltaV, MES)
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Document management systems</span> (e.g.veeva, mastercontrol, compliancequest)
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Other Enterprise Systems</span> (e.g maximo, LMS, ERP, vaisala, Vbas)
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Cloud systems</span> (e.g. docusign, oracle, azure, AWS)
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Standalone computerized equipment</span>
                                    </li>                 
                                </ul>
                            </div>
                            <div class="padding-bottom"></div>
                            <div class="max-width-large">
                                <h4>Implement data integrity program</h4  >
                                <ul style="margin: 2rem">
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
    `;
    document.getElementById('root').insertAdjacentHTML('beforeend', csvPageContent);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('csv.html')) {
        renderCsvPage();
    }
});
