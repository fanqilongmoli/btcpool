import React from 'react';
import {Row, Col, Table} from 'antd'
import {connect} from 'dva'
import moment from 'moment'
import styles from './BuyPower.less'

const BuyPower = ({buyPower, loading}) => {
  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '总量',
    dataIndex: 'total',
    key: 'total',
  },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '产品周期',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: '单笔最大交易量',
      dataIndex: 'max',
      key: 'max',
    },
    {
      title: '单笔最小交易量',
      dataIndex: 'min',
      key: 'min',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
      render: (text, record) => {
        return moment(record.startTime).format('YYYY-MM-DD');
      },
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
      render: (text, record) => {
        return moment(record.endTime).format('YYYY-MM-DD');
      },
    },

    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{color:'#ffffff'}} href="javascript:;" onClick={() => {
          }}>购买</a>

        </span>
      ),
    }
  ];
  return (
    <div className={styles.myTable}>
      <Table
        bordered={true}
        dataSource={buyPower.hashrates.content}
        loading={loading.models.buyPower}
        columns={columns}
        rowKey={record => record.salt}/>
    </div>
  )
};

export default connect(({buyPower, loading}) => ({buyPower, loading}))(BuyPower);
