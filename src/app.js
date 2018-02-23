import { Route , Redirect , NavLink  } from "react-router-dom";

import {ShopView} from 'src/route/Shop';
import CartView from 'src/route/Cart';

export default (

    <div>
        <Route exact path="/" render={ ()=> <Redirect to="/shop" /> } ></Route>
        <Route path="/shop" component={ ShopView }  />
        <Route path="/cart" component={ CartView }  />
    </div> 
    
)