import React from 'react'; // eslint-disable-line
import { browserHistory } from 'react-router';
import ContactUs from '../../partials/ContactUs'; // eslint-disable-line
import Team from '../../partials/Team'; // eslint-disable-line
import Profile from '../../partials/Profile'; // eslint-disable-line

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    console.log('scrolling');
    const teamDiv = document.getElementById('team');
    const profileDiv = document.getElementById('profile');
    const contactDiv = document.getElementById('contactus');
    console.log(teamDiv.scrollHeight, profileDiv.scrollTop, contactDiv.scrollTop);
    if (teamDiv.srcollTop > 100) {
      browserHistory.push('/aboutus/team');
    }
  }
  render() {
    return (
      <div id="about-us">
        <h1> AboutUs </h1>
        <Profile />
        <Team />
        <ContactUs />
      </div>
    );
  }
}

export default AboutUs;
