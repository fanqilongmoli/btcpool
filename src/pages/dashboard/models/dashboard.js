import * as service from '../services/dashboard';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'goods',

  state: {
    userState: {},
    chart:{},
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
    * getState({payload}, {call, put}) {
      const response = yield call(service.getState);
      yield put({
        type: 'updateState',
        payload: {
          userState: response
        }
      })

    },
    * getChart({payload}, {call, put}) {
      const {start,end} = payload;
      const response = yield call(service.getChart,start,end);
      yield put({
        type: 'updateState',
        payload: {
          chart: response
        }
      })

    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/dashboard') {
          dispatch({
            type: 'getState'
          });
          dispatch({
            type: 'getChart',
            payload:{start:'2018-09-19',end:'2018-09-19'}
          });
        }
      });
    },
  },

};
