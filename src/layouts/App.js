import React from 'react'
import {Button, Icon, Layout} from 'antd';
import Menus from './Menus'
import Headers from "./Headers";

const {Header, Content, Footer, Sider} = Layout;
const App = ({children}) => {

  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <Headers/>
      </Header>
      <Layout style={{background: '#000', marginTop: 64}}>
        <Sider width={200} style={{background: '#000'}}>
          <Menus/>
        </Sider>
        <Content style={{padding: '24px', minHeight: 280}}>
          {children}
        </Content>
      </Layout>

    </Layout>
  )


};

export default App;
