import React from 'react';

import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import PasswordValidator from 'pages/account/components/PasswordValidator';
import styles from 'pages/account/components/PasswordValidator/styles';

const initialState = {
  validations: {
    display: false,
    sixMinPassw: false,
    oneUpperCase: false,
    oneNumber: false,
    buttonEnabled: false,
  },
};

const firstStepState = {
  validations: {
    display: true,
    sixMinPassw: true,
    oneUpperCase: false,
    oneNumber: false,
    buttonEnabled: false,
  },
};

const seccondStepState = {
  validations: {
    display: true,
    sixMinPassw: true,
    oneUpperCase: true,
    oneNumber: false,
    buttonEnabled: false,
  },
};

const thirdStepState = {
  validations: {
    display: true,
    sixMinPassw: true,
    oneUpperCase: true,
    oneNumber: true,
    buttonEnabled: true,
  },
};

const mockStore = configureStore([]);

describe('Testing PasswordValidator', () => {
  const store = mockStore(initialState);

  it('should render validators default state', () => {
    const wrapper = shallow(<PasswordValidator />, { context: { store } });
    expect(wrapper.prop('validations')).toBe(initialState.validations);

    expect(wrapper.dive().children().first().children()
      .first()
      .prop('style')).toEqual([styles.bar, {}]);
  });

  it('should pass the first step validation', () => {
    const firstStepStore = mockStore(firstStepState);
    const wrapper = shallow(<PasswordValidator />, { context: { store: firstStepStore } });

    expect(wrapper.dive().children().first().children()
      .first()
      .prop('style')).toEqual([styles.bar, styles.red]);
  });

  it('should pass the seccond step validation', () => {
    const seccondStepStore = mockStore(seccondStepState);
    const wrapper = shallow(<PasswordValidator />, { context: { store: seccondStepStore } });

    expect(wrapper.dive().children().first().children()
      .first()
      .prop('style')).toEqual([styles.bar, styles.orange]);
  });

  it('should pass the third step validation', () => {
    const thirdStepStore = mockStore(thirdStepState);
    const wrapper = shallow(<PasswordValidator />, { context: { store: thirdStepStore } });

    expect(wrapper.dive().children().first().children()
      .first()
      .prop('style')).toEqual([styles.bar, styles.green]);
  });
});
