import style from "./User.module.css";
import userImg from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = (props) => {
  // let onFollow = () => {
  //   return props.onFollow(props.id);
  // };

  // let onUnfollow = () => {
  //   return props.onUnfollow(props.id);
  // };

  return (
    <div className={style.item}>
      <div className={style.container}>
        <NavLink to={`/profile/${props.id}`}>
          <img className={style.avatar} src={props.avatar ? props.avatar : userImg} alt={props.fullName} />
        </NavLink>
        {props.isFollowed ? <button
          className={style.button}
          onClick={() => {
            // onUnfollow()
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
              {
                withCredentials: true,
                headers: { "API-KEY": "67674eff-90eb-4503-9455-b6c9a607d764" }
              })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.onUnfollow(props.id)
                }
              })
          }}>Unfollow</button> :
          <button
            className={style.button}
            onClick={() => {
              // onFollow()
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, null,
                {
                  withCredentials: true,
                  headers: { "API-KEY": "67674eff-90eb-4503-9455-b6c9a607d764" }
                })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.onFollow(props.id)
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
