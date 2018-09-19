import React from 'react'
import {Card, Form, Input, Button, InputNumber} from 'antd'
import {connect} from 'dva'

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
const WithdrawForm = Form.create({
  mapPropsToFields(props) {
    return {
      address: Form.createFormField({
        ...props.address,
        value: props.address || ''
      }),
    }
  }
})(props => {
  const {form, onOk} = props;
  const {getFieldDecorator} = props.form;
  const handleSubmit = () => {
    form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem
        {...formItemLayout}
        label={<span style={{color: '#ffffff'}}>
            BTC 数量
          </span>}
      >
        {getFieldDecorator('value', {
          rules: [{
            required: true, message: '请输入BTC数量!',
          }],
        })(
          <InputNumber style={{width:'100%'}}/>
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
            required: true,
          }],
        })(
          <Input disabled={false}/>
        )}
      </FormItem>

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">提现</Button>
      </FormItem>
    </Form>
  )
});


class Withdraw extends React.PureComponent {

  render() {
    const {dispatch,withdraw} = this.props;

    const WithdrawFormProps = {
      address: withdraw.data.address,
      onOk(values) {
        dispatch({
          type: 'withdraw/withdraw',
          payload: {...values}
        })
      }
    };

    return (
      <Card bordered={false} style={{background: '#262835', color: '#ffffff', marginTop: 20}}>
        <WithdrawForm {...WithdrawFormProps}/>
      </Card>
    )
  }

}

export default connect(({withdraw}) => ({withdraw}))(Form.create()(Withdraw));
