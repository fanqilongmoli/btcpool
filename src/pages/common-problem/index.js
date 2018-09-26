import React from 'react'
import {Divider} from 'antd'

export default () => {
  return (
    <div style={{marginTop: 30}}>

      <p style={{fontSize:20}}>1.注册后是否能修改手机号？</p>
      <p>用户完成注册之后，手机号不能修改</p>
      <Divider dashed={true}/>

      <p style={{marginTop: 30,fontSize:20}}>2.挖矿收益怎么结算？</p>
      <p>每天12点结算前一日挖矿收益，6小时之内发放到算力交易所余额。结算时收益以12点时用户持有有效算力数额为准。</p>
      <Divider dashed={true}/>
      <p style={{marginTop: 30,fontSize:20}}>3.矿机是否能赎回？</p>
      <p>峰鸟科技云算标准算力，并不针对单台矿机，所以没有矿机赎回的服务.</p>

      <Divider dashed={true}/>
      <p style={{marginTop: 30,fontSize:20}}>4.挖矿收益一直发放吗？</p>
      <p>当挖矿收入大于电费时，挖矿收益会持续发放到用户账户。由于算力难度上涨或者币价下跌导致挖矿收入连续10天小于电费，挖矿收益则停止发放，待收益足够支持电费，则合约继续。
      </p>
      <Divider dashed={true}/>
    </div>
  )
}
