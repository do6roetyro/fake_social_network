import React from "react";
import style from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a href='#' className={style.link}>Profile</a>
      </div>
      <div className={style.item}>
        <a href='#' className={style.link}>Messages</a>
      </div>
      <div className={style.item}>
        <a href='#' className={style.link}>News</a>
      </div>
      <div className={style.item}>
        <a href='#' className={style.link}>Music</a>
      </div>
      <div className={style.item}>
        <a href='#' className={style.link}>Settingsc</a>
      </div>
    </nav>
  )
}

export default NavBar;