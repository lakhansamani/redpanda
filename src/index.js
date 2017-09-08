import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import Login from './components/views/Login';
import Home from './components/views/Home/Home';
import configureStore from './stores/configureStore';
import { requireAuth } from './lib/authLib';
import './style/app.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route onEnter={requireAuth}>
          <Route path="/home" component={Home} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
