import React, { Component} from 'react';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';

const SubMenu = Menu.SubMenu; 
class Asider extends Component{
  render(){
    return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu  key="sub1"
                    title={<span><Icon type="dashboard" /><span>文字</span></span>}>
            <Menu.Item key="2"><NavLink to="a">技术</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="b">语录</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="c">日常</NavLink></Menu.Item>
          </SubMenu>
      </Menu>
    );
  }
}

export default Asider;