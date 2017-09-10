import React from 'react';
import { browserHistory, Link } from 'react-router';
import ContactUs from '../../partials/ContactUs';
import Team from '../../partials/Team';
import Profile from '../../partials/Profile';
import Logout from '../../partials/Logout';
import menu from '../../../imgs/menu.png';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    // get subpath name from route and scroll to it
    const path = this.props.location.pathname.split('/');
    const element = document.getElementById(path['2']);
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  // funtion to handle scroll and route
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
    if (topScroll > (contactDiv.offsetTop - 200)) {
      browserHistory.push('/aboutus/contactus');
    }
  }
  // function to change section
  changeSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    document.getElementById('mobile-menu').style.width = '0%';
  }
  // function to open menu while in responsive mode
  openMenu() {
    document.getElementById('mobile-menu').style.width = '100%';
  }
  // function to close menu while in responsive mode
  closeMenu() {
    document.getElementById('mobile-menu').style.width = '0%';
  }
  render() {
    const path = this.props.location.pathname.split('/')[2];
    const profileActive = path === 'profile' ? 'active' : '';
    const teamActive = path === 'team' ? 'active' : '';
    const contactActive = path === 'contactus' ? 'active' : '';
    return (
      <div id="aboutUs" className="about-us-wrapper">
        <div className="nav">
          <a className="mobile-menu" onClick={this.openMenu.bind(this)}><img src={menu} alt="menu"/></a>
          <ul className="menu">
            <li onClick={this.changeSection.bind(this, 'profile')} className={profileActive}>
              <a> Profile </a>
            </li>
            <li onClick={this.changeSection.bind(this, 'team')} className={teamActive}>
              <a> Team </a>
            </li>
            <li onClick={this.changeSection.bind(this, 'contactus')} className={contactActive}>
              <a> Contact us </a>
            </li>
            <li>
              <Link to="/home">Home </Link>
            </li>
          </ul>
          <Logout />
        </div>
        <div className="about-container">
          <Profile />
          <Team />
          <ContactUs />
        </div>
        <div className="overlay" id="mobile-menu">
          <a className="closebtn" onClick={this.closeMenu.bind(this)}>&times;</a>
          <div className="overlay-content">
            <ul>
              <li>
                <a onClick={this.changeSection.bind(this, 'profile')}> Profile </a>
              </li>
              <li>
                <a onClick={this.changeSection.bind(this, 'team')}> Team </a>
              </li>
              <li>
                <a onClick={this.changeSection.bind(this, 'contactus')}> Contact us </a>
              </li>
              <li>
                <Link to="/home">Home </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
