import React from 'react';
import { Layout, Menu} from 'antd';

const { Header } = Layout;

const Layout_content = () =>{
    return(
        <Layout>
          <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Acasa</Menu.Item>
              <Menu.Item key="2">Instrumente</Menu.Item>
              <Menu.Item key="3">Grup</Menu.Item>
              <Menu.Item key="4">Setari</Menu.Item>

            </Menu>
          </Header>
        </Layout>
      )
}
export default Layout_content;