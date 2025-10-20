import { assetHref } from '../utils.js';

export const renderPortfolioPage = () => `
    <main class="main-wrapper">
        <section class="section_page_header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            Our Portfolio
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Forging the future of life sciences.</p>
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
                                <p>LydiaRx Venture Studio is not waiting for the future; we are actively building it. Our initial portfolio is currently being forged within our internal incubation pipeline, a deliberate strategy designed to transform our core theses into tangible, high-potential ventures. This foundational stage is supported by a powerful combination of our own capital and strategic partnerships with technology leaders like <strong>Axiologic Research</strong> (www.axiologic.net) and <strong>Cuomo Technologies</strong> of Switzerland. Our progress is significantly advanced by our integral role in major research initiatives, most notably the <strong>Horizon Europe Achilles project</strong> (www.achilles-project.eu), which allows us to validate our technology and de-risk business models before launching them as independent, investment-ready companies.</p>
                                <p>Every project we undertake is built upon our proprietary <strong>LydiaRx AI R&D Studio</strong>, a platform whose core architecture evolved directly from the open-source research of the Achilles project. This ensures a common technological backbone that is secure, compliant, and scalable. Our current development efforts are channeled into four synergistic domains. We are engineering the future of <strong>AI-Assisted R&D</strong>, creating a platform where scientists can build their own validated software workflows. In parallel, our work in <strong>Strategic & Deep Research</strong> is producing AI agents designed to convert the overwhelming volume of data into predictive, actionable intelligence. This extends into our focus on <strong>Regulatory & Quality Assurance</strong>, where we are automating GxP compliance to shift it from a costly bottleneck to a competitive advantage. Culminating our vision, we are laying the groundwork for <strong>Autonomous Drug Discovery</strong>, integrating our AI platform with automated lab hardware to create a true, closed-loop engine for scientific breakthroughs.</p>
                                <p>These incubated ventures represent the first wave of innovation emerging from the LydiaRx ecosystem. They are the tangible proof of our strategy in action, being meticulously prepared for their spin-off. We invite interested investors and strategic partners to connect with us to learn more about our pipeline and the future co-investment opportunities that will arise as these companies mature.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="ai-assisted-rd">Engineering the Future of Life Science Software</h2>
                                <div class="padding-bottom"></div>
                                <p>The software development paradigm is undergoing a fundamental transformation. For too long, the pharmaceutical and life sciences industry has been constrained by rigid, monolithic systems. We are now entering the era of native AI development, centered on intelligent agents, which promises a future where organizations can create custom solutions perfectly aligned with their unique scientific and operational needs.</p>
                                <p>At LydiaRX, we are at the forefront of this evolution. Our ambition is crystallized in the <strong>AI R&D Studio</strong>, a foundational platform designed to support this new paradigm, not to create another isolated system. Evolved from the open-source research of the Horizon Europe Achilles project (https://www.achilles-project.eu/), our studio is engineered for deep and secure integration with your core infrastructure—whether it's an Electronic Lab Notebook (ELN), a Laboratory Information Management System (LIMS), or a Quality Management System (QMS).</p>
                                <p>Our approach is based on Specification-Driven Development and Software-Executable Standard Operating Procedures (SOPs). This allows your teams to translate complex scientific and regulatory protocols directly into validated, automated, and compliant software workflows. We view the AI R&D Studio not just as a tool, but as the cornerstone of a vibrant ecosystem: a marketplace where innovative AI-driven applications, Minimum Viable Products (MVPs), and specialized tools can be shared, discovered, and implemented by researchers, hospitals, and pharmaceutical companies worldwide.</p>
                                <p>The potential is to give scientists the superpower of doing <strong>research</strong> or building their own <strong>custom software tools with vibe coding</strong>. The platform enables them to generate hypotheses, analyze patents, and synthesize scientific literature in minutes, not months. They can design drug candidates with unprecedented speed and precision. The AI R&D Studio increases the productivity of research labs, guarantees the quality of AI-ready data, and provides the flexibility to build custom, automated workflows in days, not years.</p>
                                <p>The LydiaRX AI R&D Studio is the platform that accelerates AI adoption in the pharmaceutical industry in ways that are otherwise impossible. Through our specialized focus on pharmaceutical research, we ensure that we are the top partner for our clients.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="deep-research">From Information Overload to Strategic Insight</h2>
                                <div class="padding-bottom"></div>
                                <p>In the fast-paced world of pharmaceutical science and policy, staying one step ahead is not just an advantage, but a necessity. However, researchers and regulators are often overwhelmed by a huge volume of data, publications, and legislative updates, making it nearly impossible to extract strategic intelligence from the noise. Standard research tools offer a partial solution, but they lack the nuance and customization required for high-stakes decisions.</p>
                                <p>LydiaRX is pioneering a new class of research systems based on intelligent agents, built on our AI R&D Studio. We are moving beyond simple passive information retrieval to active and intelligent inquiry. Our platform facilitates the creation of <strong>custom research agents</strong>, trained by your experts and guided by your organization's specific methodologies and SOPs.</p>
                                <p>A prime example is our work in monitoring the dynamic landscape between science and public policy. Our AI-based platform systematically ingests content from diverse sources—from regulatory documents to scientific journals—and precisely extracts the information relevant to the end-user's strategic objectives. This is Deep Research reimagined: a collaborative process where human expertise directs the power of AI to uncover critical insights, track emerging trends, and inform decisions with unparalleled precision and speed.</p>
                                <p>The business outcomes of this approach are transformative, repositioning the entire organization from a reactive to a proactive posture. It allows you to <strong>anticipate market dynamics</strong>, moving from analyzing historical data to predicting future demand curves. It helps you <strong>de-risk R&D</strong> by identifying regulatory hurdles or competitive threats before they can jeopardize a multi-billion dollar project. Last but not least, it <strong>accelerates scientific discovery</strong> by automating the analysis of specialized literature, freeing your researchers to focus on innovation and experimentation.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="regulatory-quality">Navigating Compliance with AI-Driven Assurance</h2>
                                <div class="padding-bottom"></div>
                                <p>The promise of AI to revolutionize medicine is limited by a fundamental and deeply entrenched reality: the GxP imperative. The GxP guidelines—encompassing Good Manufacturing Practice (GMP), Good Clinical Practice (GCP), and Good Laboratory Practice (GLP)—are the non-negotiable foundation of the pharmaceutical industry. Mandated by regulatory bodies like the FDA and EMA, these principles are essential for patient safety, product quality, and data integrity.</p>
                                <p>While AI is making extraordinary progress in early, non-regulated stages such as target identification, these innovations inevitably hit a "compliance wall" as they advance into GxP-governed domains. Regulations like 21 CFR Part 11 were designed for a pre-AI world, mandating strict, auditable controls that are inherently at odds with the dynamic nature of modern AI systems.</p>
                                <p>In this environment, software system validation is a critical, intensive, and mandatory process. Quality Managers and Internal Auditors bear the immense responsibility of ensuring that every component of the digital infrastructure is compliant and audit-ready. LydiaRX addresses this challenge by extending the capabilities of the AI R&D Studio to the domain of Quality Assurance (QA).</p>
                                <p>Our platform enables organizations to build <strong>custom AI agents dedicated to the validation lifecycle</strong>. These intelligent agents act as tireless partners for your quality and audit teams. Configured to understand both internal quality policies and external regulatory frameworks, these agents can automate evidence gathering, continuously monitor system configurations for compliance deviations, and streamline the generation of validation documentation.</p>
                                <p>By integrating intelligent automation into your quality processes, we help you reduce risks and transform compliance from a costly obligation into a strategic asset. The potential is to turn compliance from a costly bottleneck into a competitive advantage. This can eliminate human error, reduce the time spent on repetitive administrative tasks by up to 90%, and ensure flawless audits, saving millions in potential fines and delays.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="drug-discovery">Accelerating Breakthroughs with AI</h2>
                                <div class="padding-bottom"></div>
                                <p>The ultimate goal of pharmaceutical research is the discovery and development of life-changing therapies. Artificial Intelligence holds the key to dramatically accelerating this journey, but its power has often been accessible only to data scientists. The LydiaRX AI R&D Studio is designed to change that, evolving from a simple developer's tool to an indispensable assistant for the research scientist.</p>
                                <p>We envision a future where every researcher can leverage sophisticated Machine Learning (ML) models without needing expertise in computational science. The AI R&D Studio provides an intuitive and powerful environment for efficiently training, fine-tuning, and deploying ML models tailored to specific challenges across the entire drug discovery pipeline—from target identification and hypothesis generation to lead optimization and <em>in silico</em> toxicology screening.</p>
                                <p><strong>Trust by design</strong> is our fundamental principle. The platform can be deployed on-premise or in your private cloud, with client-owned encryption keys. Your data never leaves your control. By facilitating access to cutting-edge AI, LydiaRX enables scientific teams to explore more complex biological questions and shorten the path from initial concept to clinical candidate.</p>
                                <p>LydiaRX AI R&D Studio aims to become a <strong>comprehensive operating system for the regulated life sciences</strong>—an integrated, end-to-end platform that manages the entire data and workflow lifecycle under a persistent state of GxP compliance. We are replacing the current fragmented landscape of siloed solutions for R&D, clinical operations, and quality management with a single, unified architecture.</p>
                                <p>The platform is <strong>"GxP-native,"</strong> a term signifying that compliance is not an add-on but is woven into its very design. This approach fundamentally shifts the industry paradigm from periodic, costly validations to a state of continuous, automated compliance readiness, building a faster, more intelligent path to the next generation of medicine.</p>
                                <p>The vision for artificial intelligence in science is reaching its next transformative step: the direct integration of AI with autonomous, self-driving laboratories.</p>
                                <p>To date, AI technology has served as a powerful digital brain for analysis, simulation, and prediction. However, for the industry to truly advance, the gap between digital insight and physical discovery must be bridged. By connecting AI to an automated lab, the technology is transformed from a passive tool into an active research scientist.</p>
                                <p>This integration aims to create fully autonomous, end-to-end discovery platforms. The AI no longer just suggests experiments—it designs, executes, and learns from them in a continuous, 24/7 loop. This represents the physical manifestation of AI's intelligence and is a critical piece of the puzzle for the future of accelerated R&D.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
`;
