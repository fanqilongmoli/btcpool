import * as forgetService from '../services/Forget'
import {message} from 'antd'

export default {
  namespace: 'forget',

  state: {
    status: undefined,
  },

  effects: {
    * password({payload}, {call, put}) {
      yield call(forgetService.password,payload);
      message.success('重置密码成功')
    },
  },

  reducers: {
    registerHandle(state, {payload}) {
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};
