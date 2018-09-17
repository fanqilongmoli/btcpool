import React from 'react'
import {Menu, Icon, Avatar} from 'antd'
import Link from 'umi/link'

const {SubMenu} = Menu;
const MenuItemGroup = Menu.ItemGroup;

const Menus = ({onMenuClick,selectedKeys}) => {
  return (

      <Menu
        mode="inline"
        theme={'dark'}
        defaultSelectedKeys={[selectedKeys]}
        style={{height: '100%'}}>
        <div style={{height: 78, padding: 20,}}>
          <Avatar style={{float: 'left'}}>User</Avatar>
          <div style={{float: 'left'}}>
            <div style={{marginTop: 10, marginLeft: 5}}>fanqilong</div>
            <div style={{marginTop: 16, marginLeft: 5}}>0.000 000 00 btc</div>
          </div>
        </div>
        <Menu.Item key={'1'} onClick={() => {onMenuClick('1')}}>
          <Link to='/dashboard'>
            <Icon type="desktop"/>
            <span>状态总览</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={'2'} onClick={() => {onMenuClick('2')}}>
          <Link to='/buy-power'>
            <Icon type="shopping-cart"/>
            <span>购买算力</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={'3'} onClick={() => {onMenuClick('3')}}>
          <Link to='/withdraw'>
            <Icon type="desktop"/>
            <span>提现</span>
          </Link>
        </Menu.Item>
        <MenuItemGroup key="g2" title="账户管理">
          <Menu.Item key={'4'} onClick={() => {onMenuClick('4')}}>
            <Link to='/userinfo'>
              <Icon type="user"/>
              <span>个人信息</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={'5'} onClick={() => {onMenuClick('5')}}>
            <Link to='/update-password'>
              <Icon type="key"/>
              <span>修改密码</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={'6'} onClick={() => {onMenuClick('6')}}>
            <Link to='/address-manage'>
              <Icon type="database"/>
              <span>地址管理</span>
            </Link>
          </Menu.Item>
        </MenuItemGroup>
      </Menu>
  )
};

export default Menus;
