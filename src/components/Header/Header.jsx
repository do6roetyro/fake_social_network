import React from "react";
import Logo from '../../assets/images/main_logo.png'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.image}
        src={Logo}
        alt="Логотип социальной сети"
        width={64}
        height={64}
      ></img>
    </header>
  );
};

export default Header;
