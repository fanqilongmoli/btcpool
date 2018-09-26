import React from 'react'
import {Card, Col, Row, Popover, Icon, Slider, Divider, Button} from 'antd'
import BuyPowerModal from "./BuyPowerModal";


const BuyCard = ({data, parameters, onOk}) => {
  console.log('data', data);

  return (
    <Card
      extra={
        <BuyPowerModal title={'购买算力产品'} onOk={onOk} record={data} parameters={parameters}>
          <a style={{color: '#000'}} href="javascript:;">购买</a>
        </BuyPowerModal>
      }>
      <Row>
        <Col span={12}>算力类型: <span style={{color: '#000', marginLeft: 20}}>BTC</span></Col>
        <Col span={12}>预计日收益(BTC):<span style={{color: '#000', marginLeft: 20}}>{parameters.earning}</span></Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={12}>算力大小:<span style={{color: '#000', marginLeft: 20}}>{data.min}T/份</span></Col>
        <Col span={12}>电费:<span style={{color: '#000', marginLeft: 20}}>{
          data.electricityFeeType === 1?(data.electricityFee)+'BTC':'包含电费'
        }</span></Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={12}>算力价格:<span style={{color: '#000', marginLeft: 20}}>{data.price}BTC</span></Col>
        <Col span={12}>维修费:<span style={{color: '#000', marginLeft: 20}}>0</span></Col>
      </Row>
      <Divider/>
      <Row>
        <Col span={12}>期限:<span style={{color: '#000', marginLeft: 20}}>{data.period}年</span></Col>
        <Col span={12}>上架时间:<span style={{color: '#000', marginLeft: 20}}>24小时后</span></Col>
      </Row>
    </Card>
  )

};

export default BuyCard;
