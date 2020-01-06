import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, notification } from 'antd';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './Login.scss';
import { CommonType, AccountType } from '../../constants/ActionTypes';
import logo from '../../assets/images/logo.png';
import { pattern } from '../../utils';

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

  handleLogin = event => {
    const e = event || window.event;
    e.preventDefault();
    const { form, dispatch, history } = this.props;
    form.validateFields(async (error, values) => {
      if (!error) {
        await dispatch({
          type: AccountType.LOGIN,
          ...values,
          callback: () => {
            history.push('/');
          },
        });
      }
    });
  };

  render() {
    const {
      // persist: { locale },
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className="login-container">
        <Helmet title="Login" />
        <div className="header-placeholder">
          <div className="login-header">
            <a className="logo" href="/">
              <img width={48} alt="logo" src={logo} />
            </a>
          </div>
        </div>
        <div className="login-center">
          <h2>Welcome To Customized Vultr Portal</h2>
          <h3>
            Easily deploy cloud servers, bare metal, and storage worldwide
          </h3>
          <Form
            onSubmit={this.handleLogin}
            className="login-form"
            autoComplete="off"
          >
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please input a valid email address',
                    pattern: pattern.email,
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('apiKey', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your API key!',
                    pattern: pattern.required,
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  autoComplete="new-password"
                  placeholder="API Key"
                />
              )}
            </Form.Item>
            <div className="signUp">
              <span>No account yet?</span>
              <a target="__blank" href="https://www.vultr.com/?ref=8353553-4F">
                Sign Up
              </a>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="footer-placeholder">
          <div className="login-footer">
            <a target="__blank" href="https://www.vultr.com/?ref=8353553-4F">
              Vultr
            </a>
            <a
              target="__blank"
              href="https://github.com/Somnus007/Vultr-Custom-Client"
            >
              <Icon type="github" />
            </a>
            <a target="__blank" href="https://ant.design/docs/react/introduce">
              Ant Design
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  persist: PropTypes.shape(),
  common: PropTypes.shape(),
  history: PropTypes.shape(),
  form: PropTypes.shape(),
};

export default Form.create({ name: 'login_form' })(
  connect(({ persist, router, common }) => ({
    persist,
    router,
    common,
  }))(withRouter(Login))
);
