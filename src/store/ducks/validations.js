import { createActions, createReducer } from 'reduxsauce';

/* Analizers */

const matchSixMin = /^.*(?=.{6,}).*$/;
const matchUpCase = /(?=.*[A-Z])/;
const matchOneNumber = /(?=.*[0-9])/;

/* Types & Creators */

const { Types, Creators } = createActions({
  validationsValidatesStrength: ['password'],
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  display: false,
  sixMinPassw: false,
  oneUpperCase: false,
  oneNumber: false,
};

/* Reducers */

export const validatesStrength = (state, payload) => ({
  display: payload.password.length > 0,
  sixMinPassw: matchSixMin.test(payload.password),
  oneUpperCase: matchUpCase.test(payload.password),
  oneNumber: matchOneNumber.test(payload.password),
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.VALIDATIONS_VALIDATES_STRENGTH]: validatesStrength,
});

