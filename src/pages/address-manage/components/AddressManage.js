import React from 'react'
import {Card, Input, Button, Form} from 'antd'

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

class AddressManage extends React.PureComponent {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Card bordered={false} style={{background: '#001529', color: '#ffffff', marginTop: 20}}>

        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            BTC Address
          </span>}
          >
            {getFieldDecorator('address', {
              rules: [{
                required: true, message: 'Please input your password!',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
              密码
          </span>}
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" style={{marginRight: 20}}>更换地址</Button>
            <Button type="primary" htmlType="submit">锁定地址</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(AddressManage);
