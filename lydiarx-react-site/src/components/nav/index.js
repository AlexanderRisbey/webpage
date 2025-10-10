import { Link } from 'react-router-dom';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

import logoLight  from '../../assets/images/LydiaRx_Logo_Light.svg';
import { Menu } from './mobile/menu';
import { MenuToggle } from './mobile/menuToggle';
import { useDisableBodyScroll } from '../../services';
import paths from '../../pages/Router/paths';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li.menu-link",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li.menu-link",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

function Nav (){
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setMobileIsOpen] = useState(false);
  
  const scope = useMenuAnimation(isMobileOpen);
  const hoverAnimation = { x: 3 }

  useDisableBodyScroll(isMobileOpen);

  

    return(
    <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav_component w-nav"
    >
        <div className="page-padding nav">
          <div className="nav_container">
            <Link to={'/'} className="nav_brand-link w-nav-brand">
              <img
                src={logoLight}
                loading="lazy"
                alt=""
                className="nav_brand-logo"
              />
            </Link>
            <nav role="navigation" className="nav_menu w-nav-menu">
              <div className="nav_left-wrapper">
                <div className="nav_link-wrapper">
                    <Link to={'/about-us'} > 
                      <motion.div
                        whileTap={{ scale: 0.97 }}
                        className="nav_link w-nav-link"
                      >
                        About
                      </motion.div>
                    </Link>
                  <div className="nav_link-line" />
                </div>
                <motion.div
                  initial={false}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  onFocus={() => setIsDropdownOpen(true)}
                  onBlur={() => setIsDropdownOpen(false)}
                  animate={isDropdownOpen ? "open" : "closed"}
                  className="nav_link-wrapper"
                >
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    
                    onClick={() => setIsDropdownOpen(!isOpen)}
                    // className='nav_link custom-dropdown-button'
                    className='nav_link is-for-dropdown w-dropdown-toggle'
                  >
                    <div>
                      Products & Services <br />
                    </div>
                    <motion.div
                      variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55, marginLeft: 5 , display: "flex",alignItems: "center"}}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05
                        }
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3
                        }
                      }
                    }}
                    style={{ pointerEvents: isDropdownOpen ? "auto" : "none"}}
                    className='dropdown-container'
                  >
                    <div className='dropdown-content'>
                      <motion.h6 className='dropdownTitle' variants={itemVariants} >Products</motion.h6>
                      <Link to={paths.AISTUDIO}>
                        <motion.li className='dropdownItem' variants={itemVariants} whileHover={hoverAnimation}>AI R&D Studio</motion.li>
                      </Link>
                      <Link to={'/products/track-and-trace'}>
                        <motion.li className='dropdownItem' variants={itemVariants} whileHover={hoverAnimation}>Track & Trace</motion.li>
                      </Link>
                      <Link to={'/products/electronic-product-information'}>
                        <motion.li className='dropdownItem' variants={itemVariants} whileHover={hoverAnimation}>Electronic product information</motion.li>
                      </Link>
                    </div>
                    <div  className='dropdown-content'>
                      <motion.h6 className='dropdownTitle' variants={itemVariants} >Consultancy Services</motion.h6>
                      <Link to={'/services/computer-system-validation'}>
                        <motion.li className='dropdownItem' variants={itemVariants} whileHover={hoverAnimation}>Computer System Validation</motion.li>
                      </Link>
                      <Link to={'/services/it-infrastructure'}>
                        <motion.li className='dropdownItem' variants={itemVariants} whileHover={hoverAnimation}>IT Infrastructure Design, Implementation and Qualification</motion.li>
                      </Link>
                      <Link to={'/services/data-and-analytics'}>
                        <motion.li className='dropdownItem' variants={itemVariants} whileHover={hoverAnimation}>Data and Analytics</motion.li>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="nav_link-wrapper">
                  <Link to={'/contact-us'} > 
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      className="nav_link w-nav-link"
                    >
                      Contact
                    </motion.div>
                  </Link>
                  <div className="nav_link-line" />
                </div>
              </div>
              {/* <div className="nav_right-wrapper">
                <a href="#" className="nav_link is-with-icon w-inline-block">
                  <div>
                    Support <br />
                  </div>
                  <div className="nav_link-icon w-embed">
                    <svg
                      fill="none"
                      height="100%"
                      viewBox="0 0 13 13"
                      id="icons--external-link"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.3.3v2h7.9L.6 10.9l1.5 1.5 8.6-8.6v7.9h2V.4H1.3V.3z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a href="#" className="button is-for-nav w-button">
                  Login
                </a>
              </div> */}
            </nav>
            <div ref={scope} className='nav_menu-button w-nav-button'>
              <Menu closes={isMobileOpen}/>
              <MenuToggle toggle={() => setMobileIsOpen(!isMobileOpen)} />
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
      </div>
    )
}

export default Nav