import { Route , Redirect , NavLink  } from "react-router-dom";

import ShopView from 'layout/shopLayout';
import CartView from 'layout/cartLayout';

export default (

    <div>
        <Route exact path="/" render={ ()=> <Redirect to="/shop" /> } ></Route>
        <Route path="/shop" component={ ShopView }  />
        <Route path="/cart" component={ CartView }  />
    </div> 
    
)