
const renderAiStudioPage = () => {
    const aiStudioPageContent = `
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
                                <h2>Introduction</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Implementing AI solutions in regulated R&D environments may seem straightforward, yet its effective adoption remains largely unexplored by many pharmaceutical companies. For those who frequently navigate complex research workflows—scientists, regulatory professionals, and R&D leaders—the necessity of intelligent, compliant AI tools is paramount.
                                </p>
                            </div>
                            <div class="margin-vertical margin-xxlarge">
                            </div>
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
    document.getElementById('root').insertAdjacentHTML('beforeend', aiStudioPageContent);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('ai-studio.html')) {
        renderAiStudioPage();
    }
});
