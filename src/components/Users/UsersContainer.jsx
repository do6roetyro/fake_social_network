import React from "react";
import axios from "axios";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleFetchingState } from "../../redux/users_reducer";
import { connect } from "react-redux";
import UsersPresent from "./UsersPresent";

class UserContainer extends React.Component {

  componentDidMount() {
    this.props.toggleFetchingState(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleFetchingState(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(40)

      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleFetchingState(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleFetchingState(false)
      })
  }

  render() {
    return <UsersPresent
      onPageChanged={this.onPageChanged}
      totalCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      onFollow={this.props.onFollow}
      onUnfollow={this.props.onUnfollow}
      isFetching={this.props.isFetching}
    />
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetchingState,
})(UserContainer);
