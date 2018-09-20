import React from 'react';
import {Modal, Form, Input, InputNumber} from 'antd';

const FormItem = Form.Item;

class BuyPowerModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      //每日收益
      earning: 0,
      //费用
      fee: 0
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });


  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
      earning: 0,
      fee: 0,
    });
  };

  okHandler = () => {
    const {onOk, record} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.hashRateId = record.id;
        values.pay = record.price * values.hash;
        onOk(values);
        this.hideModelHandler();
      }
    });
  };
  onChange = value => {
    console.log(value);
    this.setState({
      earning: this.props.parameters.earning * value,
      fee: this.props.parameters.fee * value,
    })
  };

  render() {
    const {children, title} = this.props;
    const {getFieldDecorator} = this.props.form;
    const username = this.props.record ? this.props.record.username : '';
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    // console.log('this.props', this.props);

    return (
      <span>
        <span onClick={this.showModelHandler}>
          {children}
        </span>
        <Modal
          title={title}
          destroyOnClose={true}
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="购买算力"
            >
              {
                getFieldDecorator('hash', {
                  rules: [
                    {
                      required: true,
                      message: '请输入购买算力'
                    },
                  ],
                })(<InputNumber precision={0}
                                style={{width: '100%'}} onChange={this.onChange}/>)
              }
            </FormItem>
            <div>
              {/*收益:{this.state.earning}btc;费用:{this.state.fee}btc*/}
            </div>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(BuyPowerModal);
