import React, { Component } from 'react';
import HeaderComponent from '../../components/Header'
import SiderComponent from '../../components/Sidebar'
import Main from '../../routes'
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;
class Home extends Component {
  render() {
    return(
      <Layout>
        <Header><HeaderComponent /></Header>
        <Layout>
          <Sider><SiderComponent /></Sider>
          <Content><Main/></Content>
        </Layout>
      </Layout>
    )
  }
}
export default Home