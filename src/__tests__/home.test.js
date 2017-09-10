import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { isLoggedIn } from '../lib/authLib';
import Home from '../components/views/Home';
describe('Home Page', () => {
  it('should be logged in', () => {
    expect(isLoggedIn()).toBe(true);
    expect(shallow(<Home />).find('#home').hasClass('home-wrapper')).toBe(true);
  });
});
