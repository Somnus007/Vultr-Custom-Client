import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.scss';
import { AccountType } from '../../constants/ActionTypes';
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    const { dispatch } = this.props;
    dispatch({
      type: AccountType.LOGIN,
      payload: {
        info: { userName: 'Allen Song', email: 'somnus.sxy@gmail.com' },
      },
    });
  };

  render() {
    const {
      persist: { locale },
    } = this.props;
    return (
      <div className="login-container">
        <LanguageSwitch />
        <h3>{locale.loginPage}</h3>
        <button type="button" onClick={this.login}>
          {locale.login}
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  persist: PropTypes.shape(),
};

export default connect(({ persist }) => ({ persist }))(Login);
