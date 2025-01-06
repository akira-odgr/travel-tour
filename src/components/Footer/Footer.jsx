import {
    RiFacebookFill,
    RiTwitterXFill,
    RiInstagramLine,
    RiPhoneFill,
    RiMapPinFill,
    RiMailFill,
} from "react-icons/ri";

import footerImg1 from "../../assets/images/instagram-1.jpg";
import footerImg2 from "../../assets/images/instagram-2.jpg";
import footerImg3 from "../../assets/images/instagram-3.jpg";
import footerImg4 from "../../assets/images/instagram-4.jpg";
import footerImg5 from "../../assets/images/instagram-5.jpg";
import footerImg6 from "../../assets/images/instagram-6.jpg";

import "./Footer.scss";

export const Footer = () => {
    return (
        <footer>
            <div className="section__container footer__container">
                <div className="footer__col">
                    <div className="footer__col__logo">
                        <a href="#">TravelToor</a>
                    </div>
                    <p>
                        Explore the world with us! Connect through our social
                        media channels, find quick links to essential resources,
                        and access 24/7 support to make your travel planning
                        effortless.
                    </p>
                    <ul className="footer__col__socials">
                        <li>
                            <a href="#">
                                <RiFacebookFill className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiTwitterXFill className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <RiInstagramLine className="icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Services</h4>
                    <ul className="footer__col__links">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Destinations</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Instagram</h4>
                    <div className="footer__col__flex">
                        <img src={footerImg1} alt="instagram" />
                        <img src={footerImg2} alt="instagram" />
                        <img src={footerImg3} alt="instagram" />
                        <img src={footerImg4} alt="instagram" />
                        <img src={footerImg5} alt="instagram" />
                        <img src={footerImg6} alt="instagram" />
                    </div>
                </div>
                <div className="footer__col">
                    <h4>Contact</h4>
                    <ul className="footer__col__links">
                        <li>
                            <a href="#">
                                <span>
                                    <RiPhoneFill className="icon" />
                                </span>
                                +91 0987654321
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    <RiMapPinFill className="icon" />
                                </span>
                                New Delhi, India
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    <RiMailFill className="icon" />
                                </span>
                                info@carrental
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                Copyright &copy; 2024 Web Design Mastery. All right reserved.
            </div>
        </footer>
    );
};
