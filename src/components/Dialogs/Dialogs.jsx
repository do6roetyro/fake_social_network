import React from "react";
import style from './Dialogs.module.css'


const Dialogs = () => {
  return (

    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        <li className={`${style.dialog_item} ${style.active}`}>Alex</li>
        <li className={style.dialog_item}>Boris</li>
        <li className={style.dialog_item}>Helena</li>
        <li className={style.dialog_item}>John</li>
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