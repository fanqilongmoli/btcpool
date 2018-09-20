import React from 'react'
import {Row, Col, Card, Divider} from 'antd'
import {connect} from 'dva'
import moment from 'moment'

class UserInfo extends React.PureComponent {

  render() {

    const {userinfo} = this.props;
    return (
      <div style={{marginTop: 20}}>
        <Card bordered={false} style={{background: '#262835', color: '#ffffff'}}>
          <Row>
            <Col span={6}>加入日期</Col>
            <Col span={6}> {userinfo.account?moment(userinfo.account.createdTime).format('YYYY-MM-DD'):''}</Col>
          </Row>
          <Divider dashed={true}/>
          <Row>
            <Col span={6}>余额</Col>
            <Col span={6}>{userinfo.account.balance} BTC</Col>
          </Row>
          <Divider dashed={true}/>
          <Row>
            <Col span={6}>当前算力</Col>
            <Col span={6}> {userinfo.hash} H/s (现在)</Col>
          </Row>
          <Divider dashed={true}/>
          <Row>
            <Col span={6}>现在提现地址 (BTC)</Col>
            <Col span={6}> {userinfo.address}</Col>
          </Row>
          <Divider dashed={true}/>
        </Card>
      </div>

    )
  }
}

export default connect(({userinfo}) => ({userinfo}))(UserInfo);
