import React, { Component } from 'react';
import './index.css'
import { Menu, Icon } from 'antd';
import routesConfig  from '../routes/config'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;

class Sidebar extends Component {
  render() {
    return(
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1-1']}
        defaultOpenKeys={['1']}
        mode="inline"
      >
        {
          routesConfig.menus.map((subs, index) => (
            <SubMenu
              key={subs.key}
              title={
                <span>
                  <Icon type="mail" />
                  <span>{subs.title}</span>
                </span>
              }
            >
              {
                subs.children.map((menus, i) => (
                  <Menu.Item key={menus.key}>
                    {menus.meta.title}
                    <Link to={menus.path}></Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
       
      </Menu>
    )
  }
}
export default Sidebar