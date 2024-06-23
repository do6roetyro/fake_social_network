import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friendsList = props.friends.friends.map((friend) => {
    return <Friend name={friend.name} avatarUrl={friend.avatarUrl} key={friend.id} />;
  });

  return (
    <>
      <h3 className={style.title}>Friends</h3>
      <ul className={style.list}>{friendsList}</ul>
    </>
  );
};

export default Friends;
