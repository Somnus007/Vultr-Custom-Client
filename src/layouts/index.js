import React from 'react';
import PropTypes from 'prop-types';
// import BlankLayout from './BlankLayout';
import { Helmet } from 'react-helmet';
import MainLayout from './MainLayout';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet titleTemplate="%s | React App" title="Xtract AI" />
        <MainLayout>{children}</MainLayout>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
