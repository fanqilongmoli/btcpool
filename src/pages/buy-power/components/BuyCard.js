import React from 'react'
import {Card, Col, Row, Popover, Icon, Slider, Divider, Button} from 'antd'
import BuyPowerModal from "./BuyPowerModal";
import styles from './BuyCard.less'


const BuyCard = ({data, parameters, onOk}) => {
  console.log('data', data);
  const headerStyle = {
    background: 'linear-gradient(to right, #f9b78a , #f36e7b)'
  };


  return (


    <Card
      extra={
        <BuyPowerModal title={'购买算力产品'} onOk={onOk} record={data} parameters={parameters}>
          <Button style={{color: '#f36e7b', background: '#fde3e5'}}>购买</Button>
        </BuyPowerModal>
      }
      className={styles.myCard}
      title={<span style={{color: '#fff', fontSize: 22}}>算力产品</span>}
      bordered={false}
      headStyle={headerStyle}
      bodyStyle={{background: '#262835', color: '#fff'}}
      type={"inner"}
    >
      <Row>
        <Col span={12}>
          <div className={styles.name}>算力类型:</div>
          <span className={styles.value}>BTC</span></Col>
        <Col span={12}>
          <div className={styles.name}>预计日收益(BTC):</div>
          <span className={styles.value}>{parameters.earning}</span></Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className={styles.name} style={{marginTop: 30}}>算力大小:</div>
          <span className={styles.value}>{data.min}T/份</span>
        </Col>
        <Col span={12}>
          <div className={styles.name} style={{marginTop: 30}}>电费:</div>
          <span className={styles.value}>{
            data.electricityFeeType === 1 ? (data.electricityFee) + 'BTC' : '包含电费'
          }</span>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className={styles.name} style={{marginTop: 30}}>算力价格:</div>
          <span className={styles.value}>{data.price}BTC</span>
        </Col>
        <Col span={12}>
          <div className={styles.name} style={{marginTop: 30}}>维修费:</div>
          <span className={styles.value}>0</span>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className={styles.name} style={{marginTop: 30}}>期限:</div>
          <span className={styles.value}>{data.period}年</span>
        </Col>
        <Col span={12}>
          <div className={styles.name} style={{marginTop: 30}}>上架时间:</div>
          <span className={styles.value}>24小时后</span>
        </Col>
      </Row>
    </Card>
  )

};

export default BuyCard;
