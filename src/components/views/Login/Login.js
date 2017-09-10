import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import emailValidation from '../../../lib/emailValidation';
import { isLoggedIn } from '../../../lib/authLib';
import login from '../../../imgs/login-bg.jpg'; // eslint-disable-line
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  componentDidMount() {
    if (isLoggedIn()) {
      browserHistory.push('/home');
    }
  }
  // function to change state value based on change of input value
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      emailError: ''
    });
  }
  // function to change state value based on change of input value
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      passwordError: ''
    });
  }
  // function used for validating and submitting form
  handleAuthentication(e) {
    e.preventDefault();
    const authData = {
      email: this.state.email,
      password: this.state.password
    };
    let isError = false;
    if (authData.email.trim() === '' || !emailValidation(authData.email)) {
      isError = true;
      this.setState({
        emailError: 'Please enter valid email'
      });
    }
    if (authData.password === '') {
      isError = true;
      this.setState({
        passwordError: 'Please enter password'
      });
    }
    if (!isError) {
      this.props.login(authData);
    }
  }
  render() {
    return (
      <div className="login-wrapper" id="login-view">
        <div className="login-form-wrapper">
          <div className="login-header">
            Login
            <p>
              Sign in and get access !
            </p>
          </div>
          <form onSubmit={this.handleAuthentication}>
            <div>
              <input type="text" placeholder="Email" onChange={this.handleEmailChange} />
              <div className="error">{this.state.emailError}</div>
            </div>
            <div>
              <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
              <div className="error">{this.state.passwordError}</div>
            </div>
            <div className="error">
              {this.props.authError}
            </div>
            <button type="submit">
              {this.props.isAuthenticating ? 'Processing ....' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
