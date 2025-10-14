import { assetHref } from './utils.js';

export const renderEpiPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            Electronic Product Information (ePI)
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Effortless accessibility, infinite languages, zero recall worries: Revolutionize information dissemination with ePI.</p>
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
                                <h2>Introduction</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Introducing digital product information through mobile apps or digital platforms may seem commonplace, yet its adoption remains largely unexplored by many. Fortunately, for those who frequently seek information from paper or digital leaflets—patients, caregivers, and healthcare providers—the necessity of clear, accessible information is paramount.
                                </p>
                            </div>
                            <div class="margin-vertical margin-xxlarge"></div>
                            <div class="about_image-wrapper">
                                <img src="${assetHref('images/LydiaRx_ePI.jpeg')}" class="epi_image" alt="Person checking the ePI of a product"/>
                            </div>
                            <div class="margin-vertical margin-xxlarge"></div>
                            <div class="max-width-large">
                                <h2>LydiaRx's ePI Solution</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Traditional paper leaflets present challenges—difficult to decipher, cumbersome to navigate, and inconvenient to retain. While they convey regulated data, they often fall short of delivering a user-centric experience.
                                </p>
                                <p>
                                    Enter LydiaRx's ePI solution—an innovative response to the healthcare sector's demand for intuitive medicine leaflets without compromising on user experience, security, or accuracy.
                                </p>
                                <p>
                                    Developed collaboratively by pharmaceutical firms, patient groups, and technology and regulatory experts, ePI by LydiaRx addresses critical needs.
                                </p>
                                <div class="padding-bottom"></div>
                                <h4>Key Features</h4>
                                <ul  style="margin: 2rem">
                                    <li>
                                    Providing patients, healthcare professionals, and caregivers with instant access to up-to-date, trustworthy product information free of charge.
                                    </li>
                                    <li>
                                    Offering manufacturers an industry-wide solution compliant with regulatory standards, ensuring a substantial return on investment.
                                    </li>
                                    <li>
                                    Enabling dynamic updates through a secure network, ensuring access to the latest information—unlike static PDFs on websites or centralized repositories.
                                    </li>
                                    <li>
                                    Fostering industry collaboration to establish a standardized infrastructure without reliance on proprietary technology or vendor constraints.
                                    </li>
                                    <li>
                                    Reducing maintenance costs, mitigating risks, and incorporating valuable insights from patient organizations.
                                    </li>
                                    <li>
                                    Leveraging serialization standards and transforming GS1 2D DataMatrix into a digital twin, enhancing product identification and verification processes.
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
}

export const renderAiStudioPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            LydiaRx AI R&D Studio
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Accelerate discovery, ensure compliance, automate operations with intelligent copilots built for life sciences.</p>
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
                                <h2>Introduction</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Implementing AI solutions in regulated R&D environments may seem straightforward, yet its effective adoption remains largely unexplored by many pharmaceutical companies. For those who frequently navigate complex research workflows—scientists, regulatory professionals, and R&D leaders—the necessity of intelligent, compliant AI tools is paramount.
                                </p>
                            </div>
                            <div class="margin-vertical margin-xxlarge"></div>
                            <div class="max-width-large">
                                <h2>LydiaRx's AI R&D Studio Solution</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Traditional R&D workflows present challenges—time-consuming literature reviews, regulatory bottlenecks, and disconnected systems. While they deliver scientific results, they often fall short of providing an efficient, AI-enhanced experience.
                                </p>
                                <p>
                                    Enter LydiaRx's AI R&D Studio—an innovative response to the life sciences sector's demand for intelligent R&D tools without compromising on compliance, security, or scientific rigor.
                                </p>
                                <p>
                                    Developed collaboratively by pharmaceutical firms, regulatory experts, and AI specialists, AI R&D Studio by LydiaRx addresses critical needs.
                                </p>
                                <div class="padding-bottom"></div>
                                <h4>Key Features</h4>
                                <ul style="margin: 2rem">
                                    <li>
                                        Providing scientists and researchers with AI-powered discovery tools for hypothesis generation, patent analysis, and literature synthesis at unprecedented speed.
                                    </li>
                                    <li>
                                        Offering pharmaceutical companies a GxP-compliant solution for regulatory document automation, ensuring substantial efficiency gains and risk reduction.
                                    </li>
                                    <li>
                                        Enabling seamless integration with existing R&D infrastructure through secure APIs and intelligent workflow automation.
                                    </li>
                                    <li>
                                        Fostering industry innovation through specialized AI models trained specifically for life sciences applications and regulatory requirements.
                                    </li>
                                    <li>
                                        Reducing operational costs, minimizing compliance risks, and incorporating cutting-edge AI research from leading academic institutions.
                                    </li>
                                    <li>
                                        Leveraging on-premise deployment and customer-controlled encryption keys, transforming data security concerns into competitive advantages.
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
}

export const renderDemoPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_about-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-large">
                        <h1>
                            LRx Check Demo
                        </h1>
                        <div class="padding-bottom"></div>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Coming Soon</p>
                    </div>
                    <div class="about_header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="about_header-image" alt="LydiaRx Logo Art"/>
                    </div>
                </div>   
            </div>
        </section>
    </main>
    `;
}
