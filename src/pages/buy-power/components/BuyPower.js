import React from 'react';
import {Row, Col, Table,List} from 'antd'
import {connect} from 'dva'
import moment from 'moment'
import styles from './BuyPower.less'
import BuyPowerModal from "./BuyPowerModal";
import QrCodeModal from "./QrCodeModal";
import BuyCard from "./BuyCard";

const BuyPower = ({dispatch, buyPower, loading}) => {
  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '总量(TH/s)',
    dataIndex: 'total',
    key: 'total',
  },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '产品周期(年)',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: '余额(TH/s)',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: '最小交易规格(TH/s)',
      dataIndex: 'min',
      key: 'min',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <BuyPowerModal title={'购买算力产品'} onOk={onOk} record={record} parameters={buyPower.parameters}>
            <a style={{color: '#ffffff'}} href="javascript:;">购买</a>
          </BuyPowerModal>
        </span>
      ),
    }
  ];

  const onOk = values => {
    dispatch({
      type: 'buyPower/orders',
      payload: {...values}
    })
  };
  const QrCodeProps = {
    QrCode:buyPower.QrCode,
    address:buyPower.address,
    pay:buyPower.pay,
    hideModelHandler(){
      dispatch({
        type: 'buyPower/updateState',
        payload: {QrCode:false}
      })
    }
  };


  return (
    <div className={styles.myTable}>
      {/*<Table*/}
        {/*bordered={true}*/}
        {/*dataSource={buyPower.tableData}*/}
        {/*loading={loading.models.buyPower}*/}
        {/*columns={columns}*/}
        {/*pagination={false}*/}
        {/*rowKey={record => record.salt}/>*/}
      <QrCodeModal {...QrCodeProps}/>
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 3 }}
        dataSource={buyPower.tableData}
        renderItem={item => (
          <List.Item>
           <BuyCard data={item} onOk={onOk} parameters={buyPower.parameters}/>
          </List.Item>
        )}
      />

    </div>
  )
};

export default connect(({buyPower, loading}) => ({buyPower, loading}))(BuyPower);
