import styles from '../assets/css/Item.module.css'

const Item=({name,ava,ethereum,dollor,artwork})=>{
    return(
        <div className={styles.item}>
            <img className={styles.item__image} src={"./img/"+artwork} alt=""/>
            <div className={styles.item__description}>
                <div className={styles.item__person}>
                   <img src={"./img/"+ava} alt="ava"/>
                    <div className={styles.item__person_name}>
                        <p>Owned by</p>
                        <h4>{name}</h4>
                    </div>
                </div>
                <div className={styles.item__price}>
                    <p className={styles.item__price_dollor}>{dollor}$</p>
                    <b className={styles.item__price_ethereum}>{ethereum}&nbsp;ETH</b>
                </div>
            </div>
        </div>
    );
};

export default Item;