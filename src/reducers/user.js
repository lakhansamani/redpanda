import { assign } from 'lodash';
import { getUser } from '../lib/authLib';
const defaultState = {
  isAuthenticating: false,
  userData: getUser(),
  authError: ''
};
const main = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return assign(
        {},
        state,
        {
          isAuthenticating: true,
          authError: '',
          userData: {}
        }
      );
    case 'LOGIN_REQUEST_SUCCESS':
      return assign(
        {},
        state,
        {
          isAuthenticating: false,
          authError: '',
          userData: action.data
        }
      );
    case 'LOGIN_REQUEST_ERROR':
      return assign(
        {},
        state,
        {
          isAuthenticating: false,
          authError: action.message,
          userData: {}
        }
      );
    default:
      return state;
  }
};
module.exports = main;
