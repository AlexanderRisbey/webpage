import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"
import ePIImage from "../../../assets/images/LydiaRx_ePI.jpeg"

function EpiPage() {

    return(
        <div className="page-wrapper">
            <Helmet>
                <title>ePI - LydiaRx</title>
                <meta property="description" content="Unlock the future of pharmaceutical information access with LydiaRx's Electronic Product Information (ePI) solution. Seamlessly navigate essential product details with our intuitive digital platform, enhancing accessibility and transparency in healthcare." />
                <meta property="og:title" content="ePI - LydiaRx Solution" />
                <meta property="og:description" content="Unlock the future of pharmaceutical information access with LydiaRx's Electronic Product Information (ePI) solution. Seamlessly navigate essential product details with our intuitive digital platform, enhancing accessibility and transparency in healthcare." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-large">
                                <h1>
                                    Electronic Product Information (ePI)
                                </h1>
                                <div className="padding-bottom"/>
                            </div>
                            <div className="max-width-medium">
                                <p className="Paragraph">Effortless accessibility, infinite languages, zero recall worries: Revolutionize information dissemination with ePI.</p>
                            </div>
                            <div class="ps_header_shapes">
                                <img src={LRxWebArt} className="ps_header-image" alt="LydiaRx Logo Art"/>
                            </div>
                        </div>   
                    </div>
                </section>
                <section className="section_about-us">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-section-huge">
                                <div className="about_component">
                                    <div className="max-width-large">   
                                        <h2>Introduction</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            Introducing digital product information through mobile apps or digital platforms may seem commonplace, yet its adoption remains largely unexplored by many. Fortunately, for those who frequently seek information from paper or digital leaflets—patients, caregivers, and healthcare providers—the necessity of clear, accessible information is paramount.
                                        </p>
                                    </div>
                                    <div className="margin-vertical margin-xxlarge">
                                        <div className="about_image-wrapper">
                                            <img src={ePIImage} className="epi_image" alt="Person checking the ePI of a product"/>
                                        </div>
                                    </div>
                                    <div className="max-width-large">
                                        <h2>LydiaRx's ePI Solution</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            Traditional paper leaflets present challenges—difficult to decipher, cumbersome to navigate, and inconvenient to retain. While they convey regulated data, they often fall short of delivering a user-centric experience.
                                        </p>
                                        <p>
                                            Enter LydiaRx's ePI solution—an innovative response to the healthcare sector's demand for intuitive medicine leaflets without compromising on user experience, security, or accuracy.
                                        </p>
                                        <p>
                                            Developed collaboratively by pharmaceutical firms, patient groups, and technology and regulatory experts, ePI by LydiaRx addresses critical needs.
                                        </p>
                                        <div className="padding-bottom"/>
                                        <h4>Key Features</h4>
                                        <ul  style={{margin: "2rem"}}>
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
            <Footer />
        </div>
    )
}
export default EpiPage