import React from 'react';
import { Select, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CommonType } from '../../constants/ActionTypes';
import './LanguageSwitch.scss';

class LanguageSwitch extends React.PureComponent {
  onChange = value => {
    const { dispatch } = this.props;
    dispatch({
      type: CommonType.CHANGE_LOCALE,
      lang: value,
    });
  };

  render() {
    const {
      persist: { lang },
    } = this.props;
    return (
      <div className="languageSwitch">
        <Icon className="icon" type="global" />
        <Select value={lang} onChange={this.onChange}>
          <Select.Option value="en-US">English</Select.Option>
          <Select.Option value="zh-CN">简体中文</Select.Option>
        </Select>
      </div>
    );
  }
}

LanguageSwitch.propTypes = {
  dispatch: PropTypes.func,
  persist: PropTypes.shape(),
};

export default connect(({ persist }) => ({ persist }))(LanguageSwitch);
