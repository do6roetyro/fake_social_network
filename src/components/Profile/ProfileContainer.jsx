import React from 'react'
import Profile from './Profile';
import axios from 'axios';
import { connect } from "react-redux";
import { setProfile } from '../../redux/profile_reducer';
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setProfile(response.data)
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
