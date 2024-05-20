import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({dialogs, messages}) => {

  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />)
  let messagesElements = messages.map(message => <MessageItem message={message.message} key={message.id} />)

  return (
    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        { dialogsElements }
      </ul>
      <ul className={style.messages_list}>
        { messagesElements }
      </ul>
    </div>
  )
}

export default Dialogs;

{/* <li className={`${style.dialog_item} ${style.active}`}>
          <NavLink to="/dialogs/1">Alex</NavLink>
        </li> */}