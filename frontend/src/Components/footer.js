import fbIcon from '../Assets/images-removebg-preview (5).png'
import adiyaIcon from '../Assets/WhatsApp_Image_2023-03-06_at_4.18.56_PM-removebg-preview.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Footer = () => {
    return (
        <>
            <footer>
                <div className="row-one">
                    <img src={adiyaIcon} />
                    <span>Follow us: </span>
                    <div className='socials' id='footer'>
                        <ul>
                            <a href="https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d">
                                <FaFacebookSquare />
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d">
                                <FaLinkedin />
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d">
                                <FaTwitter />
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d">
                                <FaInstagram />
                            </a>
                        </ul>
                    </div>
                </div>

                <div className="row-two">
                    <div className="column-1">
                        <h6 className="footer-title">Company</h6>
                        <ul>
                            <li><button className='footer-btns'>Home</button></li>
                            <li><button className='footer-btns'>service</button></li>
                            <li><button className='footer-btns'>What we do</button></li>
                            <li><button className='footer-btns'>contact</button></li>
                        </ul>
                    </div>
                    <div className="row-three">
                        <div className="column-3">
                            <h6 className="footer-title">Contacts</h6>
                            <ul>
                                <li style={{fontSize: 14, fontWeight: 600, color: '#FFF'}}>
                                    Proposal@adiyabusinesssolution.com
                                </li>
                                <li style={{fontSize: 14, fontWeight: 600, color: '#FFF'}}>
                                    Contact number-+91 93721 94890 
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="column-2">
                        <h6 className="footer-title">subscribe Newsletter </h6>
                        <div className="newsletter">
                            <input type="text" name="" placeholder="Your Email" />
                            <div>
                                <button type="submit" className='subscribe-btn'>subscribe</button>
                            </div>
                        </div>
                        <p className="subscribe-text">subscribe for weekly update we wont send spam </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;