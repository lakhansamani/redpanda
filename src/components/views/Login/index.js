import { connect } from 'react-redux';
import { pick } from 'lodash';
import { browserHistory } from 'react-router';
import Login from './Login';
import loginAction from '../../../actions/loginActions';
const mapStateToProps = state => pick(state.user, ['isAuthenticating', 'authError']);
const mapDispatchToProps = dispatch => ({
  login: (authData) => {
    const request = dispatch(loginAction.loginRequest(authData));
    request.req
    .then((res) => {
      dispatch(loginAction.loginSuccess(res.data));
      window.localStorage.setItem('authData', JSON.stringify(res.data));
      browserHistory.push('/home');
    }).catch((e) => {
      dispatch(loginAction.loginError(e.error.message));
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
