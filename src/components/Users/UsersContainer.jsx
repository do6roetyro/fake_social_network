// контейнер берет на себя взаимодействие с redux хранилишем, извлечением необходимых данных и передача
// в компоненты как пропсы. Компоненты чисто рендерятся и они не парятся по поводу того откуда приходят данные
// и как ими управлять
// + переиспользуемость компонента который завернут в контейнер. Его можно использовать в других контейнерах

import React from "react";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users_reducer";
import { connect } from "react-redux";

//  ф. для связи redux хранилища store c пропсами компонента. Она получает весь state
//  и возвращает объект который содержит только те данные которые нужны конкретному компоненту
//  эти пропсы потом передаются в компоненты Users

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

//  функция связывает actions c props компонента, чтобы компонент мог отправлять
//  dispatch эти действия в хранилище redux

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followAC(userId)); // диспатчим уже экшн
    },
    onUnfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  };
};

// connect соединяет react компонент с redux store. Она делает это, передавая
// данные и методы для отправки действий в виде props моему компоненту

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
