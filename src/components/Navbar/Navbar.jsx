import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import style from "./Navbar.module.css";

const NavBar = (props) => {

  const checkActiveClass = (isActive) =>
    isActive ? `${style.link} ${style.link_active}` : style.link;

  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => checkActiveClass(isActive)}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => checkActiveClass(isActive)}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => checkActiveClass(isActive)}
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => checkActiveClass(isActive)}
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => checkActiveClass(isActive)}
        >
          Settings
        </NavLink>
      </div>
      <div className={style.item}>
        <Friends friends={props.state}/>
      </div>
    </nav>
  );
};

export default NavBar;
