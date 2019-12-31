import React from 'react';
import { Spin, Icon } from 'antd';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
// import PropTypes from 'prop-types';
// import { CommonType } from '../../constants/ActionTypes';
import './GlobalLoading.scss';

class GlobalLoading extends React.PureComponent {
  componentDidMount() {
    NProgress.start();
  }

  componentWillUnmount() {
    NProgress.done();
  }

  render() {
    const indicator = <Icon type="loading" />;
    return (
      <div className="globalLoading">
        <Spin indicator={indicator} size="large" />
      </div>
    );
  }
}

GlobalLoading.propTypes = {};

export default connect(({ persist }) => ({ persist }))(GlobalLoading);
