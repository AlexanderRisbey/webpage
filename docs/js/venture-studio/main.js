import { assetHref } from '../utils.js';

export const renderVentureStudioPage = () => `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            Venture Studio
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Building the future of life sciences, together.</p>
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
                                <h2 id="building-together">Co-Building the Future of Life Science</h2>
                                <div class="padding-bottom"></div>
                                <p>LydiaRx is launching a Venture Studio to partner with researchers and entrepreneurs in the life sciences. Our mission is to build impactful, market-focused spinoffs by combining your scientific vision with our strategic and operational expertise.</p>
                                <p>We understand the challenges of translating deep-tech research into a viable business. Our model is designed to significantly de-risk this process. We collaborate with our partners to structure and secure financing for joint R&D projects, often leveraging public-private partnerships, allowing us to validate both the scientific and market potential of an idea before committing to a full-scale venture.</p>
                                <p>Validated concepts follow one of two paths: they are either incubated within LydiaRx’s operational structure or launched as high-growth spin-off companies. In the spin-off model, we ensure the founding innovators lead the way with significant equity. We are focused on ventures built upon our AI R&D Studio, seeking innovations in AI-assisted software development for labs, intelligent agents for strategic research, automated systems for GxP regulatory assurance, and the pioneering of fully autonomous drug discovery laboratories.</p>
                                <p>The LydiaRx Venture Studio initiative is currently in a formative stage as we define our operational framework and consolidate budgets. However, we are ready to move quickly for the right opportunities. We encourage interested researchers and entrepreneurs to connect with us now, as compelling partnerships can accelerate our timeline and help shape our foundational ventures.</p>
                                <p>If you have an idea that can redefine the future of medicine, let’s explore how we can build it together.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="studio-advantage">The Venture Studio Advantage</h2>
                                <div class="padding-bottom"></div>
                                <p>Traditional venture capital often places bets on fledgling ideas, while incubators provide generalized guidance. The Venture Studio model is fundamentally different. We are co-founders. We don't just invest; we actively build companies from the ground up. By centralizing key functions—strategy, engineering, regulatory guidance, and business development—we provide an unparalleled launchpad for innovation. This results in a higher success rate, a shorter time-to-market, and more capital-efficient growth compared to standalone startups.</p>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="our-process">From Lab to Launch: Our Process</h2>
                                <div class="padding-bottom"></div>
                                <p>Our structured approach transforms nascent ideas into high-growth, independent companies.</p>
                                <ul>
                                    <li><strong>Phase 1: Ideation & Validation:</strong> We partner with innovators to rigorously analyze ideas. This includes market validation, intellectual property assessment, and defining a clear path to commercialization.</li>
                                    <li><strong>Phase 2: Co-Creation & Seed Funding:</strong> We structure and secure initial financing for joint R&D projects, often leveraging public-private partnerships. During this phase, we build the Minimum Viable Product (MVP) on our AI R&D Studio platform.</li>
                                    <li><strong>Phase 3: Incubation & Growth:</strong> Validated concepts are either incubated within LydiaRx’s operational structure or prepared for launch as a spin-off. We build the core team, refine the business model, and establish initial customer traction.</li>
                                    <li><strong>Phase 4: Spin-Off & Scale:</strong> The new company is launched as a separate legal entity. We ensure the founding innovators lead the way with significant equity, and we provide ongoing strategic support to help them secure Series A funding and beyond.</li>
                                </ul>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="de-risking-innovation">De-Risking Innovation, Maximizing Impact</h2>
                                <div class="padding-bottom"></div>
                                <p>Our greatest asset in de-risking new ventures is the <strong>LydiaRx AI R&D Studio</strong>. Every company we build is founded upon this GxP-native platform. This immediately solves three critical early-stage challenges:</p>
                                <ul>
                                    <li><strong>Technical Risk:</strong> Ventures don't start from scratch. They build on a validated, robust, and compliant technological foundation, reducing engineering timelines from years to months.</li>
                                    <li><strong>Regulatory Risk:</strong> Compliance is embedded in our platform's DNA. This "GxP-native" approach ensures ventures are audit-ready from inception, avoiding costly refactoring and delays down the line.</li>
                                    <li><strong>Financial Risk:</strong> By leveraging a shared platform and expertise, we build more with less capital. Our focus on securing non-dilutive funding (e.g., grants) in the early stages protects equity for founders and early investors.</li>
                                </ul>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="shared-resources">Shared Expertise and Infrastructure</h2>
                                <div class="padding-bottom"></div>
                                <p>When you partner with LydiaRx Venture Studio, you gain more than a financial backer. You gain a dedicated team and a powerful ecosystem. Our partners receive:</p>
                                <ul>
                                    <li><strong>Full access to the LydiaRx AI R&D Studio</strong> and its development capabilities.</li>
                                    <li><strong>Hands-on guidance</strong> from our experts in GxP compliance, quality assurance, and regulatory submissions (FDA, EMA).</li>
                                    <li><strong>Strategic support</strong> in business development, market positioning, and enterprise sales.</li>
                                    <li><strong>A direct line</strong> to our network of industry leaders, clinical partners, and venture capital firms.</li>
                                </ul>

                                <div class="margin-vertical margin-xxlarge"></div>

                                <h2 id="join-us">A Call to Pioneers</h2>
                                <div class="padding-bottom"></div>
                                <p>The LydiaRx Venture Studio initiative is currently in a formative stage as we define our operational framework and consolidate budgets. However, we are ready to move quickly for the right opportunities. We are actively seeking partnerships with:</p>
                                <ul>
                                    <li><strong>Academic Researchers</strong> with breakthrough discoveries ready for commercialization.</li>
                                    <li><strong>Industry Experts</strong> who have identified a critical, unsolved problem.</li>
                                    <li><strong>Early-stage Entrepreneurs</strong> looking for a co-founding partner to accelerate their vision.</li>
                                </ul>
                                <p>If you have an idea that can redefine the future of medicine, let’s explore how we can build it together. Compelling partnerships will accelerate our timeline and help shape our foundational ventures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
`;
