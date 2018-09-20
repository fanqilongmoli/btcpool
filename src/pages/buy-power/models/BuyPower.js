import * as service from '../services/BuyPower';
import {message} from 'antd'
import config from "../../../utils/config";
import QrCodeModal from "../components/QrCodeModal";

export default {

  namespace: 'buyPower',

  state: {
    tableData: [],
    parameters: {},
    QrCode: false,
    address:'',
    pay:0,
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

      yield put({
        type: 'updateState',
        payload: {
          tableData: response.data.content,
          parameters: response.params
        }
      })
    },
    * orders({payload}, {call, put}) {
      const {pay} = payload;
      const response = yield call(service.orders, payload);
      yield put({
        type: 'updateState',
        payload: {QrCode: true,address:response.address,pay:pay}
      });

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
        }
      });
    },
  },

};
