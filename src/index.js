import dva from 'dva';
import globalModel from './models/global';
import './index.css';

// Initialize
const app = dva();
app.model(globalModel);

// Plugin
app.use({
    onAction: (/*{ getState, dispatch }*/) => {
        return next => action => {
            if (action.namespace) {
                action.type = `${action.namespace}/${action.type}`;
            }
            console.log('[ACTION]: ', action.type);
            next(action);
        }
    }
});

// Router
app.router((require('./router').default)(app));

// Start
app.start('#root');
