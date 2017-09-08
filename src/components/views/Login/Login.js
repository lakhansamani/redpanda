import React, { Component } from 'react'; //eslint-disable-line
import { browserHistory } from 'react-router';
import emailValidation from '../../../lib/emailValidation';
import { isLoggedIn } from '../../../lib/authLib';
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
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      emailError: ''
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      passwordError: ''
    });
  }
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
      <div>
        <form onSubmit={this.handleAuthentication}>
          <div>
            <input type="text" placeholder="Email" onChange={this.handleEmailChange} />
            <div className="error">{this.state.emailError}</div>
          </div>
          <div>
            <input type="password" placeholder="password" onChange={this.handlePasswordChange} />
            <div className="error">{this.state.passwordError}</div>
          </div>
          <div className="error">
            {this.props.authError}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
