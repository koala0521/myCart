import { Route , Redirect , NavLink  } from "react-router-dom";

function ShopView() {
    return (<div> 
        这是 shop 页面 <br />
        
        TO: { <NavLink to="/cart"  activeClassName="aaa" >CartView </NavLink>  }
        </div> )  
}
function CartView() {
    return (<div> 这是 购物车 页面 </div> )  
}



export default (

    <div>
        <Route exact path="/" render={ ()=> <Redirect to="/shop" /> } ></Route>
        <Route path="/shop" component={ ShopView }  />
        <Route path="/cart" component={ CartView }  />

    </div> 
    
)