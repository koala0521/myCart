import {Route} from 'react-router-dom';
import ShopLayout from 'layout/shopLayout';
import CategoryView from './container/CategoryView';
import GoodsDetailView from './container/GoodsDetailView';

export default function Shop(){
    return (
        <ShopLayout>
            <Route exact path="/shop" render={()=><div>商城首页...</div>}/>
            <Route path="/shop/backshell" render={()=><div>背壳页面...</div>}/>
            <Route path="/shop/category" render={()=><CategoryView/>}/>
            <Route path="/shop/item/:id" component={ GoodsDetailView }/>
        </ShopLayout>
    )
};
