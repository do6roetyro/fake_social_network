import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onUpdateNewMessageText = (text) => {
          let action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <Dialogs
            addMessage={onAddMessage}
            updateNewMessageText={onUpdateNewMessageText}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
