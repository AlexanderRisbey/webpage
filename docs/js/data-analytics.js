
const renderDataAnalyticsPage = () => {
    const dataAnalyticsPageContent = `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>
                            Data & Analytics
                        </h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">Empowering pharma supply chains through data excellence</p>
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
                                <p>
                                    In the dynamic landscape of the pharmaceutical industry, effective supply chain management is paramount. However, it's often fraught with challenges such as stringent regulatory requirements, complex distribution networks, and the need for stringent quality control measures. In such a high-stakes environment, the ability to harness data effectively becomes a strategic imperative. That's where our Data & Analysis Services come into play, offering tailored solutions to navigate these complexities and drive operational excellence.
                                </p>
                            </div>
                            <div class="margin-vertical margin-xxlarge">
                            </div>
                            <div class="max-width-large">
                                <h4>Key issues in pharmaceutical supply chain management include:</h4  >
                                <ul style="margin: 2rem">
                                    <li>
                                        <span style="font-weight: bold;">Regulatory Compliance: </span>Adhering to various regulatory standards across different regions demands meticulous tracking and documentation of every stage of the supply chain.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Product Authentication: </span>Ensuring the authenticity and integrity of pharmaceutical products throughout the supply chain is critical to combating counterfeit drugs and safeguarding public health.
                                    </li>
                                    <li> 
                                        <span style="font-weight: bold;">Inventory Management: </span>Optimizing inventory levels while minimizing the risk of stockouts or excess inventory is a delicate balance that requires real-time visibility and predictive analytics.
                                    </li>                                      
                                    <li> 
                                        <span style="font-weight: bold;">Demand Forecasting: </span>Accurately forecasting demand for pharmaceutical products is challenging due to factors such as seasonality, market trends, and unforeseen events like pandemics or regulatory changes.
                                    </li>                                      
                                </ul>
                            </div>
                            <div class="padding-bottom"></div>
                            <div class="max-width-large">
                                <h4>Our Data & Analysis Services address these challenges head-on, offering a range of solutions tailored to the unique needs of the pharmaceutical industry:</h4  >
                                <ul style="margin: 2rem">
                                    <li>
                                        <span style="font-weight: bold;">Data Visualizations: </span>Transforming complex datasets into intuitive visual representations empowers stakeholders to gain actionable insights at a glance, facilitating informed decision-making.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Real-Time Monitoring: </span>Track key metrics and performance indicators in real-time to proactively identify and address issues before they escalate, ensuring operational efficiency and compliance.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Trend Analysis: </span>Uncover patterns and trends within your data to anticipate market shifts, optimize resource allocation, and capitalize on emerging opportunities.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Predictive Modeling: </span>Leverage advanced analytics and machine learning algorithms to forecast demand, optimize inventory levels, and mitigate supply chain risks.
                                    </li>
                                    <li>
                                        <span style="font-weight: bold;">Custom Analytics Solutions: </span>Our team of experts works closely with you to develop custom analytics solutions tailored to your specific business objectives and operational challenges.
                                    </li>              
                                </ul>
                            </div>
                            <div class="padding-bottom"></div>
                            <div class="max-width-large">
                                <p>
                                    With our Data & Analysis Services, you can harness the power of data to drive innovation, enhance efficiency, and maintain a competitive edge in the fast-paced world of pharmaceutical supply chain management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
    document.getElementById('root').insertAdjacentHTML('beforeend', dataAnalyticsPageContent);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('data-analytics.html')) {
        renderDataAnalyticsPage();
    }
});
