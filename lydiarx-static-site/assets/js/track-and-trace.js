const renderTrackAndTracePage = () => {
    const trackAndTracePageContent = `
    <main class="main-wrapper">
        <section class="section_product-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>
                            Track & Trace
                        </h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">Safeguarding health through transparent supply chains</p>
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
                                <p>
                                Introducing our advanced Track and Trace solution, a sophisticated pharmaceutical track and trace system poised to redefine industry standards. Rooted in blockchain technology, our platform adopts a decentralized framework for meticulously tracking drugs from manufacturing to dispensation, ensuring unparalleled transparency and security throughout the supply chain.
                                <br/><br/>
                                Focused on paramount safety and transparency, our solution provides end users with the means to verify the authenticity and safety of purchased drugs, instilling unwavering confidence in every transaction.
                                <br/><br/>
                                With a commitment to professionalism and innovation, we deliver a robust Track and Trace solution designed to meet the evolving needs of the pharmaceutical sector.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-how-it-works">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-vertical padding-huge">
                        <div style="display:flex; align-items: center; justify-content: center;">
                            <h1 >How it works</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-about">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-vertical padding-huge">
                        <div class="layout-2-col" >
                            <div class="about-image-wrapper">
                                <img src="../assets/images/LydiaRx_aggregation.jpg" class="about-image"/>
                            </div>          
                            <div class="about-content">
                                <h2>
                                    Manufacturing <br />
                                </h2>
                                <div class="margin-top margin-small">
                                    <p>
                                    LydiaRx's pharmaceutical track and trace system commences with the integration of a DataMatrix onto each drug box,
                                    accompanied by a non-tampering seal, ensuring product security and facilitating seamless traceability throughout
                                    the product's lifecycle, from production through the supply chain to the end user. 
                                    <br />
                                    Simultaneously, the system initiates the creation of a digital twin, which is then added to the ledger.
                                    This digital twin serves as the cornerstone for tracking, as data is continually appended to it,
                                    enabling comprehensive traceability throughout the pharmaceutical distribution process. 
                                    </p>
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
                        <div class="layout-2-col is-for-meet-os">
                            <div class="meet-os-content">
                                <div class="max-width-small">
                                    <h2>
                                        Aggregation
                                    </h2>
                                </div>
                                <div class="margin-top margin-small">
                                    <p>
                                        To efficiently track individual products in the supply chain,
                                        they are aggregated to the parent container.
                                        This enables a scan of the parent to update data for all its children,
                                        simplifying tracking and management. This step can be repeated as needed,
                                        such as aggregation to a distribution box, and then further aggregation to
                                        palletized distribution boxes, ensuring comprehensive tracking at every stage of the journey. 
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div class="meet-os-image-wrapper">
                                <img src="../assets/images/LydiaRx_aggregation.jpg" class="meet-os-image" alt="Aggregation"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-about">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-vertical padding-huge">
                        <div class="layout-2-col">
                            <div class="about-image-wrapper">
                                <img src="../assets/images/LydiaRx_transport_by_marcinjozwiak.jpg" class="about-image" alt="Transport"/>
                            </div>
                            <div class="about-content">
                                <h2>
                                    Transport <br />
                                </h2>
                                <div class="margin-top margin-small">
                                    <p>
                                        Prior to loading onto vehicles, each pallet is scanned, marking its departure from the location.
                                        Upon arrival, another scan ensures accurate tracking of the shipment's journey.
                                        Customizable transport data can be integrated.
                                        Thanks to LydiaRx, vehicles benefit from minimized holding times at borders,
                                        streamlining the entire transportation process for enhanced efficiency and reliability.<br />
                                    </p>
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
                        <div class="layout-2-col is-for-meet-os">
                            <div class="meet-os-content">
                                <div class="max-width-small">
                                    <h2>
                                    <strong>Disaggregation</strong>
                                    <br />
                                    </h2>
                                </div>
                                <div class="margin-top margin-small">
                                    <p>
                                    Disaggregation occurs when parent containers are opened, allowing for the separation of individual products. 
                                    This essential step ensures precise tracking and management as items progress through the supply chain. 
                                    By disaggregating, updated data for each product is accurately recorded, 
                                    maintaining visibility and control over the process, 
                                    particularly as goods transition between different stages of distribution. 
                                    <br />
                                    </p>
                                </div>
                            </div>
                            <div class="meet-os-image-wrapper">
                                <img src="../assets/images/LydiaRx_disaggregation.jpg" class="meet-os-image" alt="Disaggregation"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-about">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-vertical padding-huge">
                        <div class="layout-2-col">
                            <div class="about-image-wrapper">
                                <img src="../assets/images/LydiaRx_dispensation.jpg" class="about-image" alt="Dispensation"/>
                            </div>
                            <div class="about-content">
                                <h2>
                                    Dispensation <br />
                                </h2>
                                <div class="margin-top margin-small">
                                    <p>
                                    The track and trace process concludes at dispensation, whether it be in a hospital or pharmacy setting. 
                                    Here, the final scan marks the end of tracking for the specific product, 
                                    enabling consumers to access comprehensive data about its journey from the factory door to dispensation. 
                                    This last scan ensures transparency and accountability, 
                                    empowering consumers with valuable insights into the product's history and ensuring trust in its quality and authenticity. 
                                    <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
    document.getElementById('root').insertAdjacentHTML('beforeend', trackAndTracePageContent);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('track-and-trace.html')) {
        renderTrackAndTracePage();
    }
});