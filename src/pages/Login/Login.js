import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { notification } from 'antd';
import PropTypes from 'prop-types';
import './Login.scss';
import { AccountType, CommonType } from '../../constants/ActionTypes';
import LanguageSwitch from '../../components/LanguageSwitch/LanguageSwitch';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.dispatchErrorNotify();
  }

  dispatchErrorNotify = () => {
    const {
      common: { httpErrorStatus },
      persist: { locale },
      dispatch,
    } = this.props;
    if (httpErrorStatus) {
      if (httpErrorStatus === 401) {
        notification.error({
          message: locale.authorizationDenied,
          description: locale.loginFirst,
        });
      } else if (httpErrorStatus === 403) {
        notification.error({
          message: locale.authorizationExpired,
          description: locale.loginAgain,
        });
      }
      dispatch({
        type: CommonType.SET_COMMON_STATE,
        payload: { httpErrorStatus: 0 },
      });
    }
  };

  login = () => {
    const { dispatch, history } = this.props;
    dispatch({
      type: AccountType.LOGIN,
      payload: {
        info: { userName: 'Allen Song', email: 'somnus.sxy@gmail.com' },
      },
    });
    history.push('/');
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
  common: PropTypes.shape(),
  history: PropTypes.shape(),
};

export default connect(({ persist, router, common }) => ({
  persist,
  router,
  common,
}))(withRouter(Login));
