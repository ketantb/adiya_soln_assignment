import fbIcon from '../Assets/images-removebg-preview (5).png'
import adiyaIcon from '../Assets/WhatsApp_Image_2023-03-06_at_4.18.56_PM-removebg-preview.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row-one">
                    <a className='logo' href="#">
                        <img src={adiyaIcon}/>
                    </a>
                    <span>Follow us: </span>
                    <ul>
                        <a href="https://www.facebook.com/adiyabusinesssolution?mibextid=LQQJ4d">
                            <img src={fbIcon}/></a>
                    </ul>
                </div>

                <div className="row-two">
                    <div className="column-1">
                        <h6 className="footer-title">Company</h6>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">service</a></li>
                            <li><a href="#">What we do</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </div>
                    <div className="row-three">
                        <div className="column-3">
                            <h6 className="footer-title">Contacts</h6>
                            <ul>
                                <li>
                                    Proposal@adiyabusinesssolution.com
                                </li>
                                <li>Contact number-+91 93721 94890 </li>
                            </ul>
                        </div>

                    </div>
                    <div className="column-2">
                        <h6 className="footer-title">subscribe Newsletter </h6>
                        <div className="newsletter">
                            <input type="text" name="" placeholder="Your Email"/>
                                <button type="submit"></button>
                        </div>
                        <p className="text">subscribe for weekly update.we dont send span </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;