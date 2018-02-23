import goodsAPI from 'api/goodsAPI';
const initState = {
    goodsList: []
};

const GET_GOODS = 'GET_GOODS/shopping-car/shop';

export let getGoodsListAction = ()=> dispatch=> {

    goodsAPI.getGoodsList().then(({code,data})=>{

        if(code===0){
            dispatch({type: GET_GOODS, payload: data.list});
        }
    })
}

export default function shop(state=initState, action) {
    let {
        type,
        payload
    } = action;

    switch (type) {
        case GET_GOODS:
            return {
                ...state,
                goodsList: payload
            };

        default:
            return state;
    }
}

export const actions = {
    getGoodsListAction
};
