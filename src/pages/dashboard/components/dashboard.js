import React from 'react';
import {Row, Col} from 'antd'
import {DatePicker} from 'antd';
import {connect} from 'dva'

import Groupedcolumn from "./Groupedcolumn";


const {RangePicker} = DatePicker;

const Dashboard = ({dispatch, dashboard}) => {

  const {userState, chart} = dashboard;

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    dispatch({
      type: 'dashboard/getChart',
      payload:{
        start: new Date(value[0]._d).getTime(),
        end: new Date(value[1]._d).getTime(),
      }
    })
  };

  return (
    <div style={{paddingTop: 20}}>
      <Row gutter={20}>
        <Col span={13}>
          <div style={{background: '#262835',}}>
            <div style={{paddingTop: 10, paddingLeft: 10}}>我的算力 (BTC)</div>
            <div style={{padding: 10}}>{userState.hash} H/s (现在)</div>
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
        <Groupedcolumn {...chart}/>
      </div>

    </div>
  )
};

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
