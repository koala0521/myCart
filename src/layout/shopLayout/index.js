import Header from 'container/Header'

import ShopHeader from "component/shopHeader";

// 导出 商品页面的布局组件：注意，商品页面有二级导航栏
export default function ShopLayout(props) {
    return (
        <div id='app' >
            <Header isCartIocnShow={ true } >
                <ShopHeader /> 
            </Header>
            { props.children }
        </div>         
    )
}