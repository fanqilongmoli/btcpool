import * as updatePasswordService from '../services/UpdatePassword';
import {message} from 'antd'
import config from "../../../utils/config";
export default {

  namespace: 'updatePassword',

  state: {},

  reducers: {

  },
  effects: {
    * updatePassword({payload}, {call, put}){
      const response = yield call(updatePasswordService.updatePassword,payload);
      message.success('修改密码成功')
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

};
