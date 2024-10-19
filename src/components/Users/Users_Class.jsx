import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import axios from "axios";

class Users_Class extends React.Component {
  constructor(props) {
    super(props) 
    this.getUsers = () => {
      if (this.props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
          .then(response => this.props.setUsers(response.data.items))
      }
    }
  }

  

  render() {
    let usersElements = this.props.users.map((user) => (
      <User
        fullName={user.name}
        avatar={user.photos.small}
        location={user.location || { country: 'Unknown', city: 'Unknown' }}
        status={user.status || "No status"}
        isFollowed={user.followed}
        key={user.id}
        id={user.id}
        onFollow={this.props.onFollow}
        onUnfollow={this.props.onUnfollow}
      />
    ))

    return (
      <div className={style.main_container}>
        <h2 className={style.title}>Users</h2>
        <button onClick={this.getUsers}>
          get users
        </button>
        <div className={style.container}>
          {this.props.users.length > 0 ? usersElements : <p>No users to display</p>}
        </div>
        <button className={style.button}>Show more</button>
      </div>
    )
  }
}

export default Users_Class