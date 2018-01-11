import Header from 'container/Header'

// 导出 cart页面的布局组件
export default function CartLayout(props) {
    return (
        <div id='app' >
            <Header isCartIocnShow={ false } />
            { props.children }
        </div>         
    )
}