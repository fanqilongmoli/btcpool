import React from 'react'
import {Button, Icon, Layout} from 'antd';
import Menus from './Menus'
import Headers from "./Headers";
import Bread from "./Bread";
import withRouter from 'umi/withRouter';
import {connect} from 'dva'
import config from '../utils/config'
import styles from './index.css'

import router from 'umi/router'

const {Header, Content, Sider} = Layout;
const App = ({dispatch, children, location, app}) => {
  const {selectedKeys} = app;
  const menusProps = {
    selectedKeys,
    onMenuClick(key) {
      dispatch({
        type: 'app/updateState',
        payload: {selectedKeys: key}
      })
    }
  };


  if (location.pathname === config.loginPage || location.pathname === config.register || location.pathname === config.forget) {

    return (
      <div>
        {children}
      </div>)
  }

  /**
   * token 不存在直接跳转到登录界面
   */
  if (window.localStorage.getItem(`${config.prefix}token`) == null && location.pathname !== config.loginPage) {
    router.push('/login');
  }

  return (
    <div>
      <Layout>
        <Header style={{position: 'fixed', zIndex: 1, width: '100%', background: '#262835'}}>
          <Headers/>
        </Header>
        <Layout style={{background: '#131720', marginTop: 64}}>
          <Sider width={200}>
            <Menus {...menusProps}/>
          </Sider>
          <Content style={{padding: '24px', minHeight: 280}}>
            <Bread location={location}/>
            {children}
          </Content>
        </Layout>
      </Layout>
      <div className={styles.qrcode}>
        <span className={styles.name}>立即咨询</span>
        <div className={styles.qrpic}></div>
      </div>
    </div>
  )


};

export default withRouter(connect(({app, loading}) => ({app, loading}))(App));
