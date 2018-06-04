import * as React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './modules';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import Home from './pages/Home';
import Foo from './pages/Foo';
import Bar from './pages/Bar';

const history = createBrowserHistory();
const store = createStore(
    rootReducer,
    applyMiddleware(routerMiddleware(history)));

const component: React.SFC = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/foo'} component={Foo}/>
                    <Route exact path={'/bar'} component={Bar}/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
};

export default component;
