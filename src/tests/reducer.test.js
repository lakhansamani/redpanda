import reducer from '../reducers/user';
import loginAction from '../actions/loginActions';
import { getUser } from '../lib/authLib';
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
describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isAuthenticating: false,
        userData: getUser(),
        authError: ''
      }
    );
  });

  it('should handle login request', () => {
    expect(
      reducer({}, {
        type: 'LOGIN_REQUEST',
        req: loginApi(sampleRequest)
      })
    ).toEqual({
      isAuthenticating: true,
      userData: {},
      authError: ''
    });

    expect(
      reducer(
        {
          isAuthenticating: true,
          userData: {},
          authError: ''
        },
        {
          type: 'LOGIN_REQUEST_SUCCESS',
          data: loginResponse
        }
      )
    ).toEqual({
      isAuthenticating: false,
      userData: loginResponse,
      authError: ''
    });
    expect(
      reducer(
        {
          isAuthenticating: true,
          userData: {},
          authError: ''
        },
        {
          type: 'LOGIN_REQUEST_ERROR',
          message: 'Invalid email or password'
        }
      )
    ).toEqual({
      isAuthenticating: false,
      userData: {},
      authError: 'Invalid email or password'
    });
  });
});
