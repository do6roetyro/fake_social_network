import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sideBarReducer from "./sidebar_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store