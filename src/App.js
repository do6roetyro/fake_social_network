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
import WithAuthNavigate from "./hoc/WithAuthNavigate";

function App(props) {
  console.log(props)
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar state={props.sideBar} />
      <div className="app_wrapper_content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<WithAuthNavigate isAuth={props.isAuth} />}>
            <Route path="/profile/:userId?" element={<ProfileContainerAPIUrl />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
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
