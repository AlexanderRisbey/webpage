import { Link } from "react-router-dom";
import { motion, } from "framer-motion";
import { useEffect, useState } from "react";

import logoDark from "../../../assets/images/LydiaRx_Logo_Dark.svg"

const itemVariants = {
    down: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    up: { 
        opacity: 0, 
        y: 20, 
        transition: { duration: 0.2 } }
  };
  
export function Menu({closes}) {
    // usePreventScroll()
    const [isOpen, setIsOpen] = useState(false);
    console.log("isDown", isOpen)

    useEffect(() => {
        if(closes){
            setIsOpen(false)
        }
    }, [closes])
    
    return (
        <nav className="mobile-menu">
            <ul className="menu">
                <li className="menu-link no-point logo-mobile-menu"> 
                    <Link to={'/'} className="nav_brand-link w-nav-brand">
                        <img
                            src={logoDark}
                            loading="lazy"
                            alt=""
                            className="nav_brand-logo"
                            />
                    </Link>
                </li>

                <li className="menu-link no-point">
                    <Link to={'/about-us'} > 
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                            className="mobile-menu-item"
                        >
                            About
                        </motion.div>
                    </Link>
                </li>
                <motion.li
                  initial={false}
                  animate={isOpen ? "down" : "up"}
                  className="menu-link no-point"
                >
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    
                    onClick={() => setIsOpen(!isOpen)}
                    className='mobile-menu-item is-for-dropdown'
                  >
                    <div>
                      Products & Services <br />
                    </div>
                    <motion.div
                      variants={{
                        down: { rotate: 180 },
                        up: { rotate: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55, marginLeft: 5 , display: "flex",alignItems: "center"}}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" fill="#fff" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <motion.ul
                    variants={{
                      down: {
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        height: "auto",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    up: {
                        marginTop: "0rem",
                        marginBottom: "0rem",
                        height: "0px",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                          delay: 0.3,
                        }
                      }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    className='dropdown-container-mobile menu'
                  >
                        <motion.li variants={itemVariants} className="white-point">
                            <Link to={'/products/track-and-trace'} > 
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="mobile-menu-item"
                                    >
                                    Track & Trace
                                </motion.div>
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants} className="white-point">
                            <Link to={'/products/electronic-product-information'} > 
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="mobile-menu-item"
                                    >
                                    Electronic product information
                                </motion.div>
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants} className="white-point">
                            <Link to={'/services/computer-system-validation'} > 
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="mobile-menu-item"
                                >
                                    Computer System Validation
                                </motion.div>
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants} className="white-point">
                            <Link to={'/services/it-infrastructure'} > 
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="mobile-menu-item"
                                    >
                                    IT Infrastructure Services
                                </motion.div>
                            </Link>
                        </motion.li>
                        <motion.li variants={itemVariants} className="white-point">
                            <Link to={'/services/data-and-analytics'} > 
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="mobile-menu-item"
                                    >
                                    Data and Analytics
                                </motion.div>
                            </Link>
                        </motion.li>
                    </motion.ul>
                </motion.li>
                <li className="menu-link no-point">
                    <Link to={'/contact-us'} > 
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                            className="mobile-menu-item"
                        >
                            Contact
                        </motion.div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
  }
  