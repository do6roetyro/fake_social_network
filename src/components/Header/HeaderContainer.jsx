import React from "react";
import axios from "axios";
import { setAuthData, setAuthStatus } from "../../redux/auth_reducer";
import { connect } from "react-redux";
import Header from './Header'


class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data
          this.props.setAuthData({ id, login, email })
          this.props.setAuthStatus(true)
        }
      })
  }

  render() {
    return (
      <Header login={this.props.login} isAuth={this.props.isAuth} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    // id: state.authReducer.id,
    // email: state.authReducer.email,
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
  };
};

export default connect(mapStateToProps, { setAuthData, setAuthStatus })(HeaderContainer);
