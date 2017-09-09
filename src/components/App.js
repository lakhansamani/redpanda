import React from 'react'; //eslint-disable-line
import { isLoggedIn, logout } from '../lib/authLib';
const App = ({ children }) => (
  <div>
    {
      (isLoggedIn())
      ?
        <div>
          <a onClick={logout}>Logout</a>
        </div>
      :
        ''
    }
    <div className="container">
      {children}
    </div>
  </div>
);

export default App;
