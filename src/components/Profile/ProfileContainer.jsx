import React from 'react'
import Profile from './Profile';
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC, setProfileThunkCreator } from '../../redux/profile_reducer';
import { useParams } from 'react-router-dom';

const ProfileContainerAPIUrl = (props) => {
  const params = useParams()
  return (
    <ProfileContainer {...props} params={params} />
  );
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.params.userId || 31772;
    this.props.setProfileThunkCreator(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} myPosts={this.props.posts} newPostText={this.props.newPostText} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

export default connect(mapStateToProps, { addPostAC, updateNewPostTextAC, setProfileThunkCreator })(ProfileContainerAPIUrl);
