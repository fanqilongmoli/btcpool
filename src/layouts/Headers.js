import React from 'react'
import {Button, Icon} from 'antd';
import router from 'umi/router';
import styles from './Header.less'
import config from "../utils/config";

const Headers = ({location}) => {
  const logoStyle = {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 400,
    fontFamily: 'Montserrat',
    lineHeight: '64px',
    cursor: 'pointer'
  };
  const logout=()=>{
    window.localStorage.removeItem(`${config.prefix}username`);
    window.localStorage.removeItem(`${config.prefix}token`);
    router.push('/login')
  };

  return (
    <div >
      <span style={logoStyle}>Bitcoin.com矿池</span>
      <Button style={{float: 'right', marginTop: 16}} type='primary' icon={'logout'} onClick={logout}>注销</Button>
    </div>
  );
};

export default Headers;
