import { Helmet } from 'react-helmet-async'

import Footer from "../../../components/footer"
import Nav from "../../../components/nav"
import LRxWebArt from "../../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../../components/transitionScreen"

function DemoPage() {

    return(
        <div className="page-wrapper">
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-large">
                                <h1>
                                    LRx Check Demo
                                </h1>
                                <div className="padding-bottom"/>
                            </div>
                            <div className="max-width-medium">
                                <p className="Paragraph">Coming Soon</p>
                            </div>
                            <div class="ps_header_shapes">
                                <img src={LRxWebArt} className="ps_header-image" alt="LydiaRx Logo Art"/>
                            </div>
                        </div>   
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default DemoPage