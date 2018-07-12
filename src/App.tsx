import * as React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './modules';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Foo from './pages/Foo';
import Bar from './pages/Bar';
import NavBar from './containers/NavBar';

const history = createBrowserHistory();
const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(routerMiddleware(history)));

const component: React.SFC = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <NavBar
                        data={[
                            { display: 'to home', path: '/' },
                            { display: 'to foo', path: '/foo' },
                            { display: 'to bar', path: '/bar' },
                        ]}
                    />
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/foo'} component={Foo}/>
                        <Route exact path={'/bar'} component={Bar}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    );
};

export default component;
