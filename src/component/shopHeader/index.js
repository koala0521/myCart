import "./shopHeader.css";

//二级导航 ， 引入路由
import { NavLink } from "react-router-dom";

// 导出二级导航结构
export default function ShopHeader() {
    
    return (
        <div className="nav-sub">
            <div className="nav-sub-wrapper">
                <div className="container">
                    <ul className="nav-list">
                        <li>
                            <NavLink exact to="/shop" activeClassName="active">
                                首页
                            </NavLink>
                        </li>
                        <li><a href="javascript:;">手机</a></li>
                        <li>
                            <NavLink  to="/shop/backshell" activeClassName="active">
                                背壳
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/shop/category" activeClassName="active">
                                官方配件
                            </NavLink>
                        </li>
                        <li><a href="javascript:;">第三方配件</a></li>
                        <li><a href="javascript:;">全部商品</a></li>
                        <li><a href="javascript:;">服务</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}