import ValidationsActions, { reducer } from 'store/ducks/validations';

const initialState = {
  display: false,
  sixMinPassw: false,
  oneUpperCase: false,
  oneNumber: false,
};

describe('Testing validations reducer', () => {
  it('can validates strength with initial State', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength(''));
    expect(state).toEqual(initialState);
  });

  it('can validates six min chars required', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength('12345'));
    expect(state.sixMinPassw).toEqual(false);
  });

  it('shoudl pass validation six min chars required', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength('123456'));
    expect(state.sixMinPassw).toEqual(true);
  });

  it('can validates one upper char required', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength('asdf'));
    expect(state.oneUpperCase).toEqual(false);
  });

  it('should pass validation one upper char required', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength('asdfL'));
    expect(state.oneUpperCase).toEqual(true);
  });

  it('can validates one number required', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength('abc'));
    expect(state.oneNumber).toEqual(false);
  });

  it('should pass validation one number required', () => {
    const state = reducer(initialState, ValidationsActions.validationsValidatesStrength('abc1'));
    expect(state.oneNumber).toEqual(true);
  });
});
