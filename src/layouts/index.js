import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import BlankLayout from './BlankLayout';
import MainLayout from './MainLayout';
import { CommonType } from '../constants/ActionTypes';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.updateLocaleState();
    this.checkPermission();
  }

  componentDidUpdate(prevProps) {
    const {
      router: {
        location: { pathname },
      },
      common: { httpErrorStatus },
      history: { push },
    } = this.props;
    const {
      router: {
        location: { pathname: prevPathname },
      },
      common: { httpErrorStatus: prevHttpErrorStatus },
    } = prevProps;
    if (prevPathname !== pathname) {
      this.checkPermission();
    }
    if (!prevHttpErrorStatus && httpErrorStatus) {
      if (httpErrorStatus === 401 || httpErrorStatus === 403) {
        push('/login');
      } else if (String(httpErrorStatus).indexOf('50') === 0) {
        push('/500');
      }
    }
  }

  checkPermission = () => {
    const {
      persist: { authorized },
      history: {
        location: { pathname },
        push,
      },
    } = this.props;
    if (pathname === '/login' && authorized) {
      push('/projects');
    }
    if (
      pathname !== '/login' &&
      pathname !== '/500' &&
      pathname !== '/404' &&
      !authorized
    ) {
      push('/login');
    }
  };

  updateLocaleState = () => {
    const {
      dispatch,
      persist: { lang },
    } = this.props;
    dispatch({
      type: CommonType.CHANGE_LOCALE,
      lang,
    });
  };

  setLayout = () => {
    const {
      persist: { authorized },
      children,
    } = this.props;
    if (authorized) {
      return <MainLayout>{children}</MainLayout>;
    } else {
      return <BlankLayout>{children}</BlankLayout>;
    }
  };

  render() {
    return (
      <>
        <Helmet titleTemplate="%s - React App" title="React App" />
        {this.setLayout()}
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  persist: PropTypes.shape(),
  history: PropTypes.shape(),
  router: PropTypes.shape(),
  common: PropTypes.shape(),
};

export default withRouter(
  connect(({ persist, router, common }) => ({ persist, router, common }))(
    Layout
  )
);
