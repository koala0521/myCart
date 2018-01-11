import Header from 'container/Header'

// 导出 cart页面的布局组件
export default function ShopLayout(props) {
    return (
        <div id='app' >
            <Header isCartIocnShow={ true } />
            { props.children }
        </div>         
    )
}