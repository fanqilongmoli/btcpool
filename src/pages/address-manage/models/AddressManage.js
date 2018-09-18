import * as addressManageService from '../services/AddressManage';
import {message} from 'antd'
import config from "../../../utils/config";

export default {

  namespace: 'address',

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
    * address({payload}, {call, put}) {
      const response = yield call(addressManageService.address, payload);
      message.success('地址保存成功');

    },
    * getAddress({payload}, {call, put}) {

      const response = yield call(addressManageService.getAddress);
      console.log('getAddress', response);
      const {data} = response;
      yield put({
        type: 'updateState',
        payload: {data:data}
      })
    }

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        //获取码表目录
        if (pathname === '/address-manage') {
          dispatch({
            type: 'getAddress'
          });
        }
      });
    },
  },

};
