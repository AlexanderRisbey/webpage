import { assetHref } from './utils.js';

export const renderAboutPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_page_header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>
                            About Us
                        </h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">Welcome to the dawn of a new era in efficiency and transparency</p>
                    </div>
                    <div class="header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="header-shape-image"/>
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
                                <h2>LydiaRx</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    At LydiaRX, we believe that every step forward in technology is a potential step toward a better future.
                                    Our vision is worldwide, and we see a global healthcare system ripe for transformation, where our innovative track and trace software and Electronic Product Information application will revolutionize the way medicines are distributed and dispensed, where globalized pharmaceuticals will and can address the very local unmet needs for every patient on the planet. 
                                </p>
                            </div>
                            <div class="margin-vertical margin-xxlarge">
                                <div class="about_image-wrapper">
                                    <img src="${assetHref('images/LydiaRx_about-us.jpeg')}" class="about_image"/>
                                </div>
                            </div>
                            <div class="margin-vertical margin-xxlarge"></div>
                            <div class="max-width-large">
                                <h2>What we do</h2>
                                <div class="padding-bottom"></div>
                                <p>
                                    Imagine a world where every product\'s journey is meticulously documented, from its inception to its destination with a patient. With our cutting-edge software, this vision becomes a real time reality surpassing any legacy system available today. Whether it\'s monitoring the flow of goods through intricate supply chains or safeguarding the integrity of pharmaceuticals, our solutions have the potential to empower every state operator, country and businesses to stay ahead of the curve. 
                                    Take this to the next level with our Electronic Product Information Leaflet (ePI developed by Pharmaledger) so that paper leaflets really do become a thing of the past! It’s obviously better for the planet and the bottom line. You also eliminate a significant cause for product recalls and repackaging, and more importantly patients will always have access to the latest digital medicine information 
                                    Our products don’t just stop there as we can provide specialist consultancy services to Govts, regulators and drug manufacturers around our area of expertise:  
                                </p>
                                <ul style="margin: 2rem">
                                    <li> Track & Trace </li>
                                    <li>EPI</li>
                                    <li>Quality Compliance (for manufacturing)</li>
                                    <li>Computer System Validation</li>
                                    <li>IT Infrastructure Design, Implementation and Qualification</li>
                                    <li>Data and Analytics services for better human decision making </li>
                                </ul>
                                <p>
                                    Global pharmaceuticals are a burgeoning and dynamic marketplace that present an exciting opportunity for us to showcase the a power of our technology to deliver absolute care for all. By seamlessly integrating with existing infrastructure, compliance by design and inclusive mobile first approach, we aim to be the catalyst for progress in the vibrant healthcare and life sciences market. 
                                    At LydiaRX, we don\'t just provide software – we pave the way for innovation, efficiency, and trust. For countries, healthcare service providers, insurers and companies this potentially means savings of hundreds of millions of dollars. For patients it means they get the deserving care and medicines they need, knowing they can trust the drugs they take are legitimate, making for a more equal and just healthcare system. Join us as we embark on this journey to reshape the future of medicines supply chains and drug information for everyone, one transformative solution at a time. Together, let\'s unlock endless possibilities and propel this area of healthcare forward into a new age of security and trust. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_team">
            <div class="bio-container" style="transform: translateY(100%);">
                <div class="padding-global bio-padding">
                    <div class="container-large">
                        <div  class="bio-wrapper">
                            <button class="bottom-tab-line"></button>
                            <div class="w-layout-grid bio_component">
                                <div class="bio_team-item">
                                    <div class="bio_image-wrapper">
                                        <img src="" loading="lazy" alt="" class="bio_image"/>
                                    </div>
                                    <div>
                                        <div class="text-color-blue bio-title"></div>
                                        <div class="padding-bottom padding-xxsmall"></div>
                                        <h3 class="heading-style-h4 bio-name"></h3>
                                        <div class="padding-bottom padding-small"></div>
                                    </div>
                                </div>
                                <p class="bio-bio"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="padding-global">
                <div class="container-large">
                    <div class="padding-section-xhuge" >
                        <div class="w-layout-grid team_component">
                            <div class="team_content-left">
                                <h2>Our Team</h2>
                                <div class="padding-bottom padding-small"></div>
                                <p>Our team is a close-knit, diverse group driven by passion and collaboration. With unique skills and a strong sense of teamwork, we tackle challenges creatively to achieve success.</p>
                            </div>
                            <div class="w-layout-grid team_person-wrapper"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}

const teamMembers =[
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Najib Rehman",
        title: "CEO",
        position: 1,
        bio: "Najib is a data and analytics technology expert that has worked in life science for almost 20 years. From working within big pharma on their systems, processes and enabling capabilities through to being a founding member of ATMPS Ltd, a startup that developed the world\'s first patented blockchain solution in life sciences for tracking personalised medicine. He has spent time working with commercial and clinical functions on the challenges that they need to overcome to make data meaningful and thus drive value for the business, as well as building the foundation needed to take advantage of newer capabilities such as AI, ML etc. Furthermore, he has consulted and provided training support to pharma, biotech, university hospitals and academic science networks on key areas of data requirements, including AZ, BMS, Pfizer, Autolus, iDMT (Cambridge) and others in this and related life science areas. One final area of interest has been to work with teams in the workplace to get the best out of them, this interest has also led to the founding of a successful German based technology and consultancy start up operating across many sectors called Kokoro.",
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Sînică Alboaie",
        title:"Chief Technology Lead",
        bio: "Sînică has a background in software development and research. He holds a PHD in Privacy Preserving Technologies and Blockchain, being the initiator and leader of the Open Source OpenDSU project, which has been developed and utilized in European research projects and enterprise blockchain solutions within the pharmaceutical industry. Sînică is also an experienced entrepreneur, having founded Axiologic Research in 2023, and has coordinated dozens of projects in roles such as CTO or Technical Product Manager for Axiologic\'s clients and collaborators. ",
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Daud Farooq LL.B., LL.M., MA",
        title:"Director Legal and Corporate",
        bio: "Over nineteen years of experience as a Lawyer and thirteen as a Managing Partner in a UK Law Firm. Extensive knowledge of complex commercial transactions including cross border negotiation. Working for high profile clients in international dispute resolution involving complex financial and trust arrangements. Negotiated for clients with Governments and Sovereign Funds and has experience in funding arrangements and structuring projects for delivery.  Business interests in various countries and a strong presence in Iran, Pakistan and Turkey",
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Alexander Risbey",
        title:"Director of Operations",
        bio: "Alexander brings over six years of professional experience across diverse sectors, including business development, logistics, operations, and software. With a background that includes service in the Swiss armed forces and roles in fintech, commodity trading, and software development, his track record reflects adaptability and success in varied environments.",
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Dr Andrew Roddam",
        title:"Advisor",
        bio: "Dr Andrew Roddam is a life sciences executive and internationally recognized epidemiologist with over 25 years’ experience spanning academia, pharmaceuticals, biotechnology, and public health. He is Chief Business Development Officer at EveryONE Medicines, leading the adoption of precision medicine capabilities from genetic discovery to patient monitoring. Previously, he was CEO of Our Future Health, the UK’s largest health research programme in partnership with the NHS, creating one of the world’s largest prospective cohorts and genetic resources. An Oxford-trained statistician, Andrew has published over 100 scientific papers and is a regular keynote speaker. He serves as Chair of SNOMED International, where he has been a board director since 2020, and advises multiple organizations on data-driven healthcare innovation.",
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Shahid Hanif",
        title:"Advisor",
        bio: "Dr Shahid Hanif is a life sciences executive with over 20 years’ of experience, specialising in driving strategic and collaborative approaches to data, evidence generation and patient outcomes. He is the Founder of Avenzoar Consulting, providing strategic support to life science organisations, and Co-Founder of a voluntary Science Policy Think Tank initiative. Previously, he led the establishment and development of the GetReal Institute, a multistakeholder initiative to advance the use of RWE for decision-making, and was the Head of Health Data & Outcomes at the ABPI. Recognised for enabling the development, approval, and access to innovative health technologies, combining deep industry knowledge with a forward-thinking mindset. Known for fostering partnerships across diverse stakeholders and aligning organisational goals with emerging trends in healthcare to deliver impactful, patient-focused solutions.",
    }
]

export const renderTeamMembers = () => {
    const teamWrapper = document.querySelector('.team_person-wrapper');
    if (!teamWrapper) return;
    teamMembers.forEach((member, index) => {
        const teamMemberHTML = `
            <div class="team_item" data-index="${index}">
                <div class="team_image-wrapper">
                    <img src="${member.imageSrc}" loading="lazy" alt="${member.name}" class="team_image"/>
                </div>
                <div class="text-color-blue">${member.title}</div>
                <div class="padding-bottom padding-xxsmall"></div>
                <h3 class="heading-style-h4">${member.name}</h3>
                <div class="padding-bottom padding-small"></div>
            </div>
        `;
        teamWrapper.insertAdjacentHTML('beforeend', teamMemberHTML);
    });
}

export const handleBioPopup = () => {
    const teamItems = document.querySelectorAll('.team_item');
    const bioContainer = document.querySelector('.bio-container');
    const closeButton = document.querySelector('.bottom-tab-line');

    if (!bioContainer || !closeButton || teamItems.length === 0) return;

    teamItems.forEach(item => {
        item.addEventListener('click', () => {
            const memberIndex = item.getAttribute('data-index');
            const member = teamMembers[memberIndex];
            
            document.querySelector('.bio_image').src = member.imageSrc;
            document.querySelector('.bio_image').alt = member.name;
            document.querySelector('.bio-title').textContent = member.title;
            document.querySelector('.bio-name').textContent = member.name;
            document.querySelector('.bio-bio').textContent = member.bio;

            bioContainer.style.transform = 'translateY(0%)';
        });
    });

    const closeBio = () => {
        bioContainer.style.transform = 'translateY(100%)';
    }

    closeButton.addEventListener('click', closeBio);
    document.addEventListener('mousedown', (event) => {
        if (!bioContainer.contains(event.target) && !event.target.closest('.team_item')) {
            closeBio();
        }
    });
    window.addEventListener('scroll', () => {
        if (bioContainer.style.transform === 'translateY(0%)') {
            closeBio();
        }
    });
}
