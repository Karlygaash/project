import styles from '../assets/css/SectionFirst.module.css'
import Google from '../assets/img/icons/google.png'
import Apple from '../assets/img/icons/apple.png'
import ItemImage1 from '../assets/img/items/Девушка 1.png'
import Avatar from '../assets/img/icons/Avatar.png'
import Verificado from '../assets/img/icons/verificado.png'
import BackgroundImage1 from '../assets/img/background-img/Group 3.png'
import BackgroundImage2 from '../assets/img/background-img/Group 4.png'
import BackgroundImage3 from '../assets/img/background-img/Group 5.png'
import BlurCircle from '../assets/img/background-img/blur-circle (1).png'

const SectionFirst = () => {
    return ( 
    <section className={styles.section-1}>
        <div className={styles.container}>
            <div className={styles.section__content}>
                <div className={styles.section__text_app}>
                    <p className={styles.section__title}>O Maior Marketplace de NFTs do Brasil</p>
                    <div className={styles.section__applications}>
                        <div className={styles.application}>
                            <div className={styles.application_img}>
                                <img src={Google} alt="google"/>
                            </div>
                            <div className={styles.application_text}>
                                <p>GET IT ON</p>
                                <h3>Google Play</h3>
                            </div>
                        </div>
                        <div className={styles.application}>
                            <div className={styles.application_img}>
                                <img src={Apple} alt="apple"/>
                            </div>
                            <div className={styles.application_text}>
                                <p>Download on the</p>
                                <h3>App Store</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.section__item}>
                    <img className={styles.section__item_img} src={ItemImage1} alt=""/>
                    <div className={styles.item__desciption}>
                        <div className={styles.item__person}>
                            <div className={styles.item__ava}>
                                <img className={styles.item__ava_img} src={Avatar} alt="avatar"/>
                                <img className={styles.item__ava_img_img} src={Verificado} alt=""/>
                            </div>
                            <div className={styles.item__title}>
                                <p>Owned by</p>
                                <h4>Hacker</h4>
                            </div>
                        </div>
                        <div className={styles.item__price}>
                            <p>2.432,21$</p>
                            <h4>1.2 ETH</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className={styles.blur_circle} src={BlurCircle}/>
        <img className={styles.backgroundImage1} src={BackgroundImage1} alt=""/>
        <img className={styles.backgroundImage2} src={BackgroundImage2} alt=""/>
        <img className={styles.backgroundImage3} src={BackgroundImage3} alt=""/>
        <div className={styles.stripes}>
            <div className={styles.stripe1}>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20% OFF</b>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20% OFF</b>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20% OFF</b>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20%</b>
            </div>
            <div className={styles.stripe2}>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20% OFF</b>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20% OFF</b>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20% OFF</b>
                <p className={styles.pp}>CRYPTO®</p>
                <b className={styles.bb}>20%</b>
            </div>
        </div>
    </section> );
};
 
export default SectionFirst;