import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
  debugger
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Alexey M.",
        location: {
          country: "Russia",
          city: "Saint-Petersburg",
        },
        isFollowed: true,
        status: "I like skateboarding",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJh01X4pOeldEaBQi2D8SQbjxLYMQJ7scOw&s",
      },
      {
        id: 2,
        fullName: "Alice G.",
        location: {
          country: "Japan",
          city: "Tokio",
        },
        isFollowed: false,
        status: "Today is rainy",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrohg9bF9kjXFjGPlv9-NENikfZ1BcUWarHA&s",
      },
      {
        id: 3,
        fullName: "Mark F.",
        location: {
          country: "Norway",
          city: "Oslo",
        },
        isFollowed: true,
        status: "Anybody playing bowling?",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIBhfo5P7MvncVGapdKh463p-NcrxvcBSbQ&s",
      },
    ]);
  }

  let usersElements = props.users.map((user) => (
    <User
      fullName={user.fullName}
      avatar={user.avatar}
      location={user.location}
      status={user.status}
      isFollowed={user.isFollowed}
      key={user.id}
      id={user.id}
      onFollow={props.onFollow}
      onUnfollow={props.onUnfollow}
    />
  ));

  return (
    <div className={style.main_container}>
      <h2 className={style.title}>Users</h2>
      <div className={style.container}>{usersElements}</div>
      <button className={style.button}>Show more</button>
    </div>
  );
};

export default Users;
