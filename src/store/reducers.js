import {  combineReducers } from 'redux'; //合并子reducer
import { routerReducer } from 'react-router-redux'; // routerReducer 函数 , redux监听保存 router的变化


export default combineReducers({
    router:routerReducer
    // ,
    // category,
    // goodsDetail,
    // cart
});