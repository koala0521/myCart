// 项目主导航栏，以为涉及到购物车，所有放在了容器组件中。

// 4.2版本把 react-router 分成几个模块 ， react-router-dom 专门做 DOM 绑定使用
import { Link, NavLink } from 'react-router-dom'

import './header.css';

export default function Header(props) {

    let { isCartIconShow } = props;    // 决定购物车按钮是否显示
    return (
        <div id="header">
            <div className="nav-global">
                <div className="container">
                    <h1 className="nav-logo">
                        <a href="javascript:;"></a>
                    </h1>
                    <ul className="nav-aside">
                        <li className="nav-user">
                            <Link to="/account">个人中心</Link>
                            {/* <!--active--> */}
                            <div className="nav-user-wrapper">
                                <div className="nav-user-list">
                                    <dl className="nav-user-avatar">
                                        <dd><span className="ng-scope"></span></dd>
                                        <dt className="ng-binding">+86 138****9453</dt>
                                    </dl>
                                    <ul>
                                        {/* <li className="order"><Link to="/account" exact>我的订单</Link></li> */}
                                        {/* <!--<li className="support"><a href="javascript:;">售后服务</a></li>
                                            <li className="coupon"><a href="javascript:;">我的优惠</a></li>
                                        <li className="information"><a href="javascript:;">账户资料</a></li>--> */}
                                        {/* <li className="address"><Link to="/address">收货地址</Link></li> */}
                                        {/* <!--	<li className="logout"><a href="javascript:;">退出</a></li>--> */}
                                    </ul>
                                </div>
                            </div>
                        </li>

                        {/* <!--active--> */}
                        {
                            {/*
                                isCartIconShow === true ? (<CartPanel/>) : null
                            */}
                        }
                    </ul>
                    <ul className="nav-list">
                        <li><Link to="/">在线商城</Link></li>
                        <li><a href="javascript:;">坚果 Pro</a></li>
                        <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
                        <li><a href="javascript:;">Smartisan OS</a></li>
                        <li><a href="javascript:;">欢喜云</a></li>
                        <li><a href="javascript:;">应用下载</a></li>
                        <li><a href="javascript:;">官方论坛</a></li>
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    )
    
}

Header.defaultProps = {
    isCartIconShow:true
};