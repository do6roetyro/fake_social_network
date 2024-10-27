import React from "react";
import { setCurrentPageAC, getUsersThunkCreator, toggleFollowThunkCreator } from "../../redux/users_reducer";
import { connect } from "react-redux";
import UsersPresent from "./UsersPresent";

class UserContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize)
  }

  render() {
    return <UsersPresent
      onPageChanged={this.onPageChanged}
      totalCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      isFetching={this.props.isFetching}
      followingInProgress={this.props.followingInProgress}
      toggleFollowTC={this.props.toggleFollowTC}
    
    />
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  setCurrentPageAC,
  getUsersTC: getUsersThunkCreator,
  toggleFollowTC: toggleFollowThunkCreator,
})(UserContainer);
