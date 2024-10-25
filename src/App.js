import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainerAPIUrl from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar state={props.sideBar} />
      <div className="app_wrapper_content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainerAPIUrl />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  }
}

// подключение App к Redux
export default connect(mapStateToProps)(App);
