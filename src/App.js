import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainerAPIUrl from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/Common/PrivateRoute";

function App(props) {
  console.log(props)
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar state={props.sideBar} />
      <div className="app_wrapper_content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId?" element=
            {<PrivateRoute isAuth={props.isAuth} element={<ProfileContainerAPIUrl />} />}
          />
          <Route path="/dialogs/*" element=
            {<PrivateRoute isAuth={props.isAuth} element={<DialogsContainer />} />}
          />
          <Route path="/users" element=
            {<PrivateRoute isAuth={props.isAuth} element={<UsersContainer />} />}
          />
          <Route path="/news" element=
            {<PrivateRoute isAuth={props.isAuth} element={<News />} />}
          />
          <Route path="/music" element=
            {<PrivateRoute isAuth={props.isAuth} element={<Music />} />}
          />
          <Route path="/settings" element=
            {<PrivateRoute isAuth={props.isAuth} element={<Settings />} />}
          />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
    isAuth: state.authReducer.isAuth
  }
}

// подключение App к Redux
export default connect(mapStateToProps)(App);
