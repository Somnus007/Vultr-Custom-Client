import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="page main-layout">
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/documents">documents</NavLink>
          <NavLink to="/jobAdmin">jobAdmin</NavLink>
          <NavLink to="/userManagement">userManagement</NavLink>
        </div>
        {children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
