import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import Login from './components/views/Login';
import Home from './components/views/Home';
import AboutUs from './components/views/AboutUs';
import NotFound from './components/views/NotFound';
import configureStore from './stores/configureStore';
import { requireAuth } from './lib/authLib';
import './style/app.css';
import './style/responsive.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route onEnter={requireAuth}>
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={AboutUs}>
            <IndexRedirect to="/aboutus/profile" />
            <Route path="/aboutus/team" component={AboutUs}/>
            <Route path="/aboutus/profile" component={AboutUs}/>
            <Route path="/aboutus/contactus" component={AboutUs} />
          </Route>
        </Route>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
