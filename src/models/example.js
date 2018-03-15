import NS from '../constants/namespace';
import PATHS from '../constants/routerPath';

export default {

  namespace: NS.INDEX_PAGE,

  state: {
    index_title: 'Home index'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location => {
        if (location.pathname !== PATHS.INDEX_PAGE) {
          return;
        }
        console.log(location);
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
