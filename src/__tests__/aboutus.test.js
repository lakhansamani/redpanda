import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { isLoggedIn } from '../lib/authLib';
import AboutUs from '../components/views/AboutUs';
describe('Home Page', () => {
  it('should be logged in', () => {
    const props = {
      location: {
        pathname: 'profile'
      }
    };
    expect(isLoggedIn()).toBe(true);
    expect(shallow(<AboutUs {...props} />).find('#aboutUs').hasClass('about-us-wrapper')).toBe(true);
  });
});
