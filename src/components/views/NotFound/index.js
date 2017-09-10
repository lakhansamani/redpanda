import React from 'react';
import { Link } from 'react-router';
const NotFound = () => (
  <div className="container">
    <h1> Not Found </h1>
    <p> Sorry, page not found. </p>
    <p> <Link to="/">Go to the Home</Link> </p>
  </div>
);

export default NotFound;
