import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Login from '../components/views/Login';
const shallowWithStore = (component, store) => {
  const context = {
    store
  };
  return shallow(component, { context });
};
describe('Login', () => {
  it('should display login form', () => {
    // This is where we create a mock state/props
    const props = {
      isAuthenticating: false,
      authError: false
    };
    const store = createMockStore(props);
    const component = shallowWithStore(<Login />, store);
    expect(typeof component).toBe('object');
  });
});
