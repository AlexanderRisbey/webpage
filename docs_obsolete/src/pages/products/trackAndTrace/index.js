import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Preload, View } from "@react-three/drei"

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"
import View3 from '../../../components/view3';
import View1 from '../../../components/view1';
import View2 from '../../../components/view2';
import DisaggregationImage from '../../../assets/images/LydiaRx_disaggregation.jpg'
import AggregationImage from '../../../assets/images/LydiaRx_aggregation.jpg'
import DipensionImage from '../../../assets/images/LydiaRx_dispensation.jpg'
import TransportImage from '../../../assets/images/LydiaRx_transport_by_marcinjozwiak.jpg'
import { Canvas } from "@react-three/fiber"
import { Helmet } from 'react-helmet-async'

function TTPage() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const source = useRef(null)
    const view1= useRef(null)
    const view2= useRef(null)
    const view3= useRef(null)
    const view1Scroll= useRef(null)
    const view2Scroll= useRef(null)
    const view3Scroll= useRef(null)

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return(
        <div className="page-wrapper" ref={source} >
            <Helmet>
                <title>Track & Trace - LydiaRx</title>
                <meta property="description" content="Discover our cutting-edge Track and Trace solution, revolutionizing pharmaceutical supply chain management. Utilizing blockchain technology, our platform ensures unparalleled transparency and security from manufacturing to dispensation. Verify the authenticity and safety of purchased drugs with confidence." />
                <meta property="og:title" content="Pharmaceutical Track & Trace - LydiaRx Solution" />
                <meta property="og:description" content="Discover our cutting-edge Track and Trace solution, revolutionizing pharmaceutical supply chain management. Utilizing blockchain technology, our platform ensures unparalleled transparency and security from manufacturing to dispensation. Verify the authenticity and safety of purchased drugs with confidence." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <Canvas
                resize={{ scroll: false }}
                className='canvas'
                shadows
                dpr={window.devicePixelRatio}
                flat={false}
                style={{position:"fixed", height: "100vh", width: "100vw", zIndex: -2, }} 
                eventSource={source}
                >
                
                <View.Port />
                <Preload all />
                </Canvas>
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-medium">
                                <h1>
                                    Track & Trace
                                </h1>
                                <div className="padding-bottom"/>
                                <p className="Paragraph">Safeguarding health through transparent supply chains</p>
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
                <section className="section-how-it-works">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-huge">
                                <div style={{display:"flex" ,alignItems: 'center', justifyContent: "center"}}>
                                    <h1 >How it works</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-about">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-huge">
                                <div className="layout-2-col" >
                                    <div className="about-image-wrapper" ref={view1Scroll}>
                                        <View ref={view1} style={{width: "100%", height: "100%"}}>
                                            <View1 forwardedRef={view1Scroll}/>
                                        </View>
                                    </div>          
                                    <div className="about-content">
                                        <motion.h2
                                            initial={{opacity: 0, y: 20}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
                                            viewport={{ once: true}}
                                        >
                                            Manufacturing <br />
                                        </motion.h2>
                                        <div className="margin-top margin-small">
                                            <motion.p
                                            initial={{opacity: 0, y: 20}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
                                            viewport={{ once: true}}
                                            >
                                            LydiaRx's pharmaceutical track and trace system commences with the integration of a DataMatrix onto each drug box,
                                            accompanied by a non-tampering seal, ensuring product security and facilitating seamless traceability throughout
                                            the product's lifecycle, from production through the supply chain to the end user. 
                                            <br />
                                            Simultaneously, the system initiates the creation of a digital twin, which is then added to the ledger.
                                            This digital twin serves as the cornerstone for tracking, as data is continually appended to it,
                                            enabling comprehensive traceability throughout the pharmaceutical distribution process. 
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-meet-os">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-huge">
                                <div
                                    className="layout-2-col is-for-meet-os"
                                    ref={view2Scroll}
                                >
                                    <div className="meet-os-content">
                                        <div className="max-width-small">
                                            <h2>
                                                Aggregation
                                            </h2>
                                        </div>
                                        <div className="margin-top margin-small">
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
                                    <div
                                        id="w-node-_6a6a42da-fd5e-91b5-c136-39e24580d3c7-27b70de0"
                                        data-w-id="6a6a42da-fd5e-91b5-c136-39e24580d3c7"
                                        className="meet-os-image-wrapper"
                                    >
                                        {screenWidth > 991?
                                        <View ref={view2} style={{width: "100%", height: "100%"}}>
                                            <View2 forwardedRef={view2Scroll}/>
                                        </View>
                                        :
                                        <img
                                            src={AggregationImage}
                                            loading="lazy"
                                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 54vw"
                                            // srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-1080.jpeg 1080w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-1600.jpeg 1600w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-2000.jpeg 2000w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos.jpg 2170w"
                                            alt="Chrome OS"
                                            className="meet-os-image"
                                        />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {screenWidth> 991?
                <section className="section-transport long-scroll" ref={view3Scroll}>
                    <div className="sticky">
                        <div className="page-padding">
                            <div className="container-large">
                                <div className="padding-vertical padding-huge">
                                    <div
                                    className="layout-2-col"
                                    >
                                        <div className="about-image-wrapper" >
                                            <View shadows ref={view3} style={{width: "100%", height: "100%"}}>
                                                <View3 forwardedRef={view3Scroll}/>
                                            </View>
                                        </div>
                                        <div className="switch-content">
                                            <h2>
                                            Transport <br />
                                            </h2>
                                            <div className="margin-top margin-small">
                                                <p>
                                                    Prior to loading onto vehicles, each pallet is scanned, marking its departure from the location.
                                                    Upon arrival, another scan ensures accurate tracking of the shipment's journey.
                                                    Customizable transport data can be integrated.
                                                    Thanks to LydiaRx, vehicles benefit from minimized holding times at borders,
                                                    streamlining the entire transportation process for enhanced efficiency and reliability.<br />
                                                </p>
                                            </div>
                                            {/* <div className="button-wrapper">
                                            <a href="#" className="button is-grey w-button">
                                                Find out how
                                            </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="section-about">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-huge">
                                <div
                                    className="layout-2-col"
                                    // animate
                                >
                                    <div className="about-image-wrapper">
                                        <img
                                            src={TransportImage}
                                            loading="lazy"
                                            data-w-id="77199f41-3232-dce5-b7ce-fa99298e24f5"
                                            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 45vw"
                                            alt="LydiaRx dispensation image"
                                            // srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-1080.jpeg 1080w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail.jpg 1356w"
                                            className="about-image"
                                        />
                                    </div>
                                    <div className="about-content">
                                        <h2>
                                            Transport <br />
                                        </h2>
                                        <div className="margin-top margin-small">
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
                }
                <section className="section-meet-os">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-huge">
                                <div
                                    className="layout-2-col is-for-meet-os"
                                >
                                    <div className="meet-os-content">
                                        <div className="max-width-small">
                                            <h2>
                                            <strong>Disaggregation</strong>
                                            <br />
                                            </h2>
                                        </div>
                                        <div className="margin-top margin-small">
                                            <p>
                                            Disaggregation occurs when parent containers are opened, allowing for the separation of individual products. 
                                            This essential step ensures precise tracking and management as items progress through the supply chain. 
                                            By disaggregating, updated data for each product is accurately recorded, 
                                            maintaining visibility and control over the process, 
                                            particularly as goods transition between different stages of distribution. 
                                            <br />
                                            </p>
                                        </div>
                                        {/* <div className="button-wrapper">
                                            <a href="#" className="button is-grey w-button">
                                            Find out how
                                            </a>
                                        </div> */}
                                    </div>
                                    <div
                                        id="w-node-bd98e01b-336c-4165-0211-98d6fa1083b5-27b70de0"
                                        data-w-id="bd98e01b-336c-4165-0211-98d6fa1083b5"
                                        className="meet-os-image-wrapper"
                                    >
                                        <img
                                            src={DisaggregationImage}
                                            loading="lazy"
                                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, 54vw"
                                            // srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-1080.jpeg 1080w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-1600.jpeg 1600w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos-p-2000.jpeg 2000w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70dff_chromeos.jpg 2170w"
                                            alt="Chrome OS"
                                            className="meet-os-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-about">
                    <div className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical padding-huge">
                                <div
                                    className="layout-2-col"
                                    // animate
                                >
                                    <div className="about-image-wrapper">
                                        <img
                                            src={DipensionImage}
                                            loading="lazy"
                                            data-w-id="77199f41-3232-dce5-b7ce-fa99298e24f5"
                                            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 45vw"
                                            alt="LydiaRx dispensation image"
                                            // srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-1080.jpeg 1080w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail.jpg 1356w"
                                            className="about-image"
                                        />
                                    </div>
                                    <div className="about-content">
                                        <h2>
                                            Dispensation <br />
                                        </h2>
                                        <div className="margin-top margin-small">
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
            <Footer />
        </div>
    )
}
export default TTPage