import { createStore , applyMiddleware , compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import reducer from './reducers';//应用的 reducer
let routerML = routerMiddleware( history );

// 创建 store
function configureStore() {
    // 生产环境，不需要开启 redux DevTools
    let store;
    if( process.env.NODE_ENV === 'production' ){
        store = createStore(
            reducer,
            compose(
                applyMiddleware(thunk, routerML)
            )
        );
    }else{
        store = createStore(
            reducer,
            compose(
                applyMiddleware(thunk, routerML),
                window.devToolsExtension ? window.devToolsExtension() : f=>f
            )
        );

    }
    return store;
}

export { configureStore , createHistory };