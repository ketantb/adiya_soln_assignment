import '../styles/styles.css'
import adiyaIcon from '../Assets/WhatsApp_Image_2023-03-06_at_4.18.56_PM-removebg-preview.png'

const Header = () => {
    return (
        <>
            <div className="nav">
                <div className="logop">
                    <div className="logo">
                        <a c href="#">
                            <img src={adiyaIcon} alt="logo"
                                width="100%" />
                        </a>
                    </div>
                    <div className="menue-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>


                <div className="navbar-toggler" type="buutton" id="bar">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>

                </div>

                <div className="menu-bar">
                    <ul className="menu-items">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#service">Our Story</a></li>
                        <li><a href="#What we do">What we do</a></li>
                        <li><a href="#contact">contact</a></li>


                    </ul>
                </div>

                <div className="navbar-social">
                    <span>Follow us </span>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Header;