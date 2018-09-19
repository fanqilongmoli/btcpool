import * as service from '../services/BuyPower';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'buyPower',

  state: {
    hashrates: {},
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
          hashrates: response
        }
      })
    },
    * parameters({payload}, {call, put}) {
      const response = yield call(service.parameters);
      console.log(response);
      yield put({
        type: 'updateState',
        payload: {
          parameters: response
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
