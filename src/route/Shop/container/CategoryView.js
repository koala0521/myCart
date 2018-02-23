import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from './CategoryViewRedux';
import GoodsListItem from '../component/goodsItem/goodsItem';

import {cartViewActions} from 'route/Cart';

let {addToCartAction} = cartViewActions;

let {getGoodsListAction} = actions;

import '../assets/style/CategoryView.css';


class CategoryView extends Component{

    componentDidMount(){
        this.props.getGoodsListAction();
    }

    render(){
        let {
            goodsList,
            addToCartAction
        } = this.props;

        let goodsComp = goodsList.map(goods=>{
            return (
                <GoodsListItem
                    key={goods.id}
                    {...{
                        id: goods.id,
                        name: goods.name,
                        price: goods.price,
                        image_pre: goods.image_pre,
                        sku_list:goods.sku_list,
                        addToCartAction
                    }}
                />
            )
        });

        return (
            <div id="main">
                <div className="sku-box store-content">
                    <div className="sort-option">
                        <ul className="line clear">
                            <li><a href="javascript:;" className="active">综合排序</a></li>
                            <li><a href="javascript:;" className="">销量排序</a></li>
                            <li><a href="javascript:;" className="">价格低到高</a></li>
                            <li><a href="javascript:;" className="">价格高到低</a></li>
                        </ul>
                    </div>
                    <div className="gray-box">
                        <div className="item-box">
                            {goodsComp}
                        </div>
                    </div>
                </div>
                {/* {isCountOverflow?<Prompt/>:null} */}
            </div>
        )
    }
}

export default connect(
    state=>{
        let {category: {goodsList}} = state;
        return {
            goodsList
        }
    },
    dispatch=>bindActionCreators({
        getGoodsListAction,
        addToCartAction
    },dispatch)
)(CategoryView);
