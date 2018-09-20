import * as service from '../services/BuyPower';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'buyPower',

  state: {
    tableData: [],
    parameters: {},
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
    * getHashrates({payload}, {call, put}) {
      const response = yield call(service.getHashrates);
      console.log(response);
      yield put({
        type: 'updateState',
        payload: {
          tableData: response.data.content,
          parameters:response.params
        }
      })
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/buy-power') {
          dispatch({
            type: 'getHashrates'
          });
          dispatch({
            type: 'parameters'
          });
        }
      });
    },
  },

};
