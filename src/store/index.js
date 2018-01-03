import { combineReducers } from 'redux';

/* Reducers */
import { reducer as validations } from './ducks/validations';

import configureStore from './configureStore';

const rootReducer = combineReducers({
  validations,
});

const store = configureStore(rootReducer);

export default store;
