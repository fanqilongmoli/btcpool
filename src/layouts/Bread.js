import React from 'react'
import {Breadcrumb} from 'antd';

const breadcrumbNameMap = {
  '/dashboard': '状态总览',
  '/buy-power': '购买算力',
  '/withdraw': '提现',
  '/userinfo': '个人信息',
  '/update-password': '修改密码',
  '/address-manage': '地址管理',
};

const Bread = ({location}) => {
  console.log('location', location);
  return (
    <Breadcrumb>
      <Breadcrumb.Item><span style={{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 700
      }}>当前所在位置 : {breadcrumbNameMap[location.pathname]}</span></Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default Bread;
