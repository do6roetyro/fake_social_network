import React from "react";
import style from "./User.module.css";
import userImg from "../../../assets/images/user.png"

const User = (props) => {
  let onFollow = () => {
    return props.onFollow(props.id);
  };

  let onUnfollow = () => {
    return props.onUnfollow(props.id);
  };

  return (
    <div className={style.item}>
      <div className={style.container}>
        <img className={style.avatar} src={props.avatar ? props.avatar : userImg} alt={props.fullName} />
        <button
          className={style.button}
          onClick={props.isFollowed ? onUnfollow : onFollow}
        >
          {props.isFollowed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={style.card}>
        <span className={style.name}>{props.fullName}</span>
        <div className={style.location}>
          <span className={style.country}>{props.location.country}</span>
          <span className={style.city}>{props.location.city}</span>
        </div>
        <p className={style.status}>{props.status}</p>
      </div>
    </div>
  );
};

export default User;
