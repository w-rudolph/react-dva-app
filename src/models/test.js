import NS from '../constants/namespace';
import ACTIONS from '../constants/actions/testPage';

export default {

    namespace: NS.TEST_PAGE,

    state: {
        text: 'Hello World!'
    },

    subscriptions: {
        setup({ dispatch, history }) {},
    },
    
    effects: {
        *[ACTIONS.GO_HOME]({ payload }, { call, put }) {  /* eslint-disable-line */
            yield put({type: ACTIONS.UPDATE_STATE, payload});
        }
    },

    reducers: {
        [ACTIONS.UPDATE_STATE] (state, action) {
            return { ...state, ...action.payload };
        }
    },

};
