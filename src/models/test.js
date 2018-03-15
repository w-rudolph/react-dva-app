import NS from '../constants/namespace';
import ACTIONS from '../constants/actions/testPage';
import { routerRedux } from 'dva/router';
import PATHS from '../constants/routerPath';

export default {

    namespace: NS.TEST_PAGE,

    state: {
        text: 'Hello World!'
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname !== PATHS.TEST_PAGE) {
                    return;
                }
                console.log(location);
            })
        },
    },

    effects: {
        *[ACTIONS.GO_HOME]({ payload }, { call, put }) {  /* eslint-disable-line */
            yield put({ type: ACTIONS.UPDATE_STATE, payload });
            // yield put(routerRedux.push(PATHS.INDEX_PAGE + '?p=2'));
            yield put(routerRedux.push({
                pathname: PATHS.INDEX_PAGE,
                search: 'a=1&b=2',
                query: { a: 1, b: 2 }
            }));
        }
    },

    reducers: {
        [ACTIONS.UPDATE_STATE](state, action) {
            return { ...state, ...action.payload };
        }
    },

};
