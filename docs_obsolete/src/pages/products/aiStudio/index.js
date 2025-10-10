import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"
import ePIImage from "../../../assets/images/LydiaRx_ePI.jpeg"

function AIStudioPage() {

    return(
        <div className="page-wrapper">
            <Helmet>
                <title>AI-Studio - LydiaRx</title>
                <meta property="description" content="Transform regulated R&D with LydiaRx's AI R&D Studio. Accelerate discovery, ensure GxP compliance, and automate operations with intelligent copilots and APIs purpose-built for pharmaceutical and life sciences companies." />
                <meta property="og:title" content="AI-Studio - LydiaRx Solution" />
                <meta property="og:description" content="Transform regulated R&D with LydiaRx's AI R&D Studio. Accelerate discovery, ensure GxP compliance, and automate operations with intelligent copilots and APIs purpose-built for pharmaceutical and life sciences companies." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: 'relative'}}>
                            <div className="max-width-large">
                                <h1>
                                    LydiaRx AI R&D Studio
                                </h1>
                                <div className="padding-bottom"/>
                            </div>
                            <div className="max-width-medium">
                                <p className="Paragraph">Accelerate discovery, ensure compliance, automate operations with intelligent copilots built for life sciences.</p>
                            </div>
                            <div class="ps_header_shapes">
                                <img src={LRxWebArt} className="ps_header-image" alt="LydiaRx Logo Art"/>
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
                                        {/* <div class="about_image-wrapper">
                                            <div class="ai-studio-image">
                                                AI R&D Studio Platform
                                            </div>
                                        </div> */}
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
                                        <ul style={{margin: "2rem"}}>
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
            <Footer />
        </div>
    )
}
export default AIStudioPage