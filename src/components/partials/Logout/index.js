import React from 'react' //eslint-disable-line
import logoutImg from '../../../imgs/logout.png'; //eslint-disable-line
import { logout } from '../../../lib/authLib';
const Logout = () => (
  <a className="logout" onClick={logout}><img src={logoutImg} alt="logout"/></a>
);
export default Logout;
