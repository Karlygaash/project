import HeaderIcon from '../assets/img/icons/icone.png'
import '../assets/css/Header.css'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Header=()=>{
    const [nav,setNav]=useState(false)
    return(
        <header>
            <div className="header__container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={HeaderIcon} alt="logo"/>
                        <span>Crypto®</span>
                    </div>
                    
                    <ul className={`menu ${nav ? "active":""}`}>
                        <li>
                            <a href="">Download</a>
                        </li>
                        <li>
                            <a href="">NFTS</a>
                        </li>
                        <li>
                            <a href="">Bank</a>
                        </li>
                        <li>
                            <a href="">Newsletter</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                    </ul>
                    <div onClick={()=>setNav(!nav)} className="mobile__btn">
                        {nav ? <IoMdClose size={25}/> : <RiMenu3Fill size={25}/>}                 
                    </div>
                </div> 
            </div>
        </header>
    );
};

export default Header;