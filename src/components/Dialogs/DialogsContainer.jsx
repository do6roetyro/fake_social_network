import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onUpdateNewMessageText = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={onAddMessage}
      updateNewMessageText={onUpdateNewMessageText}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
