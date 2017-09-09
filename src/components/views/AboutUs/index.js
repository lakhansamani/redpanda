import React from 'react'; // eslint-disable-line
import { browserHistory, Link } from 'react-router'; // eslint-disable-line
import ContactUs from '../../partials/ContactUs'; // eslint-disable-line
import Team from '../../partials/Team'; // eslint-disable-line
import Profile from '../../partials/Profile'; // eslint-disable-line
import scrollTo from '../../../lib/animatedScroll';
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    const path = this.props.location.pathname.split('/');
    const element = document.getElementById(path['2']);
    scrollTo(document.body, element.offsetTop - 80, 500);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    const topScroll = document.body.scrollTop;
    const teamDiv = document.getElementById('team');
    const profileDiv = document.getElementById('profile');
    const contactDiv = document.getElementById('contactus');
    if (topScroll < profileDiv.scrollHeight - 300) {
      browserHistory.push('/aboutus/profile');
    }
    if (topScroll > teamDiv.offsetTop - 100 && topScroll < contactDiv.offsetTop - 300) {
      browserHistory.push('/aboutus/team');
    }
    console.log(topScroll, profileDiv.scrollHeight, teamDiv.offsetTop );
    if (topScroll > (contactDiv.offsetTop - 200)) {
      browserHistory.push('/aboutus/contactus');
    }
  }
  changeSection(id) {
    const element = document.getElementById(id);
    scrollTo(document.body, element.offsetTop - 80, 500);
  }
  render() {
    return (
      <div ref="aboutUs">
        <div className="nav">
          <ul className="menu">
            <li>
              <a onClick={this.changeSection.bind(this, 'profile')}> Profile </a>
            </li>
            <li>
              <a onClick={this.changeSection.bind(this, 'team')}> Team </a>
            </li>
            <li>
              <a onClick={this.changeSection.bind(this, 'contactus')}> Contact us </a>
            </li>
          </ul>
        </div>
        <div className="about-container">
          <Profile />
          <Team />
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default AboutUs;
