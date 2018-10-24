import React from 'react'
import {Button, Avatar, Row, Col} from 'antd';
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
  const logout = () => {
    window.localStorage.removeItem(`${config.prefix}username`);
    window.localStorage.removeItem(`${config.prefix}token`);
    router.push('/login')
  };
  const username = window.localStorage.getItem(`${config.prefix}username`);
  return (
    <div>
      <Row>
        <Col span={6}>
          <span style={logoStyle}>蜂鸟科技</span>
        </Col>
        <Col span={17}>
          <div style={{float:'right',marginRight:20}}>
            <Avatar>User</Avatar>
            <span style={{marginTop: 10, marginLeft: 5}}>{username}</span>
          </div>
        </Col>
        <Col span={1}>
          <Button type='primary' icon={'logout'} onClick={logout}>注销</Button>
        </Col>

      </Row>

    </div>

  );
};

export default Headers;
