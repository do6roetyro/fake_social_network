import MyPosts from "./MyPosts";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile_reducer";
import { connect } from "react-redux";

//  ф. для связи redux хранилища store c пропсами компонента. Она получает весь state 
//  и возвращает объект который содержит только те данные которые нужны конкретному компоненту
//  эти пропсы потом передаются в компоненты myMosts

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

//  функция связывает actions c props компонента, чтобы компонент мог отправлять
//  dispatch эти действия в хранилище redux

let mapDispatchToProps = (dispatch) => {
  return { 
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

// connect соединяет react компонент с redux store. Она делает это, передавая
// данные и методы для отправки действий в виде props моему 

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
