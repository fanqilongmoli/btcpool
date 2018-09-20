import React from 'react'
import QRCode from 'qrcode.react'
import {Modal, Row, Col} from 'antd'

class QrCodeModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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
    });

    this.props.hideModelHandler();
  };

  okHandler = () => {
    this.hideModelHandler();
  };

  componentWillUpdate() {
    this.setState({
      visible: this.props.QrCode
    });
    console.log('componentWillUpdate', this.props)
  }


  render() {
    return (
      <Modal
        title={'比特币支付'}
        destroyOnClose={true}
        visible={this.state.visible}
        onOk={this.okHandler}
        onCancel={this.hideModelHandler}>
        <div>
          <Row>
            <Col span={8}><QRCode value={this.props.address}/></Col>
            <Col span={16}>
              <div>请发送 {this.props.pay} BTC 到如下地址:</div>
              <div style={{marginTop: 30}}>{this.props.address}</div>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

export default QrCodeModal;
