import { useEffect, useRef, useState } from "react"
import { Helmet } from 'react-helmet-async'
import { useAnimate, useIsPresent } from "framer-motion"

import Footer from "../../components/footer"
import Nav from "../../components/nav"
import LRxWebArt from "../../assets/images/LydiaRx_web-art.svg"
import TransitionScreen from "../../components/transitionScreen"
import AboutImage from "../../assets/images/LydiaRx_about-us.jpeg"

function useBioAnimation(bioOpen) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
        const menuAnimations = bioOpen
        ? [
            [
                "div.bio-container",
                { transform: "translateY(0%)" },
                { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
            ],
            // [
            //     "div.bio-image",
            //     { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            //     { delay: stagger(0.05), at: "-0.1" }
            // ]
            ]
        : [
            // [
            //     "li",
            //     { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            //     { delay: stagger(0.05, { from: "last" }), at: "<" }
            // ],
            ["div.bio-container", { transform: "translateY(100%)" }, { at: "-0.1" }]
            ];
    
        animate([
        //   [
        //     "path.top",
        //     { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        //     { at: "<" }
        //   ],
        //   ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        //   [
        //     "path.bottom",
        //     { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        //     { at: "<" }
        //   ],
        ...menuAnimations
        ]);
    }, [bioOpen]);
    
    return scope;
}

function AboutUsPage() {
    const isPresent = useIsPresent();
    const [bioOpen, setBioOpen] = useState(false)
    const [selectedTeamMember, setSelectedTeamMember] = useState(false)
    const bioRef = useRef(null);

    window.addEventListener('scroll', () => {
        // If the bio container is open and a scroll occurs, close it
        if (bioOpen) {
            setBioOpen(false)
        }
    });

    useEffect(() => {
        function handleClickOutside(event) {
          if (bioRef.current && !bioRef.current.contains(event.target)) {
            setBioOpen(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const teamMembers =[
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
            name: "Najib Rehman",
            title: "CEO",
            position: 1,
            bio: "Najib is a data and analytics technology expert that has worked in life science for almost 20 years. From working within big pharma on their systems, processes and enabling capabilities through to being a founding member of ATMPS Ltd, a startup that developed the world's first patented blockchain solution in life sciences for tracking personalised medicine. He has spent time working with commercial and clinical functions on the challenges that they need to overcome to make data meaningful and thus drive value for the business, as well as building the foundation needed to take advantage of newer capabilities such as AI, ML etc. Furthermore, he has consulted and provided training support to pharma, biotech, university hospitals and academic science networks on key areas of data requirements, including AZ, BMS, Pfizer, Autolus, iDMT (Cambridge) and others in this and related life science areas. One final area of interest has been to work with teams in the workplace to get the best out of them, this interest has also led to the founding of a successful German based technology and consultancy start up operating across many sectors called Kokoro.",
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
            name: "Sînică Alboaie",
            title:"Chief Technology Lead",
            bio: "Sînică has a background in software development and research. He holds a PHD in Privacy Preserving Technologies and Blockchain, being the initiator and leader of the Open Source OpenDSU project, which has been developed and utilized in European research projects and enterprise blockchain solutions within the pharmaceutical industry. Sînică is also an experienced entrepreneur, having founded Axiologic Research in 2023, and has coordinated dozens of projects in roles such as CTO or Technical Product Manager for Axiologic's clients and collaborators. ",
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
       
    ]

    const scope = useBioAnimation(bioOpen);
    
    return(
        <div className="page-wrapper">
            <Helmet>
                <title>About - LydiaRx</title>
                <meta property="description" content="Learn about LydiaRx's vision and commitment to revolutionize the global healthcare system. Explore how our innovative solutions are transforming medicine distribution and dispensation, addressing local patient needs on a global scale." />
                <meta property="og:title" content="About LydiaRX: Innovating Healthcare" />
                <meta property="og:description" content="Learn about LydiaRx's vision and commitment to revolutionize the global healthcare system. Explore how our innovative solutions are transforming medicine distribution and dispensation, addressing local patient needs on a global scale." />
            </Helmet>
            <Nav />
            <TransitionScreen />
            <main className="main-wrapper">
                <section className="section_about-header">
                    <div className="page-padding">
                        <div className="container-large" style={{position: "relative"}}>
                            <div className="max-width-medium">
                                <h1>
                                    About Us
                                </h1>
                                <div className="padding-bottom"/>
                                <p className="Paragraph">Welcome to the dawn of a new era in efficiency and transparency</p>
                            </div>
                            <div class="about_header_shapes">
                                <img src={LRxWebArt} className="about_header-image"/>
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
                                        <h2>LydiaRx</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            At LydiaRX, we believe that every step forward in technology is a potential step toward a better future.
                                            Our vision is worldwide, and we see a global healthcare system ripe for transformation, where our innovative track and trace software and Electronic Product Information application will revolutionize the way medicines are distributed and dispensed, where globalized pharmaceuticals will and can address the very local unmet needs for every patient on the planet. 
                                        </p>
                                    </div>
                                    <div className="margin-vertical margin-xxlarge">
                                        <div className="about_image-wrapper">
                                            <img src={AboutImage} className="about_image"/>
                                        </div>
                                    </div>
                                    <div className="max-width-large">
                                        <h2>What we do</h2>
                                        <div className="padding-bottom"/>
                                        <p>
                                            Imagine a world where every product's journey is meticulously documented, from its inception to its destination with a patient. With our cutting-edge software, this vision becomes a real time reality surpassing any legacy system available today. Whether it's monitoring the flow of goods through intricate supply chains or safeguarding the integrity of pharmaceuticals, our solutions have the potential to empower every state operator, country and businesses to stay ahead of the curve. 
                                            Take this to the next level with our Electronic Product Information Leaflet (ePI developed by Pharmaledger) so that paper leaflets really do become a thing of the past! It’s obviously better for the planet and the bottom line. You also eliminate a significant cause for product recalls and repackaging, and more importantly patients will always have access to the latest digital medicine information 
                                            Our products don’t just stop there as we can provide specialist consultancy services to Govts, regulators and drug manufacturers around our area of expertise:  
                                        </p>
                                        <ul style={{margin: "2rem"}}>
                                            <li> Track & Trace </li>
                                            <li>EPI</li>
                                            <li>Quality Compliance (for manufacturing)</li>
                                            <li>Computer System Validation</li>
                                            <li>IT Infrastructure Design, Implementation and Qualification</li>
                                            <li>Data and Analytics services for better human decision making </li>
                                        </ul>
                                        <p>
                                            Global pharmaceuticals are a burgeoning and dynamic marketplace that present an exciting opportunity for us to showcase the power of our technology to deliver absolute care for all. By seamlessly integrating with existing infrastructure, compliance by design and inclusive mobile first approach, we aim to be the catalyst for progress in the vibrant healthcare and life sciences market. 
                                            At LydiaRX, we don't just provide software – we pave the way for innovation, efficiency, and trust. For countries, healthcare service providers, insurers and companies this potentially means savings of hundreds of millions of dollars. For patients it means they get the deserving care and medicines they need, knowing they can trust the drugs they take are legitimate, making for a more equal and just healthcare system. Join us as we embark on this journey to reshape the future of medicines supply chains and drug information for everyone, one transformative solution at a time. Together, let's unlock endless possibilities and propel this area of healthcare forward into a new age of security and trust. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section_team" ref={scope}>
                    <div ref={bioRef} className="bio-container">
                        <div class="padding-global bio-padding">
                            <div class="container-large">
                                <div  className="bio-wrapper">
                                    <button className="bottom-tab-line" onClick={() => setBioOpen(false)}/>
                                    <div className="w-layout-grid bio_component">
                                        <div class="bio_team-item">
                                            <div className="bio_image-wrapper">
                                                <img src={selectedTeamMember.imageSrc} loading="lazy" alt={selectedTeamMember.name} class="bio_image"/>
                                            </div>
                                            <div>
                                                <div class="text-color-blue bio-title">{selectedTeamMember.title}</div>
                                                <div class="padding-bottom padding-xxsmall"></div>
                                                <h3 class="heading-style-h4 bio-name">{selectedTeamMember.name}</h3>
                                                <div class="padding-bottom padding-small"></div>
                                            </div>
                                        </div>
                                        <p className="bio-bio">
                                            {selectedTeamMember.bio}
                                        </p>
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
                                        <div class="padding-bottom padding-small">
                                        </div>
                                        <p>Our team is a close-knit, diverse group driven by passion and collaboration. With unique skills and a strong sense of teamwork, we tackle challenges creatively to achieve success.</p>
                                    </div>
                                    <div class="w-layout-grid team_person-wrapper">
                                        {teamMembers.map((teamMember, index) =>{
                                            return(
                                                <div class="team_item" onClick={() => {setBioOpen(index+1); setSelectedTeamMember(teamMember)}}>
                                                    <div className="team_image-wrapper">
                                                        <img src={teamMember.imageSrc} loading="lazy" alt={teamMember.name} class="team_image"/>
                                                    </div>
                                                    <div class="text-color-blue">{teamMember.title}</div>
                                                    <div class="padding-bottom padding-xxsmall"></div>
                                                    <h3 class="heading-style-h4">{teamMember.name}</h3>
                                                    <div class="padding-bottom padding-small"></div>
                                                </div>
                                            )
                                        })}
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
export default AboutUsPage