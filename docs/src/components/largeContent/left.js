import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const ImageLeftContent = (props) =>{
    const {title, content, link, image, alt, addedClass} = props
    return (
      // <section className={`section-about ${addedClass}`}>
      //   <div className="page-padding">
      //    <div className="container-large">
      //       <div className="padding-vertical padding-huge">
      //         <div className="layout-2-col" >
      //           <div className="about-image-wrapper">
      //             <motion.img
      //                 initial={{opacity: 0, y: 20}}
      //                 whileInView={{opacity: 1, y: 0}}
      //                 transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
      //                 style={{
      //                 transformOrigin: 'left  ', // Set transform origin to right edge
      //                 }}
      //                 viewport={{once: true, }}
      //                 src={image}
      //                 loading="lazy"
      //                 data-w-id="99fec46e-5e3e-a867-520b-d2e53241744d"
      //               //   sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 45vw"
      //                 alt={alt}
      //               //   srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-1080.jpeg 1080w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail.jpg 1356w"
      //                 className="about-image"
      //             />
      //           </div>
      //           <div className="about-content">
      //             <motion.h2
      //                 initial={{opacity: 0, y: 20}}
      //                 whileInView={{opacity: 1, y: 0}}
      //                 transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
      //                 viewport={{ once: true}}
      //             >
      //               {title}
      //             </motion.h2>
      //             <div className="margin-top margin-small">
      //               <motion.p
      //                   initial={{opacity: 0, y: 20}}
      //                   whileInView={{opacity: 1, y: 0}}
      //                   transition={{ ease: "easeOut", duration: 0.8, delay: 0.3 }}
      //                   viewport={{ once: true}}
      //               >
      //                  {content}
      //               </motion.p>
      //             </div>
      //             <motion.div 
      //               initial={{opacity: 0, y: 20}}
      //               whileInView={{opacity: 1, y: 0}}
      //               transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
      //               viewport={{ once: true}}
      //               className="button-wrapper"
      //             >
      //               <Link to={link} className="button is-grey w-button">
      //                 Find out more
      //               </Link>
      //             </motion.div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      <section className={`section-about ${addedClass}`}>
        <div className="page-padding">
         <div className="container-large">
            <div className="padding-vertical padding-huge">
              <div className="layout-2-col" >
                {/* <div className="about-image-wrapper">
                  <motion.img
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
                      style={{
                      transformOrigin: 'left  ', // Set transform origin to right edge
                      }}
                      viewport={{once: true, }}
                      src={image}
                      loading="lazy"
                      data-w-id="99fec46e-5e3e-a867-520b-d2e53241744d"
                    //   sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 45vw"
                      alt={alt}
                    //   srcSet="https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-800.jpeg 800w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail-p-1080.jpeg 1080w, https://assets-global.website-files.com/65cb91fc6e07a5a627b70daa/65cb91fc6e07a5a627b70e01_Thumbnail.jpg 1356w"
                      className="about-image"
                  />
                </div> */}
                <div className="about-content container-background">
                  <motion.h2
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true}}
                  >
                    {title}
                  </motion.h2>
                  <div className="margin-top margin-small">
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ ease: "easeOut", duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true}}
                    >
                       {content}
                    </motion.p>
                  </div>
                  <motion.div 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true}}
                    className="button-wrapper"
                  >
                    <Link to={link} className="button is-grey w-button">
                      Find out more
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}