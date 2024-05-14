import React from "react";
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css'


const Dialogs = () => {
  return (

    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        <li className={`${style.dialog_item} ${style.active}`}>
          <NavLink to="/dialogs/1">Alex</NavLink>
        </li>
        <li className={style.dialog_item}>
          <NavLink to="/dialogs/2">Boris</NavLink>
        </li>
        <li className={style.dialog_item}>
          <NavLink to="/dialogs/3">Helena</NavLink>
        </li>
        <li className={style.dialog_item}>
          <NavLink to="/dialogs/4">John</NavLink>
        </li>
      </ul>
      <ul className={style.messages_list}>
        <li className={style.message}>Hello</li>
        <li className={style.message}>Hello, how are you?</li>
        <li className={style.message}>I'm fine, and you?</li>
      </ul>
    </div>
  )
}

export default Dialogs;