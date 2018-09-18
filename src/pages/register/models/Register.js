import * as registerService from '../services/Register';
import {message} from 'antd'

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    * register({payload}, {call, put}) {
      const response = yield call(registerService.register, payload);
      message.success('注册成功');
    },
    * sms({payload}, {call, put}) {
      const response = yield call(registerService.sms, payload);
      message.success('获取验证码成功');

    }
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
