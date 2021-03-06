import React from 'react';
import { Link } from 'react-router';
import homeBg from '../../../imgs/home-bg.jpg'; // eslint-disable-line
import Logout from '../../partials/Logout';
const Home = () => (
  <div className="home-wrapper" id="home">
    <Logout />
    <div className="content">
      <div className="header white-text">Your Story Starts Here.</div>
      <p className="white-text">
        Every home page needs to look beautiful to make first make impression.
        It should have its Click to Action highlighted in order to make it
        more user friendly and to get more leads.
      </p>
      <br/>
      <Link to="/aboutus/profile" className="about-link app-btn">Know more about us</Link>
    </div>
  </div>
);

export default Home;
