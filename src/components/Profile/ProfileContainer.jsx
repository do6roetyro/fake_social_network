import React from 'react'
import Profile from './Profile';
import { connect } from "react-redux";
import { setProfile } from '../../redux/profile_reducer';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';

const ProfileContainerAPIUrl = (props) => {
  const params = useParams()
  return (
    <ProfileContainer {...props} params={params} />
  );
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.params.userId || 31772;
    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setProfile(data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  };
};

export default connect(mapStateToProps, { setProfile })(ProfileContainerAPIUrl);
