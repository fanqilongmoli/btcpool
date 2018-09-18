import React from 'react';
import {Row, Col} from 'antd'

import Groupedcolumn from "./Groupedcolumn";




const Dashboard = () => {
  return (
    <div style={{paddingTop: 20}}>
      <Row gutter={20}>
        <Col span={13}>
          <div style={{background: '#262835',}}>
            <div style={{paddingTop: 10, paddingLeft: 10}}>我的算力 (BTC)</div>
            <div style={{padding: 10}}>0 H/s (现在), 0 H/s (24小时平均)</div>
          </div>
        </Col>
        {/*<Col span={8}>*/}
          {/*<div style={{background: '#001529',}}>*/}
            {/*<div style={{paddingTop: 10, paddingLeft: 10}}>我的矿工 (BTC)</div>*/}
            {/*<div style={{padding: 10}}>0 活跃, 0 离线</div>*/}
          {/*</div>*/}
        {/*</Col>*/}
        {/*<Col span={8}>*/}
          {/*<div style={{background: '#001529',}}>*/}
            {/*<div style={{paddingTop: 10, paddingLeft: 10}}>最新出块</div>*/}
            {/*<div style={{padding: 10}}>539,244 (5 days ago)</div>*/}
          {/*</div>*/}
        {/*</Col>*/}
      </Row>
      <div>
        <div style={{background: '#262835', marginTop: 20, width: 900, float: 'left'}}>
          <Groupedcolumn/>
        </div>

        {/*<div style={{background: '#001529', marginTop: 20, padding: 20, width: 700, float: 'right'}}>*/}
          {/*开始挖矿<br/>*/}
          {/*用户名: fanqilong<br/>*/}
          {/*密码: 填写任意内容（请不要留空白）<br/>*/}
          {/*用户名必须小写<br/>*/}

          {/*Stratum URL (BTC)<br/>*/}
          {/*stratum+tcp://connect.pool.bitcoin.com:3333<br/>*/}

          {/*Stratum URL (BCH)<br/>*/}
          {/*stratum+tcp://bch.pool.bitcoin.com:3333<br/>*/}

          {/*Stratum URL (BTC/BCH Auto-profit)<br/>*/}
          {/*stratum+tcp://profit.pool.bitcoin.com:3333<br/>*/}
        {/*</div>*/}
      </div>


    </div>
  )
};

export default Dashboard;
