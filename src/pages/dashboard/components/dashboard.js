import React from 'react';
import {Row, Col} from 'antd'
import {DatePicker, Button} from 'antd';
import {connect} from 'dva'

import Groupedcolumn from "./Groupedcolumn";
import styles from './dashboard.less'
import TopChart from "./TopChart";

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
      payload: {
        start: new Date(value[0]._d).getTime(),
        end: new Date(value[1]._d).getTime(),
      }
    })
  };
  const topCharProps = {
    hashList: userState.hashList
  };
  return (
    <div style={{paddingTop: 20, width: 1154}}>
      <div style={{float: 'left'}} className={styles.clearfix}>
        <div className={styles.myCalc}>
          <TopChart {...topCharProps}/>
          <div style={{fontSize: 22, color: '#fff', top: 30, left: 30, position: 'absolute'}}>我的算力 (BTC)</div>
          <div style={{top: 70, left: 30, fontSize: 16, color: '#fff', position: 'absolute'}}>{userState.hash} T/s (现在)
          </div>
        </div>

        <div style={{background: '#262835', marginTop: 10, marginBottom: 10, width: 756, borderRadius: 10}}>
          <div style={{fontSize: 22, color: '#fff', paddingTop: 30, paddingLeft: 30}}>我的收入(BTC)</div>
          <div style={{marginTop: 20, marginLeft: 30}}>
            <RangePicker
              showTime={{format: 'HH:mm'}}
              format="YYYY-MM-DD HH:mm"
              placeholder={['开始时间', '结束时间']}
              onChange={onChange}
              onOk={onOk}
            />
          </div>
          <Groupedcolumn {...chart}/>
        </div>
      </div>

      <div style={{float: 'right', marginLeft: 20}}>

        <div className={styles.ad1}>
          {/*<div className={styles.adb}>广告</div>*/}
        </div>
        <div className={styles.ad2}>
          {/*<div className={styles.adb}>广告</div>*/}
        </div>

      </div>


    </div>
  )
};

export default connect(({dashboard}) => ({dashboard}))(Dashboard);
