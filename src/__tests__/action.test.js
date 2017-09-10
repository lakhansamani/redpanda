import loginAction from '../actions/loginActions';
import loginApi from '../api/login';
const loginResponse = {
  id: 3,
  name: 'Test',
  email: 'test@test.com'
};
const sampleRequest = {
  email: 'test@test.com',
  password: 'password'
};
describe('actions', () => {
  it('should create an action for login request', () => {
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      req: loginApi(sampleRequest)
    };
    expect(loginAction.loginRequest(sampleRequest)).toEqual(expectedAction);
  });
  it('should create an action for login success', () => {
    const expectedAction = {
      type: 'LOGIN_REQUEST_SUCCESS',
      data: loginResponse
    };
    expect(loginAction.loginSuccess(loginResponse)).toEqual(expectedAction);
  });
  it('should create an action for login error', () => {
    const expectedAction = {
      type: 'LOGIN_REQUEST_ERROR',
      message: 'Invalid email or password'
    };
    expect(loginAction.loginError('Invalid email or password')).toEqual(expectedAction);
  });
});
