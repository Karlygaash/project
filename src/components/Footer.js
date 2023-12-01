import styles from '../assets/css/Footer.module.css'
import Logo from '../assets/img/icons/logo.png'
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import BlurCircle from '../assets/img/background-img/blur-circle.png'

const Footer=()=>{
    return(
        <footer>
            <div className={styles.footer__container}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__item_title}>
                            <img src={Logo} alt=""/>
                            <h2>Crypto®</h2>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className={styles.footer__social__apps}>
                            <a href=""><TiSocialTwitter className={styles.social__app}/></a>
                            <a href=""><FaInstagram className={styles.social__app}/></a>
                            <a href=""><RiLinkedinFill className={styles.social__app}/></a>
                        </div>
                    </div>
                    <div className={styles.footer__links}>
                        <div className={styles.footer__link}>
                            <h3>
                                Crypto®
                            </h3>
                            <ul>
                                <li><a href="">Download</a></li>
                                <li><a href=''>NFTs</a></li>
                                <li><a href=''>Rank</a></li>
                                <li><a href=''>Newsletter</a></li>
                                <li><a href=''>FAQ</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer__link}>
                            <h3>
                                Important links
                            </h3>
                            <ul>
                                <li><a href=''>About us</a></li>
                                <li><a href=''>Questions</a></li>
                                <li><a href=''>Press</a></li>
                                <li><a href=''>Contact us</a></li>
                                <li><a href=''>Legel</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.blurCircle} src={BlurCircle}/>
        </footer>
    );
};

export default Footer;