import React from 'react';
import logoutImg from '../../../imgs/logout.png';
import { logout } from '../../../lib/authLib';
const Logout = () => (
  <a className="logout" onClick={logout}><img src={logoutImg} alt="logout"/></a>
);
export default Logout;
