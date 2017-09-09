import React from 'react'; // eslint-disable-line
import { browserHistory } from 'react-router';
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
    scrollTo(document.body, element.offsetTop - 50, 500);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  handleScroll(e) {
    const topScroll = document.body.scrollTop;
    const teamDiv = document.getElementById('team');
    const profileDiv = document.getElementById('profile');
    if (topScroll < profileDiv.scrollHeight) {
      browserHistory.push('/aboutus/profile');
    }
    if (topScroll > (teamDiv.offsetTop - 100) && topScroll < teamDiv.scrollHeight) {
      browserHistory.push('/aboutus/team');
    }
    if (topScroll > (teamDiv.scrollHeight + 100 )) {
      browserHistory.push('/aboutus/contactus');
    }
  }
  render() {
    return (
      <div ref="aboutUs">
        <h1> AboutUs </h1>
        <Profile />
        <Team />
        <ContactUs />
      </div>
    );
  }
}

export default AboutUs;
