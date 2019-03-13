import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {message} from 'antd';

const propTypes = {
  auth_user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

class LoginChecker extends Component {
  componentDidMount() { 
    if (!this.props.auth_user) {
      message.error('您尚未登录，请先登录！');
      this.props.history.push('/login');
    }
  }

  componentDidUpdate() {
    if (!this.props.auth_user) {
      message.error('您尚未登录，请先登录！');
      this.props.history.push('/login');
    }
  }

  render() {
    return this.props.children;
  }
}

LoginChecker.propTypes = propTypes;
export default withRouter(LoginChecker);
