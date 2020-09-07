//react
import React from 'react';
import ReactDOM from "react-dom";

//component
import App from './component/App';

//style
import './assets/style/style.scss';

//router
import { ConnectedRouter } from 'connected-react-router';

//redux
import store, { history } from './store/store';
import { Provider } from 'react-redux';
import { loading, getWindowSize, uaDirection, orientationDir } from './functions/function';

//event
window.addEventListener('load', loading);
window.addEventListener('resize', getWindowSize);
window.addEventListener('orientationchange', ()=>{
    setTimeout(()=>{
        getWindowSize();
        orientationDir(store.getState().initReducer.device);
    },1000)
});

//UserAgent
uaDirection();

//orientation
orientationDir(store.getState().initReducer.device);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);