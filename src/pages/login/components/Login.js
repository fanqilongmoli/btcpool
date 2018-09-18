import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {Button, Form, Input} from 'antd'
import styles from './Login.less'
import router from 'umi/router'

const Login = ({
                 loading,
                 dispatch,
                 form: {
                   getFieldDecorator,
                   validateFieldsAndScroll,
                 }
               }) => {
  const handleEnter = () => {
    validateFieldsAndScroll((error, values) => {
      if (error) {
        return
      }
      dispatch({type: 'login/login', payload: values}).then(value => {router.push('/dashboard')})
    })
  };

  const registerClick = ()=>{
    router.push('/register');
  };

  const forgetClick =()=>{
    router.push('/forget');
  };

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <span>登入你的账号</span>
      </div>
      <Form>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入用户名'
              },
            ],
          })(<Input onPressEnter={handleEnter} placeholder="用户名" autoComplete="off" disableautocomplete="true"/>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码'
              },
            ],
          })(<Input type="password" onPressEnter={handleEnter} placeholder="密码" autoComplete="off"
                    disableautocomplete="true"/>)}
        </Form.Item>

        <Button type="primary" onClick={handleEnter} loading={loading.effects.login}>
          登陆
        </Button>
        <div className={styles.op}>
          <span className={styles.forget} onClick={forgetClick}>忘记密码?</span>
          <span className={styles.register} onClick={registerClick}>注册新账号</span>
        </div>
      </Form>
    </div>
  )
};
export default connect(({loading}) => ({loading}))(Form.create()(Login))
