import React from 'react';
import withRouter from 'umi/withRouter';
import {LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './App'

export default withRouter((props) => {
  return (
    <LocaleProvider locale={zhCN}>
      <App>
        {props.children}
      </App>
    </LocaleProvider>
  )
})

