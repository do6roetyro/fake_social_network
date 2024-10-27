import style from "./User.module.css";
import userImg from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className={style.item}>
      <div className={style.container}>
        <NavLink to={`/profile/${props.id}`}>
          <img className={style.avatar} src={props.avatar ? props.avatar : userImg} alt={props.fullName} />
        </NavLink>
        <button
          className={style.button}
          disabled={props.followingInProgress.includes(props.id)}
          onClick={() => { props.toggleFollowTC(props.id, props.isFollowed) }}>
          {props.isFollowed ? 'Unfollow' : 'Follow'}
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
