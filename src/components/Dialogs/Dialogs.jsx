import React from "react";
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css'

const DialogItem = (props) => {

  let path = `/dialogs/${props.id}`;

  return (
    <li className={style.dialog_item}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

const Message = (props) => {
  return (
    <li className={style.message}>{props.message}</li>
  )
}

const Dialogs = () => {
  return (

    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        {/* <li className={`${style.dialog_item} ${style.active}`}>
          <NavLink to="/dialogs/1">Alex</NavLink>
        </li> */}
        <DialogItem name='Alex' id='1' />
        <DialogItem name='Boris' id='2' />
        <DialogItem name='Helena' id='3' />
        <DialogItem name='John' id='4' />
      </ul>
      <ul className={style.messages_list}>
        <Message message="Hello" />
        <Message message="Hello, how are you?" />
        <Message message="I'm fine, and you?" />
      </ul>
    </div>
  )
}

export default Dialogs;