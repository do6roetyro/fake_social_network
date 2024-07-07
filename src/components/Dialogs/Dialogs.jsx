import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let updateNewMessageText = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <>
      <div className={style.dialogs}>
        <ul className={style.dialogs_list}>{dialogsElements}</ul>
        <ul className={style.messages_list}>{messagesElements}</ul>
      </div>
      <div className={style.write_message}>
        <textarea
          className={style.textarea}
          onChange={updateNewMessageText}
          value={props.dialogsPage.newDialogMessageText}
          name="write-message"
          id="write-message"
          cols="30"
          rows="3"
        ></textarea>
        <button className={style.button} onClick={addMessage}>
          Отправить сообщение
        </button>
      </div>
    </>
  );
};

export default Dialogs;
