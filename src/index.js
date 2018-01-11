import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';
import { configureStore , createHistory } from './store';
import  routers from './app';

import "common/style/reset.css";


function render() {
    ReactDOM.render(
        <Provider store={ configureStore() } >    
            <ConnectedRouter history={ createHistory() } >
                <div>
                    { routers }
                </div>
            </ConnectedRouter>
        </Provider>,
        document.getElementById("root")      
    );
}

render(); 

// 模块热替换
if (module.hot) {
    module.hot.accept('./app', () => {
        render();
    });

}