import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <div className="page main-layout">{children}</div>;
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
