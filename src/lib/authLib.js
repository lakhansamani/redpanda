import { browserHistory } from 'react-router';
export const isLoggedIn = () => {
  if (window.localStorage.getItem('authData')) {
    return true;
  }
  return false;
};
export const getUser = () => JSON.parse(window.localStorage.getItem('authData') || '{}');
export const requireAuth = (nextState, replace) => {
  if (!window.localStorage.getItem('authData')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};
export const logout = () => {
  window.localStorage.removeItem('authData');
  browserHistory.push('/');
};
