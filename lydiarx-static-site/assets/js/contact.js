
const renderContactPage = () => {
    const contactPageContent = `
    <main class="main-wrapper">
        <section class="section_product-header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>Contact Us</h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">Get in touch to begin your journey with us</p>
                    </div>
                    <div class="ps_header_shapes">
                        <img src="./assets/LRxWebArt.svg" class="ps_header-image" alt="LydiaRx Logo Art"/>
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_about-us">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-section-huge">
                        <div class="about_component">
                            <div class="max-width-large">   
                                <h2>Reach out to our team.</h2>
                                <div class="padding-bottom"></div>
                                <div id="contact-form-container">
                                    <form id="contact-form" class="contact-form">
                                        <input class="contact-input" name="name" type="text" placeholder="Name" required />
                                        <input class="contact-input" name="companyDetails" type="text" placeholder="Company Details" required />
                                        <input class="contact-input" name="position" type="text" placeholder="Position" required />
                                        <input class="contact-input" name="phone" type="tel" placeholder="Phone" required />
                                        <input class="contact-input" name="email" type="email" placeholder="Email" required />
                                        <textarea class="contact-text-area" name="message" placeholder="Message" required ></textarea>
                                        <div id="recaptcha-container" class="captcha"></div>
                                        <button type="submit" class="button">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
    document.getElementById('root').insertAdjacentHTML('beforeend', contactPageContent);
};

const handleContactForm = () => {
    const form = document.getElementById('contact-form');
    const formContainer = document.getElementById('contact-form-container');
    let recaptchaWidgetId;

    if (!form) return;

    const state = {
        name: '',
        companyDetails: '',
        position: '',
        phone: '',
        email: '',
        message: '',
        recaptcha: ''
    };

    const handleChange = (event) => {
        state[event.target.name] = event.target.value;
    };

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('change', handleChange);
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        try {
            const recaptchaToken = await grecaptcha.execute(recaptchaWidgetId, {action: 'submit'});
            state.recaptcha = recaptchaToken;

            const contactFormCallable = firebase.functions().httpsCallable('contactForm');
            const result = await contactFormCallable(state);

            if (result.data.status === "rejected") {
                formContainer.innerHTML = '<div class="error-container">Your submission was rejected by reCAPTCHA. Please try again.</div>';
                grecaptcha.reset(recaptchaWidgetId);
            } else {
                formContainer.innerHTML = '<div class="success-container">We\'ve received your message and will respond&nbsp;shortly.</div>';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            formContainer.innerHTML = '<div class="error-container">An error occurred while submitting the form. Please try again later.</div>';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit';
        }
    };

    form.addEventListener('submit', handleSubmit);

    // Render reCAPTCHA
    grecaptcha.ready(function() {
        recaptchaWidgetId = grecaptcha.render('recaptcha-container', {
            'sitekey' : '6LdvA8MpAAAAAPtiNYH7ssuEA_VUGC6OeaVfwKj3',
            'size' : 'invisible',
            'badge' : 'inline'
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('contact.html')) {
        renderContactPage();
        handleContactForm();
    }
});
