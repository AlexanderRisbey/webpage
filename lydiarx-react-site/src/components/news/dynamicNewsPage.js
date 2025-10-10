import { Helmet } from 'react-helmet-async'

import Footer from "../footer"
import Nav from "../nav"
import LRxWebArt from "../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../components/transitionScreen"
import ePIImage from "../../assets/images/LydiaRx_ePI.jpeg"
import { useParams } from 'react-router-dom'
import news from "./news.json";
import ReactMarkdown from "react-markdown"

function DynamicNewsPage() {
    const { id } = useParams();
    const article = news.find((item) => item.id === id);

    if (!article) return <p>Article not found.</p>;
    return(
        <div className="page-wrapper">
            <Helmet>
                <title>News - LydiaRx</title>
                <meta name="description" content={article.excerpt} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:type" content="article" />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: 'relative'}}>
                            <div className="max-width-large">
                                <h1>
                                    News
                                </h1>
                                <div className="padding-bottom"/>
                            </div>
                            <div className="max-width-medium">
                                <p className="Paragraph">Stay up to date with the latest company news, insights, and announcements from Lydriarx.</p>
                            </div>
                            <div class="ps_header_shapes">
                                <img src={LRxWebArt} className="ps_header-image" alt="LydiaRx Logo Art"/>
                            </div>
                        </div>   
                    </div>
                </section>
                {article ? (
                    <section className="section_about-us">
                    <div className="page-padding">
                        <div className="container-large">
                        <div className="padding-section-huge">
                            <div className="about_component">
                            <div className="max-width-large">
                                <h2>{article.title}</h2>
                                <div className="padding-bottom"></div>
                                <p><strong>Published on {article.date}</strong></p>
                                <div className="padding-bottom"></div>
                                <ReactMarkdown>{article.content}</ReactMarkdown>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                ) : (
                    <section className="section_about-us">
                    <div className="page-padding">
                        <div className="container-large">
                        <p>Sorry, the article you are looking for does not exist.</p>
                        </div>
                    </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    )
}
export default DynamicNewsPage