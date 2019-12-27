import React from 'react';
import PropTypes from 'prop-types';

const BlankLayout = props => {
  const { children } = props;
  return <div className="page blank-layout">{children}</div>;
};

BlankLayout.propTypes = {
  children: PropTypes.node,
};

export default BlankLayout;
