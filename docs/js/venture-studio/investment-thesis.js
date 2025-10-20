import { assetHref } from '../utils.js';

export const renderInvestmentThesisPage = () => `
    <main class="main-wrapper">
        <section class="section_page_header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            Investment Thesis
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Investing in the future of AI-native life sciences.</p>
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
                                <h2 id="ai-native-lab">Next-Generation R&D Platforms</h2>
                                <div class="padding-bottom"></div>
                                <p>The life sciences industry has long been constrained by rigid, monolithic software systems that hinder innovation. We are at the forefront of a fundamental paradigm shift toward native AI development, centered on intelligent agents. Our <strong>LydiaRx AI R&D Studio</strong>, a platform evolved from the open-source research of the Horizon Europe Achilles project, is the foundation for this new era. It is not another isolated system, but a core platform engineered for deep integration with existing infrastructure like ELNs and LIMSs. Through Specification-Driven Development, we empower scientific teams to translate complex protocols directly into validated, automated, and compliant software workflows. This transforms scientists into creators, giving them the ability to build custom tools in days, not years, dramatically increasing research productivity and ensuring that all data generated is AI-ready from its inception.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="strategic-intelligence">AI for Market and Policy Insight</h2>
                                <div class="padding-bottom"></div>
                                <p>In the high-stakes world of pharmaceutical science, strategic foresight is critical, yet researchers and regulators are drowning in a sea of data, publications, and legislative updates. Standard tools offer only partial solutions. We are pioneering a new class of research systems, built on our AI R&D Studio, that move beyond passive search to active, intelligent inquiry. Our platform enables organizations to build and train custom research agents guided by their own expert methodologies. These agents systematically ingest and analyze diverse content, from regulatory documents to scientific journals, to extract precise, relevant intelligence. The business outcome is transformative: it repositions the entire organization from a reactive to a proactive posture, enabling the anticipation of market dynamics, the de-risking of multi-billion dollar R&D projects, and the acceleration of scientific discovery.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="compliance-as-a-competitive-edge">AI in GxP and Quality Assurance</h2>
                                <div class="padding-bottom"></div>
                                <p>The promise of AI in medicine inevitably collides with the non-negotiable reality of the GxP imperative. Regulations designed for a pre-AI world create a "compliance wall" that stifles innovation, making software system validation an intensive and costly burden for Quality and Audit teams. LydiaRx addresses this challenge head-on by extending our AI R&D Studio into the domain of Quality Assurance. We enable organizations to build custom AI agents dedicated to the validation lifecycle. These intelligent agents act as tireless partners for quality teams, configured to automate evidence gathering, continuously monitor systems for compliance deviations, and streamline the generation of validation documentation. By embedding intelligent automation into quality processes, we transform compliance from a costly bottleneck into a powerful strategic asset and a competitive advantage.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="autonomous-discovery">The Self-Driving Laboratory</h2>
                                <div class="padding-bottom"></div>
                                <p>Our ultimate goal is to accelerate the path to life-changing therapies. The LydiaRx AI R&D Studio makes sophisticated machine learning accessible to every research scientist, enabling them to train and deploy models across the entire drug discovery pipeline. Built on a principle of "trust by design," our platform can be deployed on-premise or in a private cloud, ensuring a client's sensitive data never leaves their control. But our vision extends further. We are building the comprehensive operating system for the regulated life sciences under a persistent state of GxP compliance. The next transformative step is to bridge the gap between digital insight and physical discovery. By integrating our AI "brain" with automated, self-driving laboratories, we will create a system where AI no longer just suggests experiments—it designs, executes, and learns from them in a continuous, 24/7 loop. This is the future of accelerated R&D, and we are building its foundation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
`;
