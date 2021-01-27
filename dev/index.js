import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import App from './components/App'
import Product from './components/Product'
import Info from './components/Info'
import Header from './components/Header'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/сontact" component={Info} /> 
                    <Route path="/task" component={App} />
                    <Route path="/" exact component={Product} />
                    <Route path="*" render={() => <div>Упс, ошибка</div>} />
                </Switch>
            </main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
