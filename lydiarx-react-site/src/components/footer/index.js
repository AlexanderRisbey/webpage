import { Link } from "react-router-dom"

import logoLight  from '../../assets/images/LydiaRx_Logo_Light.svg';
import paths from "../../pages/Router/paths"

function Footer (){
    return(
        <footer className="footer_component">
            <div className="page-padding">
                <div className="container-large">
                    <div className="footer_grid">
                        <div className="footer_col">
                            <Link to={'/'} className="nav_brand-link w-nav-brand">
                                <img
                                    src={logoLight}
                                    loading="lazy"
                                    alt=""
                                    className="footer_brand-logo"
                                />
                            </Link>
                        </div>
                        <div className="footer_col">
                            <h4 className="footer_heading">Products</h4>
                            <div className="footer_links-grid">
                                <Link to={paths.TT} className="footer_link">
                                    Pharmaceutical Track & Trace
                                </Link>
                                <Link to={paths.EPI} className="footer_link">
                                    Electronic Product Information (ePI)
                                </Link>
                                <Link to={paths.DEMO} className="footer_link">
                                    LRx Check Demo
                                </Link>
                            </div>
                        </div>
                        <div className="footer_col">
                            <h4 className="footer_heading">
                                Services <br />
                            </h4>
                            <div className="footer_links-grid">
                                <Link to={paths.CSV} className="footer_link">
                                    Computer System Validation
                                </Link>
                                <Link to={paths.IT} className="footer_link">
                                    IT Infrastructure
                                </Link>
                                <Link to={paths.DA} className="footer_link">
                                    Data & Analytics
                                </Link>
                            </div>
                        </div>
                        <div className="footer_col">
                            <h4 className="footer_heading">The Company</h4>
                            <div className="footer_links-grid">
                                <Link to={paths.ABOUT} className="footer_link">
                                    About
                                </Link>
                                <Link to={paths.CONTACT} className="footer_link">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom-wrapper">
                        <div className="footer_links-wrapper">
                            <Link to={paths.PRIVACY} className="footer_link">
                                Privacy Policy
                            </Link>
                            <Link to={paths.TERMS} className="footer_link">
                                Terms of Service
                            </Link>
                            <Link to={paths.MSS} className="footer_link">
                                Modern slavery statement
                            </Link>
                        </div>
                        <div>© 2024 LydiaRx GmbH</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer