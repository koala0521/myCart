// 单个商品组件
import { Link } from "react-router-dom"

import goodsAPI from 'api/goodsAPI'

import './goodsItem.css'


export default class GoodsItem extends Component {
    state = {
        curtItemIndx: 0,
        inStoreList: []
    };


    render(){

        let {
            switchOption
        } = this;

        let {
            id, name, price, image_pre,
            sku_list
        } = this.props;

        // 当前选择的外观索引
        let {
            curtItemIndx,
            inStoreList
        } = this.state;

        // 当前显示的颜色款式
        let curtItem = sku_list[curtItemIndx];

        // 是否显示 添加到购物车或售罄按钮
        let isShowStockButton = !!(
            curtItem.direct_to_cart &&
            curtItem.color_id &&
            inStoreList.length
        );

        // 是否有库存
        let isInStock = !!inStoreList.reduce( (accu,elt)=>{
            return elt.id===curtItem.sku_id ? elt : accu
        },{}).in_stock;

        // 颜色的小选项组件
        let optionItemComp = sku_list.map((item,indx)=>{
            return item.color_id ? (
                <li key={item.sku_id} >
                    <span
                        href="javascript;"
                        className={curtItemIndx===indx ? "active" : ''}
                        onMouseOver={()=>switchOption(indx)}
                    >
                        <img
                            src={item.image}
                        />
                    </span>
                </li>
            ) : null

        });

        return (
            <div className="item">
                <div>
                    <div className="item-img">
                        <img
                            alt={curtItem.title}
                            src={curtItem.ali_image}
                            style={{opacity: 1}}/>
                    </div>
                    <h6>{curtItem.title}</h6>
                    <h3>{curtItem.sub_title}</h3>
                    <div className="params-colors">
                        <ul className="colors-list">
                            {optionItemComp}
                        </ul>
                    </div>
                    <div className="item-btns clearfix">
                        <span
                            className="item-gray-btn"
                        >
                            <Link
                                to={{
                                    pathname: `/shop/item/${id}`,
                                    search: `id=${curtItem.sku_id}`
                                }}
                            > 查看详情 </Link>
                        </span>
                        {
                            isShowStockButton ? (
                                isInStock ? (
                                    <span
                                        onClick={this.addToCart}
                                        className="item-blue-btn"
                                    >
                                    加入购物车 </span>
                                ) : (
                                    <span className="item-blue-btn"
                                    >
                                    售罄 </span>
                                )

                            ) : null
                        }

                    </div>
                    <div className="item-price clearfix">
                        <i>¥</i><span>{curtItem.price}</span>
                    </div>
                    <div className="discount-icon">false</div>
                    <div
                        className="item-cover"
                    >
                        <Link
                            to={{
                            pathname: `/shop/item/${id}`,
                            search: `id=${curtItem.sku_id}`
                            }}
                            onMouseOver={this.checkGoodsInStock}
                        ></Link>

                    </div>
                </div>
            </div>
        )
    }
}