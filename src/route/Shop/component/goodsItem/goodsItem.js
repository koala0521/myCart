// 单个商品组件
import {
    Link
} from "react-router-dom"

import goodsAPI from 'api/goodsAPI'

import './goodsItem.css'


export default class GoodsItem extends Component {
    state = {
        curtItemIndx: 0,
        inStoreList: []
    };

    render() {
        return ( <div>

            </div>
        )
    }
}