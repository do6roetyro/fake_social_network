import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.main_container}>
      <ProfileInfo personalInfos={props.personalInfos} />
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile;