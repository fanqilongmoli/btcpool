import React from 'react';
import {Row, Col} from 'antd'
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import Groupedcolumn from "./Groupedcolumn";

const data = [
  {
    name: "London",
    "Jan.": 18.9,
    "Feb.": 28.8,
    "Mar.": 39.3,
    "Apr.": 81.4,
    May: 47,
    "Jun.": 20.3,
    "Jul.": 24,
    "Aug.": 35.6
  },
  {
    name: "Berlin",
    "Jan.": 12.4,
    "Feb.": 23.2,
    "Mar.": 34.5,
    "Apr.": 99.7,
    May: 52.6,
    "Jun.": 35.5,
    "Jul.": 37.4,
    "Aug.": 42.4
  }
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: "fold",
  fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."],
  // 展开字段集
  key: "月份",
  // key字段
  value: "月均降雨量" // value字段
});

const Dashboard = () => {
  return (
    <div style={{paddingTop: 20}}>
      <Row gutter={20}>
        <Col span={8}>
          <div style={{background: '#001529',}}>
            <div style={{paddingTop: 10, paddingLeft: 10}}>我的算力 (BTC)</div>
            <div style={{padding: 10}}>0 H/s (现在), 0 H/s (24小时平均)</div>
          </div>
        </Col>
        <Col span={8}>
          <div style={{background: '#001529',}}>
            <div style={{paddingTop: 10, paddingLeft: 10}}>我的矿工 (BTC)</div>
            <div style={{padding: 10}}>0 活跃, 0 离线</div>
          </div>
        </Col>
        <Col span={8}>
          <div style={{background: '#001529',}}>
            <div style={{paddingTop: 10, paddingLeft: 10}}>最新出块</div>
            <div style={{padding: 10}}>539,244 (5 days ago)</div>
          </div>
        </Col>
      </Row>

      <div style={{background: '#001529', marginTop: 20, width: 700}}>
        <Groupedcolumn/>
      </div>

      <div style={{background: '#001529', marginTop: 20, padding: 20}}>
        开始挖矿<br/>
        用户名: fanqilong<br/>
        密码: 填写任意内容（请不要留空白）<br/>
        用户名必须小写<br/>

        Stratum URL (BTC)<br/>
        stratum+tcp://connect.pool.bitcoin.com:3333<br/>

        Stratum URL (BCH)<br/>
        stratum+tcp://bch.pool.bitcoin.com:3333<br/>

        Stratum URL (BTC/BCH Auto-profit)<br/>
        stratum+tcp://profit.pool.bitcoin.com:3333<br/>
      </div>

    </div>
  )
};

export default Dashboard;
