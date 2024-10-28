import React from "react"
import { loginThunkCreator } from "../../redux/auth_reducer"
import { connect } from "react-redux"
import Header from './Header'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.loginThunkCreator()
  }

  render() {
    return (
      <Header login={this.props.login} isAuth={this.props.isAuth} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
  };
};

export default connect(mapStateToProps, { loginThunkCreator })(HeaderContainer);
