import loginApi from '../api/login';
export default {
  loginRequest: loginData => ({
    type: 'LOGIN_REQUEST',
    req: loginApi(loginData)
  }),
  loginSuccess: data => ({
    type: 'LOGIN_REQUEST_SUCCESS',
    data
  }),
  loginError: message => ({
    type: 'LOGIN_REQUEST_ERROR',
    message
  })
};
