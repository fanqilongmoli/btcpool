import React from 'react'
import {Row, Col, Card, Divider} from 'antd'

class UserInfo extends React.PureComponent {

  render() {
    return (
      <div style={{marginTop: 20}}>
        <Card bordered={false} style={{background: '#262835', color: '#ffffff'}}>
          <Row>
            <Col span={6}>加入日期</Col>
            <Col span={6}> 2018-09-02</Col>
          </Row>
          <Divider dashed={true}/>
          <Row>
            <Col span={6}>总收入</Col>
            <Col span={6}>0.000 000 00 BTC</Col>
          </Row>
          <Divider dashed={true}/>
          <Row>
            <Col span={6}>当前算力</Col>
            <Col span={6}> 0 H/s (现在), 0 H/s (24小时平均)</Col>
          </Row>
          <Divider dashed={true}/>
          <Row>
            <Col span={6}>现在取现地址 (BTC)</Col>
            <Col span={6}> </Col>
          </Row>
          <Divider dashed={true}/>
        </Card>
      </div>

    )
  }
}

export default UserInfo;
