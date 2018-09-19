import React from 'react';
import {Row, Col} from 'antd'
import {DatePicker} from 'antd';
import {connect} from 'dva'

import Groupedcolumn from "./Groupedcolumn";


const {RangePicker} = DatePicker;

const Dashboard = ({dispatch, dashboard}) => {

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
    dispatch({
      type: 'dashboard/getChart'
    })
  };

  return (
    <div style={{paddingTop: 20}}>
      <Row gutter={20}>
        <Col span={13}>
          <div style={{background: '#262835',}}>
            <div style={{paddingTop: 10, paddingLeft: 10}}>我的算力 (BTC)</div>
            <div style={{padding: 10}}>0 H/s (现在), 0 H/s (24小时平均)</div>
          </div>
        </Col>
      </Row>
      <div style={{marginTop: 10}}>
        <RangePicker
          showTime={{format: 'HH:mm'}}
          format="YYYY-MM-DD HH:mm"
          placeholder={['开始时间', '结束时间']}
          onChange={onChange}
          onOk={onOk}
        />
      </div>

      <div style={{background: '#262835', marginTop: 10, width: 900, float: 'left'}}>
        <Groupedcolumn/>
      </div>

    </div>
  )
};

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
