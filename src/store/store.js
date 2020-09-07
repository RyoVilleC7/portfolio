import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import initReducer from './initReducer';
import mouseReducer from './mouseReducer';
import interactionReducer from './interactionReducer';
import fetchReducer from './fetchReducer';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducerバインド
const rootReducer = history => combineReducers({
    router: connectRouter(history),　//ルーティングの状態管理
    initReducer,　//初期設定
    mouseReducer,　//マウスの状態管理
    interactionReducer,　//インタラクション関連の状態管理
    fetchReducer　//非同期の状態管理
});

//logger設定
const logger = createLogger({
    collapsed: true,
    diff: true
});

//ストア生成
const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, logger))
);

export default store; 