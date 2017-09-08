import { browserHistory } from 'react-router';
module.exports = {
  isLoggedIn: () => {
    if (window.localStorage.getItem('authData')) {
      return true;
    }
    return false;
  },
  getUser: () => JSON.parse(window.localStorage.getItem('authData') || '{}'),
  requireAuth: (nextState, replace) => {
    if (!window.localStorage.getItem('authData')) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  },
  logout: () => {
    window.localStorage.removeItem('authData');
    browserHistory.push('/');
  }
};
