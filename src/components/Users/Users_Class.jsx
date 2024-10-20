import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import axios from "axios";

class Users_Class extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pagesNumbers = []
    for (let i = 1; i <= pagesCount; i++) {
      pagesNumbers.push(i)
    }
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
        <ol className={style.pagination_list}>
          {pagesNumbers.map((pageNumber) => {
            return <li onClick={(event) => { this.onPageChanged(pageNumber) }} className={pageNumber === this.props.currentPage ? style.pagination_current : style.pagination}>{pageNumber}</li>
          })}
        </ol>
        <div className={style.container}>
          {this.props.users.length > 0 ? usersElements : <p>No users to display</p>}
        </div>
        <button className={style.button}>Show more</button>
      </div>
    )
  }
}

export default Users_Class