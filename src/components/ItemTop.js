import style from '../assets/css/ItemTop.module.css'
import Icon from '../assets/img/icons/Vector 3.png'
import Verificado from '../assets/img/icons/verificado.png';
import React from 'react';

const ItemTop=({name,ava,ethereum, email,percent})=>{
    return(
        <div className={style.itemTop}>
            <div className={style.item__person}>
                <div className={style.person_img}>
                    <img className={style.person_ava} src={"./img/"+ava}/>
                    <img className={style.verificado_img} src={Verificado} alt=""/>
                </div>
                <div className={style.person_information}>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>
            <div className={style.item__price}>
                <div className={style.item__price_ethereum}>
                    <p>{ethereum} ETH</p>
                    <img src={Icon} alt=""/>
                </div>
                <div className={style.item__price_percent}>

                    <p>{percent}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemTop;