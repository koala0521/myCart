import {  combineReducers } from 'redux'; //合并子reducer
import { routerReducer } from 'react-router-redux'; // routerReducer 函数 , redux监听保存 router的变化

import {category , goodsDetail } from 'route/Shop';
import { cart } from 'route/Cart';

// 应用的reducers，由多个子reducer构成
export default combineReducers({
    router:routerReducer,
    category,
    goodsDetail,
    cart
});