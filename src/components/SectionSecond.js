import styles from '../assets/css/SectionSecond.module.css'
import Item from './Item'

const SectionSecond=({itemState})=>{
    return(
        <section className={styles.section_2}>
            <div className={styles.container}>
                <div className={styles.container__header}>
                    <div className={styles.header__title}>
                        <p>Trending</p>
                        <h3>Popular Artwork</h3>
                    </div>
                    <div className={styles.header__list}>
                        <p>All</p>
                        <p>Cyberpunk</p>
                        <p>3D</p>
                        <p>Video</p>
                        <p>Gif</p>
                        <p>Al Art</p>
                    </div>
                </div>
                <div className={styles.item__list}>
                    {itemState.map((element)=>(
                        <Item name={element.name} ethereum={element.ethereum}
                            ava={element.ava} dollor={element.dollor} artwork={element.artwork}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionSecond;