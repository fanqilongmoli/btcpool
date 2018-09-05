import React from 'react'
import {Button, Icon} from 'antd';
import Link from 'umi/link';
import styles from './Header.less'

const Headers = ({location}) => {
  const logoStyle = {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 400,
    fontFamily: 'Montserrat',
    lineHeight: '64px',
    cursor: 'pointer'
  };
  return (
    <div >
      <span style={logoStyle}>Bitcoin.com矿池</span>
      <Button style={{float: 'right', marginTop: 16}} type='primary' icon={'logout'}>注销</Button>
    </div>
  );
};

export default Headers;
