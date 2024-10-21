import React from "react";
import axios from "axios";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users_reducer";
import { connect } from "react-redux";
import UsersPresent from "./UsersPresent";

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(40)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
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

    />
  }

};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followAC(userId)); // диспатчим вызов ActionCreator (вызов AC return action)
    },
    onUnfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
