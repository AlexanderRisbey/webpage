import {assetHref} from './utils.js';

export const renderAiStudioPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_page_header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            LydiaRx AI R&D Studio
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">AI-native R&D infrastructure for regulated pharmaceutical environments.</p>
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
                                <h2>Overview</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    AI R&D Studio is LydiaRx's integrated platform for pharmaceutical research and development, combining three specialized applications: Discovery Studio for research acceleration, GxP Copilot Suite for compliance automation, and R&D Ops Platform for operational orchestration. Built specifically for regulated environments, the platform addresses the pharmaceutical industry's core challenge of maintaining scientific rigor and regulatory compliance while compressing development timelines.
                                </p>
                            </div>

                            <div class="margin-vertical margin-xxlarge">
                                <!-- <div class="about_image-wrapper">
                                    <div class="ai-studio-image">
                                        AI R&D Studio Platform
                                    </div>
                                </div> -->
                            </div>

                            <div class="max-width-large">
                                <h2>The R&D Challenge</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Pharmaceutical R&D operates under unique constraints. Scientists dedicate substantial time to literature review, patent analysis, and hypothesis validation. Regulatory teams manually process extensive documentation for each submission, introducing delays and compliance risk. Disconnected systems across research, quality, and regulatory functions create data silos that impede collaboration. The cost of these inefficiencies is measured in extended development timelines and billions of dollars per approved therapeutic.
                                </p>
                                <div class="padding-bottom"></div>
                            </div>

                            <div class="max-width-large">
                                <div class="padding-bottom small"></div>
                                <h2>Platform Components</h2>
                                <div class="padding-bottom"></div>

                                <h3>Discovery Studio</h3>
                                <div class="padding-bottom small"></div>
                                <p>
                                    Discovery Studio accelerates early-stage research through AI-powered literature synthesis, patent landscape analysis, and hypothesis generation. Researchers interact with the system in natural language, receiving synthesized insights with full citation trails for regulatory documentation. The platform identifies knowledge gaps, suggests experimental approaches, and flags potential IP conflicts. All interactions maintain audit trails compatible with regulatory submission requirements.
                                </p>

                                <div class="padding-bottom small"></div>

                                <h3>GxP Copilot Suite</h3>
                                <div class="padding-bottom small"></div>
                                <p>
                                    GxP Copilot Suite automates compliance-critical documentation across manufacturing, quality control, and regulatory submission workflows. The system generates batch records, deviation reports, validation protocols, and regulatory dossier sections while maintaining GxP compliance standards. Compliance officers review and approve AI-generated content, compressing documentation cycles while reducing errors. The system maintains complete version control and change tracking for audit purposes.
                                </p>

                                <div class="padding-bottom small"></div>

                                <h3>R&D Ops Platform</h3>
                                <div class="padding-bottom small"></div>
                                <p>
                                    R&D Ops Platform creates an intelligent integration layer connecting laboratory information management systems, electronic lab notebooks, quality management systems, and regulatory information management platforms. The platform ensures data consistency, automates cross-system workflows, and surfaces operational insights. Leadership gains visibility into research timelines, resource allocation, and compliance status across the R&D portfolio.
                                </p>
                                <div class="padding-bottom"></div>
                            </div>

                            <div class="max-width-large">
                                <div class="padding-bottom small"></div>
                                <h2>Implementation and Compliance</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    AI R&D Studio is designed to meet GxP compliance requirements and integrates with existing pharmaceutical infrastructure through standard APIs. The platform supports both cloud and on-premise deployment, with security features including role-based access control, data encryption, and validated development processes. LydiaRx provides implementation support covering system integration, validation, and user training, with teams experienced in pharmaceutical quality systems and regulatory requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}
