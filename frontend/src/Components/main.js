import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import beachResort from '../Assets/beachResort.mp4'
import home_bg_video from '../Assets/home_bg_video.mp4'
import 'react-toastify/dist/ReactToastify.css';
import wavePicture from '../Assets/Wave_White_bottom_right_shape_01.png'
// import ofcAnimatedPic from '../Assets/services-removebg-preview 2.png'
import ofcAnimated from '../Assets/Happy.svg'
import swal from 'sweetalert';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FAQ from './faq';
import WhyChooseUs from './why-choose-us';


const Main = () => {
    const [queryForm, setQueryForm] = useState({ name: "", email: "", subject: "", phone: "", query: "" })
    const handleQueryForm = (params) => (e) => {
        setQueryForm({ ...queryForm, [params]: e.target.value })
    }

    const submitQueryForm = async (e) => {
        e.preventDefault()
        if (!queryForm.name || !queryForm.email || !queryForm.subject || !queryForm.phone || !queryForm.query) {
            return toast.error("All the fields are mandatory!")
        }
        await axios.post("https://basic-start-up-ketan-assignment.onrender.com/contactus", queryForm)
            .then((res) => {
                console.log(res.data)
                setQueryForm({ name: "", email: "", subject: "", phone: "", query: "" })
                return swal("Submitted!", "We will get back to you soon!", "success");
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <section>
            <ToastContainer
                autoClose={1500}
                limit={5}
                theme={"light"}
                pauseOnFocusLoss={false}
                position={"top-center"}
            />
            <div className="back  offset">
                {/* < video src={home_bg_video} autoPlay loop muted id="home_bg_video" /> */}
                <video src={beachResort} autoPlay loop muted id="home_bg_video" />
                <div className="overlay"></div>
                {/* <div className="hero-shape">
                    <img src={wavePicture} />
                </div> */}
            </div>

            <div className="hero-text">
                <h3>We are INDIA's only
                    <span style={{fontWeight: '700', fontSize: "42", color: "#A147E4"}}> Startup </span> 
                    Kickstarter under one Roof Solution.

                </h3>
                <h6>

                </h6>
                <ul className="header-btn">
                    <li>
                        <AnchorLink href="#contact">
                            <button className="main-btn btn-one">Get in touch</button>
                        </AnchorLink>
                    </li>
                    <li><button className="main-btn btn-two" href="#">Our profile <i className="fa fa-play"></i></button></li>
                </ul>
            </div>






            <section id="wrapper">
                <span id="our-story"></span>
                <section id="service" className="service offset ">
                    <h3> OUR STORY</h3>
                    <h6>
                        Our emerging services that helps other startups to grow and make them enlarge
                    </h6>
                    <div className="service-content">
                        <div className="box">
                            <div className="box-one">
                                <div claas="services">
                                    <div className="service-icon">
                                        <i className="fa fa-web "></i>
                                    </div>
                                    <div className=" service-content" id="Home">
                                        <h4 className="service-title"> WELCOME
                                        </h4>
                                        <p className="text">We at Adiya Business Solution makes
                                            technology Accessible, We are the only Startup
                                            Kickstarter in the Indian Diaspora, So just dnt
                                            get excited for shark tank , we are here to fuel
                                            your startup dream with our expertis<br />
                                            Startups are like baby loved by the
                                            founder with all their heart but even
                                            they dont know what to do with it, thats where
                                            we come in picture..we listen to your idea
                                            feasibility Test{`>>`}Company
                                            Incorporation{`>>`}Product
                                            Development{`>>`}Proudct Testing{`>>`}Team
                                            onboarding{`>>`}Pilot Run{`>>`}Digital
                                            Marketing{`>>`}Promotion{`>>`}Investment
                                            Deck {`>>`}Pitch Training.. We Take Care of
                                            Everything
                                        </p>
                                    </div>
                                </div>
                                <div claas="services">
                                    <div className="service-icon">
                                        <i className="fa fa-web "></i>
                                    </div>
                                    <div className=" service-content">
                                        <h4 className="service-title"></h4>
                                        <p className="text"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-one">
                                <div claas="services">
                                    <div className="service-icon">
                                        <i className="fa fa-web "></i>
                                    </div>
                                    <div className=" service-content">
                                        <h4 className="service-title">OUR STORY</h4>
                                        <p className="text">We Started All This With Simple Plan of Helping button friend in
                                            need back in our final days of your college, and we learn
                                            Something that working on startup is very painful and
                                            ungrateful thing to do, so we decided to make life of starter
                                            up founder easy by giving them every thing on their disposal
                                            so that the can concentrate on the execution's and
                                            operation only, so since then we are doing the same thing
                                            and i the span of 9 years we have helped 134 startup to grow
                                            and trust me when we say this its very satisfying</p>
                                    </div>
                                </div>
                                <div claas="services">
                                    <div className="service-icon">
                                        <i className="fa fa-web "></i>
                                    </div>
                                    <div className=" service-content">
                                        <h4 className="service-title">OUR MOTTO</h4>
                                        <p className="text">we believe in making technology easy and
                                            accessible,<br />
                                            stylish, advance and
                                            relevent product
                                            make it as grand a possile
                                            always be first one to
                                            introduce something
                                            new in our approach</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service--img">
                            <img src={ofcAnimated} />
                        </div>
                    </div>
                </section>

                <section id="What we do" className="What-we-do  offset">
                    <h3> WHAT WE OFFER </h3>
                    <h6>
                        Work of ours is focused on emerging technology
                    </h6>
                    <div className="table" id="app-website-dev">
                        <div className="Ideation-and-Evaluation">
                            <div className="b-heading">
                                <h3>App and Website Development</h3>
                            </div>
                            <div className="concept">
                                <span>Bring your product concept to life.</span>
                            </div>
                            <ul>
                                <li>We are web & app development company that turns your <br />ideas into button new driving force of
                                    your business.</li>
                                <li>We hire brilliant web and mobile app developers to deliver projects on time and maintain<br />
                                    the top-notch code standards.</li>
                            </ul>
                            <ul className="what-btn">

                                <li><button className="main-btn btn-two" href="#contact">Get Quotes </button></li>
                            </ul>
                        </div>
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3>Digital marketing </h3>
                            </div>
                            <div className="concept">
                                <span></span>
                            </div>
                            <ul>
                                <li>also called online marketing, is the promotion of brands to connect with potential customers
                                    using the internet and other forms of digital communication. <br />This includes not only
                                    email, social media, and web-based advertising, but also text and multimedia messages as button
                                    marketing channel.
                                    Essentially,<br /> if button marketing campaign involves digital communication, it's digital
                                    marketing.
                                </li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact">Get Quotes </button></li>
                            </ul>
                        </div>
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3>Company incorporation
                                    Company type Ideal for Tax advantages Legal compliances

                                </h3>
                            </div>
                            <div className="concept">
                                <span> Enterprises Digital Transformation Services</span>
                            </div>
                            <ul>
                                <li>Limited Liability Partnership Service-oriented businesses or businesses that have low
                                    investment needs Benefit on depreciation Business tax returns to be filed ROC returns to be
                                    filed,

                                    One Person Company Sole owners looking to limit their liability Tax holiday for first 3
                                    years under Startup India Higher benefits on depreciation No tax on dividend distribution
                                    Business returns to be filed Limited ROC compliance

                                    Private Limited Company Businesses that have button high turnover Tax holiday for first 3 years
                                    under Startup India Higher benefits on depreciation Business tax returns to be filed ROC
                                    returns to be filed An audit is mandatory

                                    Public Limited Company Businesses with button high turnover
                                </li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact"> Get Quotes</button></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="What we do" className="What-we-do  offset">
                    <div className="table" id="crm-erp">
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3>Pilot run and market fit testing</h3>
                            </div>
                            <div className="concept">
                                <span></span>
                            </div>
                            <ul>
                                <li>The pilot run is button testing process to ensure your entire production is on the right track
                                    and in control. A pilot run is the test production run that is implemented at the beginning
                                    of production to identify issues in how the product is assembled and the layout of the
                                    production line,
                                    We also Check the feasibility of the product with the market share of the product
                                </li>
                            </ul>
                            <ul className="what-btn">

                                <li><button className="main-btn btn-two" href="#contact"> Get Quotes</button></li>
                            </ul>
                        </div>
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3> Onboarding and bdm </h3>
                            </div>
                            <div className="concept">
                                <span></span>
                            </div>
                            <ul>
                                <li>What Is Vendor Onboarding? Vendor onboarding is the process of registering new suppliers in
                                    your company's vendor management systems, and getting them set up with your tools,
                                    processes, and workflows in order to transact with them. We also provide leader knows as BDM
                                    to look after the progress of onboarding to make strategy and marketing material for onboard
                                </li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact">Get Quotes </button></li>
                            </ul>
                        </div>
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3>CRM & ERP
                                </h3>
                            </div>
                            <div className="concept">
                                <span> Enterprises Digital Transformation Services</span>
                            </div>
                            <ul>
                                <li>CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) software are
                                    powerful tools for button business or enterprise to use. CRM handles the sales, marketing, and
                                    customer service information, we rent and customise the software as per your requirement so
                                    that you life become easy
                                </li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact"> Get Quotes</button></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="What we do" className="What-we-do What-we-do-3  offset">
                    <div className="table" id="investment-deck">
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3>Investment Deck</h3>
                            </div>
                            <div className="concept">
                                <span>What is an Investor Deck?</span>
                            </div>
                            <ul>
                                <li>An investor deck is usually button slide deck designed to give button short summary of your company,
                                    your business plan and your startup vision. Similar to button pitch deck, this is button document most
                                    of the times you send to potential investors..
                                    Pitch decks, also known as marketing decks, are primarily used by businesses trying to
                                    convince clients or investors to work with them. They're short presentations to help someone
                                    else learn about your business quickly. The primary goal of button pitch deck isn't to close button
                                    deal.</li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact">Get Quotes </button></li>
                            </ul>
                        </div>
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3> Research and Market Penetration</h3>
                            </div>
                            <div className="concept">
                                <span></span>
                            </div>
                            <ul>
                                <li>Market penetration is button measure of how much button product or service is being used by customers
                                    compared to the total estimated market for that product or service. Market penetration can
                                    also be used in developing strategies employed to increase the market share of button particular
                                    product or service.
                                    For that you need button depth level of research so that you exactly know what and how you need
                                    to present your product in the market.
                                </li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact">Get Quotes </button></li>
                            </ul>
                        </div>
                        <div className="Ideation-and-Evaluation ">
                            <div className="b-heading">
                                <h3>Game and Graphic Development

                                </h3>
                            </div>
                            <div className="concept">
                                <span> Enterprises Digital Transformation Services</span>
                            </div>
                            <ul>
                                <li>Development of traditional commercial PC and console games is normally funded by button publisher
                                    and can take several years to reach completion. Indie games usually take less time and money
                                    and can be produced by individuals and smaller developers.<br /> The independent game industry
                                    has been on the rise, facilitated by the growth of accessible game development software such
                                    as Unity platform and Unreal Engine[1] and new online distribution systems such as Steam and
                                    Uplay, as well as the mobile game market for Android and iOS devices.
                                </li>
                            </ul>
                            <ul className="what-btn">
                                <li><button className="main-btn btn-two" href="#contact">Get Quotes </button></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <WhyChooseUs />

                <section className="calltoact">
                    <div className="parallax">
                        <div className="call-content">
                            <h3 className="call-title">Curious to learn more? stay tuned</h3>
                            <p className="text"> You let us know whenever you want us to update anything or think something can be
                                optimised </p>
                            <div className="call-news">
                                <i className type="fa-fa-envelope"></i>
                                <input type="text" placehoder="tyu@gmai.com" name="" />
                                <button type="submit">
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact offset" id="contact">
                    <h3>Get in touch </h3>
                    <h6> contact us for any queries </h6>
                    <div className="form">
                        <div className="first-row">
                            <input type="text" placeholder="Name" name="" onChange={handleQueryForm('name')} value={queryForm.name} />
                            <input type="email" placeholder="Email" name="" onChange={handleQueryForm('email')} value={queryForm.email} />
                        </div>
                        <div className="second-row">
                            <input type="text" placeholder="Subject" name="" onChange={handleQueryForm('subject')} value={queryForm.subject} />
                            <input type="text" placeholder="phone" name="" onChange={handleQueryForm('phone')} value={queryForm.phone} />
                        </div>
                        <textarea placeholder="Services you are looking for " rows="5" onChange={handleQueryForm('query')} value={queryForm.query}></textarea>
                        <ul className="contact-btn">
                            <li><button className="main-btn btn-two queryformSubmitBtn" onClick={submitQueryForm}>Submit </button></li>
                        </ul>
                    </div>
                </section>
            </section>
            <FAQ />
        </section>
    )
}

export default Main;