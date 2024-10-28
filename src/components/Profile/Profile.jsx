import React from 'react'
import style from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={style.main_container}>
      <ProfileInfo profile={props.profile} />
      <MyPosts posts={props.posts} updateNewPostText={props.updateNewPostTextAC} addPost={props.addPostAC} newPostText={props.newPostText}/>
    </div>
  );
};

export default Profile;
