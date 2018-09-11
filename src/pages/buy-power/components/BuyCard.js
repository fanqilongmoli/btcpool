import React from 'react'
import {Card, Col, Row, Popover, Icon, Slider, Divider, Button} from 'antd'

export default class BuyCard extends React.PureComponent {
  state = {
    value: 0,
  }

  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    const hoverContent = (
      <div>
        <div>日常费用用于支付电费及维护费用。</div>
        <div>日常费用从每日收益中扣除。</div>
        <div>如果手续费连续60天超过收益，将结束合约。</div>
      </div>
    );
    return (
      <div style={{width: 400, background: '#001529', marginTop: 20}}>

        <div style={{paddingTop: 20, background: '#f9b016', textAlign: 'center', fontSize: 25, color: '#ffffff'}}>5 Year
          Plan
        </div>
        <div style={{
          paddingBottom: 20,
          background: '#f9b016',
          textAlign: 'center',
          fontSize: 25,
          color: '#ffffff',
          marginBottom: 20
        }}>提供方
          Bitcoin.com
        </div>
        <Row>
          <Col span={12}>
            <div style={{textAlign: 'center', fontSize: 30, color: '#ffffff'}}>$219</div>
            <div style={{textAlign: 'center', fontSize: 20, color: '#ffffff'}}>最初成本</div>
          </Col>
          <Col span={12}>
            <div style={{textAlign: 'center', fontSize: 30, color: '#ffffff'}}>$0.14</div>
            <div style={{textAlign: 'center', fontSize: 20, color: '#ffffff'}}>日常费用
              <Popover content={hoverContent} trigger="hover">
                <Icon type="question"/>
              </Popover>
            </div>
          </Col>
        </Row>
        <div style={{textAlign: 'center', fontSize: 20, color: '#ffffff', marginTop: 10}}>$219 per
          TH/s
        </div>
        <div style={{paddingRight: 20, paddingLeft: 20}}>
          <Slider max={2500} min={0} onChange={this.handleChange} value={this.state.value}/>
        </div>
        <div style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>当前每日收益 <Popover content={hoverContent}
                                                                                        trigger="hover">
          <Icon type="question"/>
        </Popover></div>
        <div style={{textAlign: 'center', fontSize: 20}}>0.057645 BTC ($361.68) 每天</div>
        <Divider dashed={true}/>
        <div style={{fontSize: 16, padding: 20, textAlign: 'center'}}>100%保证正常运行的时间和稳定的算力</div>
        <div style={{fontSize: 16, padding: 20, textAlign: 'center'}}>
          <div>1 TH/s 最低购买量</div>
          <div>4.376 PH/s 现有云挖矿合约</div>
        </div>
        <div style={{fontSize: 16, padding: 20, textAlign: 'center'}}>BTC 银行转账 接受</div>
        <div style={{textAlign: 'center', padding: 20}}>

          <Button type='primary' icon={'buy'}>购买</Button>
        </div>
      </div>
    )
  }
}
