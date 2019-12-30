import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import { AccountType } from '../../constants/ActionTypes';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    const { dispatch } = this.props; //eslint-disable-line
    dispatch({
      type: AccountType.LOGIN,
      payload: {
        info: { userName: 'Allen Song', email: 'somnus.sxy@gmail.com' },
      },
    });
  };

  render() {
    return (
      <div className="login-container">
        <h3>Login Page</h3>
        <button type="button" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

export default connect()(Login);
