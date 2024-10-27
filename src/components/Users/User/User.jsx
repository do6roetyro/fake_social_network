import style from "./User.module.css";
import userImg from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = (props) => {

  return (
    <div className={style.item}>
      <div className={style.container}>
        <NavLink to={`/profile/${props.id}`}>
          <img className={style.avatar} src={props.avatar ? props.avatar : userImg} alt={props.fullName} />
        </NavLink>
        {props.isFollowed ? <button
          className={style.button}
          disabled={props.followingInProgress.includes(props.id)}
          onClick={() => {
            props.togglefollowingInProgress(true, props.id)
            usersAPI.unfollow(props.id)
              .then(data => {
                if (data.resultCode === 0) {
                  props.onUnfollow(props.id)
                  props.togglefollowingInProgress(false, props.id)
                }
              })
          }}>Unfollow</button> :
          <button
            className={style.button}
            disabled={props.followingInProgress.includes(props.id)}
            onClick={() => {
              props.togglefollowingInProgress(true, props.id)
              usersAPI.follow(props.id)
                .then(data => {
                  if (data.resultCode === 0) {
                    props.onFollow(props.id)
                    props.togglefollowingInProgress(false, props.id)
                  }
                })
            }}>
            Follow</button>}
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
