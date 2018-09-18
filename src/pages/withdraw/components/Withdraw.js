import React from 'react'
import {Card,Form,Input, Button} from 'antd'

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


class Withdraw extends React.PureComponent{

  render(){
    const {getFieldDecorator} = this.props.form;
    return(
      <Card bordered={false} style={{background: '#262835', color: '#ffffff',marginTop: 20}}>

        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            BTC 数量
          </span>}
          >
            {getFieldDecorator('num', {
              rules: [{
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input/>
            )}
          </FormItem>
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
              <Input />
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
            <Button type="primary" htmlType="submit">提现</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }

}
export default Form.create()(Withdraw);
