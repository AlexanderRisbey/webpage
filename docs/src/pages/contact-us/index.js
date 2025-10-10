import { useRef, useState } from "react"
import { httpsCallable } from "firebase/functions"
import ReCAPTCHA from "react-google-recaptcha"
import Dots from "react-activity/dist/Dots";
import { Helmet } from 'react-helmet-async';

import Footer from "../../components/footer"
import Nav from "../../components/nav"
import LRxWebArt from "../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../components/transitionScreen"
import { functions } from "../../firebase"

import "react-activity/dist/Dots.css";

function ContactPage() {
    const [state, setState] = useState({
        name: '',
        companyDetails: '',
        position: '',
        phone: '',
        email: '',
        message: '',
        recaptcha: ''
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const reCaptchaRef = useRef (null);
    const reCaptchaImageRef = useRef (null);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleRecaptcha = async (value) => {
        try {
            setLoading(true)
            // Wait for reCAPTCHA execution and get the token
            
            // Update the state with the reCAPTCHA token
            const newState = {
                ...state,
                recaptcha: value
            };
            
            console.log(newState);
        
            const contactForm = httpsCallable(functions, 'contactForm');
            const result = await contactForm(newState);
            console.log(result.data); // Process result
            if (result.data.status === "rejected"){
                setError("rejected")
            }
            else{
                setSuccess(true)
            }
            setLoading(false)
        } catch (error) {
            console.error(error); // Handle error
            setLoading(false)
            setError(error)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            // Wait for reCAPTCHA execution and get the token
            const recaptchaToken = await reCaptchaRef.current.executeAsync();
        
            // Update the state with the reCAPTCHA token
            const newState = {
                ...state,
                recaptcha: recaptchaToken
            };
            
            console.log(newState);
        
            const contactForm = httpsCallable(functions, 'contactForm');
            const result = await contactForm(newState);
            console.log(result.data); // Process result
            if (result.data.status === "rejected"){
                setError("rejected")
            }
            else{
                setSuccess(true)
            }
            setLoading(false)
        } catch (error) {
            console.error(error); // Handle error
            setLoading(false)
            setError(error)
        }
    };
    return(
        <div className="page-wrapper">
            <Helmet>
                <title>Contact us - LydiaRx</title>
                <meta property="description" content="Have questions or inquiries? Contact LydiaRx today to learn more about our innovative pharmaceutical solutions. Whether you're interested in our services or have general inquiries, our team is here to assist you." />
                <meta property="og:title" content="Contact LydiaRx: Get in Touch with Us" />
                <meta property="og:description" content="Have questions or inquiries? Contact LydiaRx today to learn more about our innovative pharmaceutical solutions. Whether you're interested in our services or have general inquiries, our team is here to assist you." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_product-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-medium">
                                <h1>
                                    Contact Us
                                </h1>
                                <div className="padding-bottom"/>
                                <p className="Paragraph">Get in touch to begin your journey with us</p>
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
                                        <h2>Reach out to our team.</h2>
                                        <div className="padding-bottom"/>
                                        {!success && !error &&
                                        <form onSubmit={handleSubmit} className="contact-form">
                                            <input className="contact-input" name="name" type="text" placeholder="Name" onChange={handleChange} required />
                                            <input className="contact-input" name="companyDetails" type="text" placeholder="Company Details" onChange={handleChange} required />
                                            <input className="contact-input" name="position" type="text" placeholder="Position" onChange={handleChange} required />
                                            <input className="contact-input" name="phone" type="tel" placeholder="Phone" onChange={handleChange} required />
                                            <input className="contact-input" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                                            <textarea className="contact-text-area" name="message" placeholder="Message" onChange={handleChange} required />
                                            <ReCAPTCHA className="captcha" ref={reCaptchaRef} sitekey="6LdvA8MpAAAAAPtiNYH7ssuEA_VUGC6OeaVfwKj3" size="invisible" onChange={handleRecaptcha} badge={"inline"}/>
                                            <button disabled={loading} className="button" styletype="submit">
                                                {loading?<Dots /> :"Submit"}
                                            </button>
                                        </form> 
                                        }
                                        {success && !error &&
                                        <div className="success-container">We've received your message and will respond shortly.</div>
                                        }
                                        {error && !success && error === "rejected" &&
                                        <>
                                        <form onSubmit={handleSubmit} className="contact-form">
                                            <input className="contact-input" name="name" type="text" placeholder="Name" onChange={handleChange} required disabled/>
                                            <input className="contact-input" name="companyDetails" type="text" placeholder="Company Details" onChange={handleChange} required disabled/>
                                            <input className="contact-input" name="position" type="text" placeholder="Position" onChange={handleChange} required disabled/>
                                            <input className="contact-input" name="phone" type="tel" placeholder="Phone" onChange={handleChange} required disabled/>
                                            <input className="contact-input" name="email" type="email" placeholder="Email" onChange={handleChange} required disabled />
                                            <textarea className="contact-text-area" name="message" placeholder="Message" onChange={handleChange} required disabled/>
                                            <ReCAPTCHA className="captcha" ref={reCaptchaImageRef} sitekey="6LeXd8UpAAAAACyRXl42K0uY-BKQ8d_fQvBWdupR" size="normal" onChange={handleRecaptcha} badge={"inline"}/>
                                            <button disabled={loading} className="button" styletype="submit">
                                                {loading?<Dots /> :"Submit"}
                                            </button>
                                        </form> 
                                        </>
                                        }
                                        {error && !success && error !== "rejected" &&
                                        <div className="error-container">An error occurred while submitting the form. Please try again later.</div>
                                        }
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
export default ContactPage