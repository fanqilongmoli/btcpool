import React from 'react'
import {Form, Input, Button, Card} from 'antd'
import {connect} from 'dva'
import router from "umi/router";

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
  handleSubmit=()=>{
    const {form, dispatch} = this.props;
    form.validateFields({force: true}, (err, values) => {
      console.log('values', values);
      if (!err) {
        dispatch({
          type: 'updatePassword/updatePassword',
          payload: {
            ...values,
          },
        });
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Card bordered={false} style={{background: '#262835', color: '#ffffff',marginTop: 20}}>

        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            当前密码
          </span>}
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入当前密码!',
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{color: '#ffffff'}}>
            新密码
          </span>}
          >
            {getFieldDecorator('newPassword', {
              rules: [{
                required: true, message: '请输入新密码!',
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
                required: true, message: '请输入确认密码',
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

export default connect(({updatePassword,loading})=>({updatePassword,loading}))(Form.create()(UpdatePassword));
