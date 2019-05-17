import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancer(applyMiddleware(...middlewares)),
);

store.subscribe(() => {
  localStorage.setItem('accessToken', store.getState().auth.accessToken)
  localStorage.setItem('isLogin', store.getState().auth.isLogin)  
})

export { store, history };
