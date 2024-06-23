import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";

function App(props) {

  return (
    <div className="app_wrapper">
      <Header />
      <Navbar state={props.state.siteBar} />
      <div className="app_wrapper_content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost} 
              updateNewPostText={props.updateNewPostText} />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs 
              dialogsPage={props.state.dialogsPage} 
              addNewMessage={props.addNewMessage} 
              updateNewMessageText={props.updateNewMessageText} />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
