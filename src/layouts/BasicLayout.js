import React, {  Component } from 'react';
import {Route} from 'react-router-dom';
import { Layout } from 'antd';
import  NavMenu from '../components/asider';
import './basic_layout.scss';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

//const SubMenu = Menu.SubMenu;
export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider className="layout-sider" theme="light" width={256} collapsible="true">
          <div style={{ height: '32px', background: 'rgba(105,205,205,.8)', margin: '16px'}}/>
          <NavMenu/>
        </Sider>
        <Layout >
          <Header style={{ background: '#aaa', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
  