// import { Link } from 'react-router-dom';
import adiyaIcon from '../Assets/WhatsApp_Image_2023-03-06_at_4.18.56_PM-removebg-preview.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../styles/header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react';

const Header1 = () => {
    const [extendedNav, setExtendedNav] = useState('none')
    const extendedNavTogglerFn = () => {
        extendedNav == 'none' ? setExtendedNav('block') : setExtendedNav('none')
        console.log(extendedNav)
    }
    return (
        <>
            <nav className="header-nav">
                <section className="real-nav">
                    <div className="header-left-col">
                        <img src={adiyaIcon} alt="adiya-logo" className='adiya-icon' />
                    </div>
                    <div className="header-center-col">
                        <ul className="header-center-col-ul">
                            <li>
                                <AnchorLink href='#Home'>
                                    <span>HOME</span>
                                </AnchorLink>
                            </li>
                            <li>
                                <span>OUR STORY</span>
                                <ul className="inner-ul">
                                    <AnchorLink href='#our-story'>
                                        <li>Our Story</li>
                                    </AnchorLink>
                                    <AnchorLink href='#our-story'>
                                        <li>Our Motto</li>
                                    </AnchorLink>
                                </ul>
                            </li>
                            <li>
                                <span>WHAT WE DO</span>
                                <ul className="inner-ul">
                                    <AnchorLink href='#app-website-dev'>
                                        <li>APP & WEB DEVELOPMENT</li>
                                    </AnchorLink>
                                    <AnchorLink href='#crm-erp'>
                                        <li>CRM &ERP</li>
                                    </AnchorLink>
                                    <AnchorLink href='#investment-deck'>
                                        <li>INVESTMENT DECK</li>
                                    </AnchorLink>
                                </ul>
                            </li>
                            <li>
                                <span>CONTACT</span>
                                <ul className="inner-ul">
                                    <a href='https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d' target="blank">
                                        <li>Facebook</li>
                                    </a>
                                    <a href='https://www.linkedin.com/company/adiya-business-solution/' target="blank">
                                        <li>Linkedin</li>
                                    </a>
                                    <a href='https://twitter.com/?lang=en' target="_blank">
                                        <li>Twitter</li>
                                    </a>
                                    <a href='https://www.instagram.com/' target='_blank'>
                                        <li>Instagram</li>
                                    </a>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right-col">
                        <p>
                            <AnchorLink href="#footer">
                                <button className="login-btn">FOLLOW US</button>
                            </AnchorLink>
                        </p>
                    </div>
                    <div id="nav-hamburger" onClick={extendedNavTogglerFn}>
                        <RxHamburgerMenu />
                    </div>
                </section>




                <section className='extended-nav' style={{display: `${extendedNav}`}}>
                    <ul>
                        <li>
                            <AnchorLink href='#Home'>
                                <span>HOME</span>
                            </AnchorLink>
                        </li>
                        <li>
                            <span>OUR STORY</span>
                            <ul className="inner-ul">
                                <AnchorLink href='#our-story'>
                                    <li>Our Story</li>
                                </AnchorLink>
                                <AnchorLink href='#our-story'>
                                    <li>Our Motto</li>
                                </AnchorLink>
                            </ul>
                        </li>
                        <li>
                            <span>WHAT WE DO</span>
                            <ul className="inner-ul">
                                <AnchorLink href='#app-website-dev'>
                                    <li>APP & WEB DEVELOPMENT</li>
                                </AnchorLink>
                                <AnchorLink href='#crm-erp'>
                                    <li>CRM &ERP</li>
                                </AnchorLink>
                                <AnchorLink href='#investment-deck'>
                                    <li>INVESTMENT DECK</li>
                                </AnchorLink>
                            </ul>
                        </li>
                        <li>
                            <span>CONTACT</span>
                            <ul className="inner-ul">
                                <a href='https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d' target="blank">
                                    <li>Facebook</li>
                                </a>
                                <a href='https://www.linkedin.com/company/adiya-business-solution/' target="blank">
                                    <li>Linkedin</li>
                                </a>
                                <a href='https://twitter.com/?lang=en' target="_blank">
                                    <li>Twitter</li>
                                </a>
                                <a href='https://www.instagram.com/' target='_blank'>
                                    <li>Instagram</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <AnchorLink href="#footer">
                                <button className="login-btn">FOLLOW US</button>
                            </AnchorLink>
                        </li>
                    </ul>
                </section>
            </nav>
        </>
    )
}

export default Header1;