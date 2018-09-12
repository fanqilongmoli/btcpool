import React from 'react'
import {Form, Input, Button, Card} from 'antd'

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: {span: 2},
    sm: {span: 3},
  },
  wrapperCol: {
    xs: {span: 8},
    sm: {span: 8},
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 2,
    },
    sm: {
      span: 16,
      offset: 3,
    },
  },
};

class UpdatePassword extends React.PureComponent {


  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Card bordered={false} style={{background: '#001529', color: '#ffffff',marginTop: 20}}>

        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            当前密码
          </span>}
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            新密码
          </span>}
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            再次输入新密码
          </span>}
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">修改</Button>
          </FormItem>
        </Form>
      </Card>

    )
  }
}

export default Form.create()(UpdatePassword);
