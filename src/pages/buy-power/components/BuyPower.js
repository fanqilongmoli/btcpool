import React from 'react';
import {Row, Col, Table} from 'antd'
import {connect} from 'dva'
import moment from 'moment'
import styles from './BuyPower.less'
import BuyPowerModal from "./BuyPowerModal";

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
      title: '余额',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: '最小交易规格',
      dataIndex: 'min',
      key: 'min',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <BuyPowerModal title={'购买算力产品'}>
            <a style={{color:'#ffffff'}} href="javascript:;">购买</a>
          </BuyPowerModal>
        </span>
      ),
    }
  ];
  return (
    <div className={styles.myTable}>
      <Table
        bordered={true}
        dataSource={buyPower.tableData}
        loading={loading.models.buyPower}
        columns={columns}
        pagination={false}
        rowKey={record => record.salt}/>
    </div>
  )
};

export default connect(({buyPower, loading}) => ({buyPower, loading}))(BuyPower);
