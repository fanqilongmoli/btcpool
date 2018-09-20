import * as addressManageService from '../services/UserInfo';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'userinfo',

  state: {
    account: {},
    hash: 0
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
      const response = yield call(addressManageService.getState);
      yield put({
        type: 'updateState',
        payload: {account: response.account, hash: response.hash}
      })

    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/userinfo') {
          dispatch({
            type: 'getState'
          });
        }
      });
    },
  },

};
