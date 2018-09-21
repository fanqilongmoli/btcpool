import React from 'react'
import {Card, Input, Button, Form} from 'antd'
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

let addressForm;
const AddressManage = ({dispatch, address}) => {
  const handleSubmit = () => {

    addressForm.validateFieldsAndScroll(['address'], (errors, values) => {
      console.log('values', values);
      if (!errors) {
        dispatch({
          type: 'address/address',
          payload: values
        })
      }
    });
  };

  const AddressForm = Form.create({

    onFieldsChange(props, changedFields) {
      props.onChange(changedFields);
    },

    mapPropsToFields(props) {
      return {
        address: Form.createFormField({
          ...props.address,
          value: props.address || ''
        }),
      }
    }

  })((props) => {

    const {getFieldDecorator} = props.form;
    addressForm = props.form;
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label={<span style={{color: '#ffffff'}}>
            BTC Address
          </span>}
        >
          {getFieldDecorator('address', {
            rules: [{
              required: true, message: '请输入BTC地址!',
            }, {
              max: 64, min: 20, message: '地址最长64位最少20位!',
            }
            ],
          })(
            <Input/>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" onClick={handleSubmit}>保存地址</Button>
        </FormItem>
      </Form>
    )

  });
  const handleFormChange = (changedFields) => {

  };

  const addressFormProps = {
    address: address.data ? address.data.address : '',
    onChange: handleFormChange
  };


  return (
    <Card bordered={false} style={{background: '#262835', color: '#ffffff', marginTop: 20}}>
      <AddressForm {...addressFormProps}/>
    </Card>
  )
};


export default connect(({address}) => ({address}))(AddressManage);
