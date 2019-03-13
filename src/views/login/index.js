import React, {Component} from 'react';
import {Layout,Icon, Form, Input, Checkbox, Button} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './login.scss';
import { login as loginAction } from './actions';

const inputStyle = {
  color: 'rgba(0,0,0,.25)'
};
const {Content, Footer} = Layout;
class Login extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values.username, values.password);
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;//props.form由Form.create() 提供
    const isLoading = this.props.status === 'loading';
    // if (this.props.errorMessage) {
    //   this.props.form.setFields({
    //     username: {
    //       errors: [{
    //         "message": "Please input your username!",
    //         "field": "username"
    //       }],
    //     },
    //   });
    // }
    return (
      <Layout className="login-container">
        <div className="login-lang">
          <span>
             <Icon type="global" />
          </span>
        </div>
        <Content className="login-content">
          <div className="set-center">
            <div className="login-content-top">
              MT-ADMIN
            </div>
            <div className="login-content-main">
              <div className="login-form-wrapper">
                <Form className="login-form" onSubmit={this.handleSubmit}>
                  <div>
                    <Form.Item>
                    {
                      getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名！' }],
                      })(
                        <Input prefix={<Icon type="user" style={inputStyle} />} placeholder="用户名" />
                      )
                    }
                    </Form.Item>
                    <Form.Item>
                      {
                        getFieldDecorator('password', {
                          rules: [{ required: true,message: '请输入密码!' }, {min : 6, message: '密码长度须大于6位'}],
                        })(
                          <Input prefix={<Icon type="lock" style={inputStyle} />} type="password" placeholder="密码" />
                        )
                      }
                    </Form.Item>
                    <Form.Item>
                      {
                        getFieldDecorator('remember', {
                          valuePropName: 'checked',
                          initialValue: true,
                        })(
                          <Checkbox>记住我</Checkbox>
                        )
                      }
                      <a href="/" className="login-form-forgot">忘记密码？</a>
                      <Button type="primary" htmlType="submit" loading={isLoading} className="login-form-loginbutton">
                        {isLoading ? '登录中' : '登录'}
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Content>
        <Footer className="login-footer">Copyright <span><Icon type="copyright" /></span> 上海好耐电子科技有限公司</Footer>
      </Layout>
    );
  }
}
const LoginView = Form.create()(Login);

LoginView.propTypes ={
  status: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

//state => 整个store对象
const mapStateToProp = (state) => {
  return {
    status : state.login.status,
    errorMessage :state.login.errorMessage,
  }
};

const mapDispatchToProp = (dispatch, ownProps) => {  
  return {
    onLogin : (username, password) => {
      dispatch(loginAction(username, password, ownProps.history));
    }
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(LoginView);