import React from "react";
import style from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a href='/profile' className={style.link}>Profile</a>
      </div>
      <div className={style.item}>
        <a href='/dialogs' className={style.link}>Dialogs</a>
      </div>
      <div className={style.item}>
        <a href='/news' className={style.link}>News</a>
      </div>
      <div className={style.item}>
        <a href='/music' className={style.link}>Music</a>
      </div>
      <div className={style.item}>
        <a href='/settings' className={style.link}>Settings</a>
      </div>
    </nav>
  )
}

export default NavBar;