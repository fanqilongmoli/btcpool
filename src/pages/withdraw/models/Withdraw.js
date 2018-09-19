import * as service from '../services/Withdraw';

import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'withdraw',

  state: {
    data: {}
  },

  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    * withdraw({payload}, {call, put}) {
      const response = yield call(service.withdraw,payload);
      message.success('申请提现成功');

    },
    * getAddress({payload}, {call, put}) {
      const response = yield call(service.getAddress);
      const {data} = response;
      yield put({
        type: 'updateState',
        payload: {data:data}
      })

    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/withdraw') {
          dispatch({
            type: 'getAddress'
          });
        }
      });
    }
  },

};
