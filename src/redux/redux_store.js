// хранилище для всех данных
import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sideBarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

// объединение нескольких редьюсеров
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer, 
    authReducer: authReducer,
});

// создаем redux хранилище на основании всех редьюсеров
let store = createStore(reducers);
window.store = store;
export default store