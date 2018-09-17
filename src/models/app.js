
export default {

  namespace: 'app',

  state: {
    selectedKeys:'1',
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {

  },

  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },

};
