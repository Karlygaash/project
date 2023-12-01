import styles from '../assets/css/SectionThird.module.css'
import ItemTop from './ItemTop';
import BackgroundImage6 from '../assets/img/background-img/Group 6.png'
import BackgroundImage7 from '../assets/img/background-img/Group 7.png'

const SectionThird=({itemState})=>{
    return(
        <section className={styles.section_3}>
            <div className={styles.container}>
                <div className={styles.container__header}>
                    <div className={styles.header__title}>
                        <p>This week</p>
                        <h2>Top Collectors</h2>
                    </div>
                    <div>
                        <select className={styles.select__option}>
                            <option>This week</option>
                            <option>This month</option>
                            <option>This year</option>
                        </select>
                    </div>
                </div>
                <div className={styles.itemTop_list}>
                    {itemState.map((element)=>(
                        <ItemTop name={element.name} ethereum={element.ethereum} percent={element.percent}
                            ava={element.ava} dollor={element.dollor} email={element.email}
                        />
                    ))}
                </div>
            </div>
            <img className={styles.backgroundImage6} src={BackgroundImage6}/>
            <img className={styles.backgroundImage7} src={BackgroundImage7}/>
        </section>
    );
};

export default SectionThird;