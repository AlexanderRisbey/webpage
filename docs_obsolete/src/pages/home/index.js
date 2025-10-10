import React, { useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform, } from "framer-motion"
import { Canvas, extend } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import * as THREE from 'three'
import { Helmet } from 'react-helmet-async';

import CountryGlobe from '../../components/countryGlobe';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import TransitionScreen from '../../components/transitionScreen';
import ConsumerAppImage from '../../assets/images/lydiaRx_consumer app v1.png'
import paths from '../Router/paths';
import { ImageRightContent } from '../../components/largeContent/right';
import { FullWidthContent } from '../../components/fullWidthContent';
import ScrollIndicator from '../../components/scrollIndicator';
import { BarChart, Cpu, Database, Dna, Network, ServerCog, ShieldCheck } from 'lucide-react';
import NewsSlider from '../../components/news/banner';



function HomePage() {
  useMemo(() => extend(THREE), []);
  const containerRef= useRef(null)
  const startRef = useRef(null)
  // const globeRef = useRef(null)
 
  const [visible, setVisible] = useState(window.scrollY === 0? true : false)

  const MainScrollProgress = useScroll({
    target: startRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(MainScrollProgress.scrollYProgress, [6/7, 7/7], [0, 1]);
  
  return (
    <div className="page-wrapper" ref={containerRef} >
      <TransitionScreen />  
      <Helmet>
          <title>Empowering health - LydiaRx</title>
          <meta name="description" content="Empowering health, ensuring safety - At LydiaRx, we're more than just a pharmaceutical technology company; we're dedicated to revolutionizing healthcare. Explore our innovative solutions, from cutting-edge track and trace technology to advanced electronic product information. Join us in empowering health and ensuring safety for patients worldwide." />
      </Helmet>
      <motion.div style={{position:"fixed", height: "100vh", width: "100vw", zIndex: -1, opacity: opacity, backgroundColor: "#fff"}}/>
      <Nav />
      <main className="main-wrapper">
        <div ref={startRef}>
          <section className="section-home-header" >
            <Canvas
              resize={{ scroll: false }}
              className='canvas'
              shadows
              dpr={window.devicePixelRatio}
              flat={false}
              style={{position:"fixed", height: "100vh", width: "100vw", zIndex: -2, }} 
              eventSource={document.getElementById("root")}
            >
              <CountryGlobe forwardedRef={startRef} visible={visible} setVisible={setVisible}/>
            </Canvas>
            <div className="page-padding special top">
              <div className="container-large">
                <div
                  className="home-header_component container-background"
                  >
                  <h1 className="heading" style={{textAlign: "left"}}>
                    {/* Empowering health,<br />ensuring safety <br />
                    Powered with AI Studio - <br />Transforming Life Sciences */}
                    Introducing LydiaRx AI R&D Studio
                    Transforming Life Sciences with AI
                  </h1>
                <div>
                  <div className='scroll-indicator-wrapper'>
                    <ScrollIndicator />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>
          <FullWidthContent
            linkText={"Find out more"}
            link={paths.AISTUDIO}
            columns={[
              {
                icon: <Dna size={100} className="ai-studio-icon" />,
                title: "Discovery\nStudio",
                description:
                  "Empowering scientists with AI-driven insights to explore literature, analyze patents, and design candidates at unprecedented speed.",
              },
              {
                icon: <ShieldCheck size={100} className="ai-studio-icon" />,
                title: "GxP Copilot\nSuite",
                description:
                  "Redefining compliance by automating documentation, inspections, and quality processes—ensuring accuracy and regulatory confidence.",
              },
              {
                icon: <Network size={100} className="ai-studio-icon" />,
                title: "R&D Ops\nPlatform",
                description:
                  "Unifying systems and workflows into a central AI-driven hub, enabling efficiency, scalability, and seamless data integrity.",
              },
            ]}
          />
          <FullWidthContent
            linkText={"Explore our products"}
            link={paths.PRODUCTS}
            columns={[
              {
                icon: <Cpu size={90} className="ai-studio-icon" />,
                title: "Pharmaceutical\nTrack & Trace",
                description:
                  "Cutting-edge platform ensuring transparency and security across the pharma supply chain, from factory to pharmacy.",
                link: paths.TT,
                linkText: "More about this product",
              },
              {
                icon: <Database size={90} className="ai-studio-icon" />,
                title: "Electronic Product\nInformation (ePI)",
                description:
                  "Seamless digital access to essential medicine info, replacing paper leaflets with an intuitive, patient-friendly experience.",
                link: paths.EPI,
                linkText: "More about this product",
              },
            ]}
          />
          <FullWidthContent
            columns={[
              {
                icon: <ShieldCheck size={100} className="ai-studio-icon" />,
                // title: "Computer System\nValidation",
                title: "CSV",
                description:
                  "Comprehensive validation solutions to ensure system integrity, reliability, and full regulatory compliance.",
                link: paths.CSV,
                linkText: "More about this service",
              },
              {
                icon: <ServerCog size={100} className="ai-studio-icon" />,
                title: "IT Infrastructure",
                description:
                  "End-to-end IT infrastructure design, implementation, and qualification to build secure, scalable operations.",
                link: paths.IT,
                linkText: "More about this service",
              },
              {
                icon: <BarChart size={100} className="ai-studio-icon" />,
                title: "Data & Analysis",
                description:
                  "Advanced analytics and predictive insights to drive smarter pharmaceutical decisions and innovation.",
                link: paths.DA,
                linkText: "More about this service",
              },
            ]}
          />
          
          {/* <ImageRightContent
            title="Pharmaceutical Track & Trace"
            content="Discover our cutting-edge Track and Trace solution, revolutionizing pharmaceutical supply chain management. Utilizing blockchain technology, our platform ensures unparalleled transparency and security from manufacturing to dispensation. Verify the authenticity and safety of purchased drugs with confidence."
            linkText={"More about this product"}
            link={paths.TT}
            />
          <ImageRightContent 
            title="Electronic Product Information (ePI)"
            content="Step into the future of pharmaceutical information access with our Electronic Product Information (ePI) service. Revolutionizing how patients, caregivers, and healthcare providers engage with medication details, our ePI solution offers a seamless digital experience. Say goodbye to cumbersome paper leaflets and hello to instant, intuitive access to essential product information. Explore how our innovative approach is reshaping the landscape of pharmaceutical data accessibility."
            linkText={"More about this product"}
            link={paths.EPI}
            />
          <ImageRightContent
            title="Computer System Validation"
            content="Ensuring the integrity and reliability of computer systems is paramount in the pharmaceutical industry. Our Computer System Validation service offers comprehensive validation solutions tailored to meet regulatory requirements and industry standards. From initial design to implementation and qualification, trust us to safeguard your critical systems. Dive into our expertise and discover how we're setting the benchmark for computer system validation in the pharmaceutical sector."
            linkText={"More about this service"}
            link={paths.CSV}
            />
          <ImageRightContent 
            title="IT Infrastructure"
            content="Building a robust IT infrastructure is the cornerstone of efficient pharmaceutical operations. Our comprehensive IT Infrastructure, Design Implementation & Qualification service offers end-to-end solutions to meet your organization's unique needs. From network design to implementation and qualification, we provide tailored strategies to optimize your IT environment. Explore how our expertise can empower your pharmaceutical endeavors with reliable, scalable, and compliant IT infrastructure."
            linkText={"More about this service"}
            link={paths.IT}
            />
          <ImageRightContent
            title="Data & Analysis"
            content="Unlock the power of data in pharmaceutical decision-making with our Data & Analysis service. In an era driven by insights, we offer advanced data analytics solutions to extract valuable intelligence from your pharmaceutical operations. From predictive modeling to real-time monitoring, our data-driven approach empowers you to make informed decisions and drive innovation. Discover how our expertise in data analysis is reshaping the future of pharmaceutical research and development."
            linkText={"More about this service"}
            link={paths.DA}
            /> */}
          <section className={`section-meet-os`}>
            <div className="page-padding">
              <div className="container-large">
                <div className="padding-vertical padding-huge">
                  <div className="layout-1-col">
                    <div className="meet-os-content container-background">
                      <NewsSlider/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> 
        <section className="section-featured">
          <div className="page-padding">
            <div className="container-large">
              <div className="padding-vertical padding-huge">
                <div className="padding-vertical padding-huge">
                  <div className="page-padding">
                    <div className="container-large">
                      <div
                        data-w-id="f8a10d0f-7512-28a4-ac20-3244adbaedca"
                        // animate
                        className="cta_content"
                        >
                        <h2>
                          LRx Check, Consumer App <br />
                        </h2>
                        <div className="button-wrapper">
                          <Link to={"/products/demo"} className="button is-grey w-button">
                            Demo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="f3dc5f81-bd34-7aee-466a-6102e943c708"
                    // animate
                    className="cta_image-wrapper"
                  >
                    <img
                      src={ConsumerAppImage}
                      loading="lazy"
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 94vw"
                      // srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e11_allsizes-p-500.jpeg 500w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e11_allsizes-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e11_allsizes.jpg 2560w"
                      alt="Pharmaceutical Box being scanned by phone with LRx Check App"
                      className="cta_image"
                    />
                  </div>
                </div>
                
                {/* //Last box */}
                {/* <div
                  data-w-id="6b3ae521-d85c-28bb-a79e-ea5f82a8d455"
                // animate
                  className="featured_component"
                >
                  <div className="featured_item">
                    <div className="featured_image-wrapper">
                      <img
                        src="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df4_dooly_chromebook.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, 30vw"
                        srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df4_dooly_chromebook-p-500.jpeg 500w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df4_dooly_chromebook.jpg 768w"
                        alt="Monitor"
                        className="featured_image"
                      />
                    </div>
                    <div className="featured_content">
                      <div className="max-width-small">
                        <h3>
                          Tracking Overview <br />
                        </h3>
                      </div>
                      <div className="button-wrapper is-smaller">
                        <a href="#" className="button is-grey w-button">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="featured_item">
                    <div className="featured_image-wrapper">
                      <img
                        src="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df8_crux_chromebook.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, 30vw"
                        srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df8_crux_chromebook-p-500.jpeg 500w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df8_crux_chromebook.jpg 768w"
                        alt="Chromebook"
                        className="featured_image"
                      />
                    </div>
                    <div className="featured_content">
                      <h3>
                        Product Verification <br />
                      </h3>
                      <div className="button-wrapper is-smaller">
                        <a href="#" className="button is-grey w-button">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="featured_item">
                    <div className="featured_image-wrapper">
                      <img
                        src="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70df2_howto.jpg"
                        loading="lazy"
                        alt="Laptop and Headphone"
                        className="featured_image"
                      />
                    </div>
                    <div className="featured_content">
                      <h3>
                        0 Stress Consumption <br />
                      </h3>
                      <div className="button-wrapper is-smaller">
                        <a href="#" className="button is-grey w-button">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>  
  )
}

export default HomePage

