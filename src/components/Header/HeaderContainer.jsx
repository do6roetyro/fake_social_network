import React from "react";
import { setAuthData, setAuthStatus } from "../../redux/auth_reducer";
import { connect } from "react-redux";
import Header from './Header'
import { authAPI } from "../../api/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.login()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data
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
