import React from "react";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleFetchingState } from "../../redux/users_reducer";
import { connect } from "react-redux";
import UsersPresent from "./UsersPresent";
import { usersAPI } from "../../api/api";

class UserContainer extends React.Component {

  componentDidMount() {
    this.props.toggleFetchingState(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleFetchingState(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(40)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleFetchingState(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
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
      onFollow={this.props.follow}
      onUnfollow={this.props.unfollow}
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
