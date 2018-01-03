import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ValidationsActions from 'store/ducks/validations';

import Account from 'pages/account';

const initialState = {
  display: false,
  sixMinPassw: false,
  oneUpperCase: false,
  oneNumber: false,
  buttonEnabled: false,
};

const mockStore = configureStore([]);

describe('Testing Account', () => {
  const store = mockStore(initialState);

  it('should interact with component validator', () => {
    const wrapper = shallow(<Account />, { context: { store } });

    wrapper.dive().find({ id: 'password' }).simulate('changeText', 'senha123L');

    expect(store.getActions()).toContainEqual(ValidationsActions.validationsValidatesStrength('senha123L'));
  });
});
