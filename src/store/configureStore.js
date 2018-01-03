import { createStore, compose } from 'redux';

export default (rootReducer) => {
  const enhancers = [];

  /* Store */
  const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  return store;
};
