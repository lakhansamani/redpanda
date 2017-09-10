import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';
it('app renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.find('div').hasClass('container')).toBe(true);
});
