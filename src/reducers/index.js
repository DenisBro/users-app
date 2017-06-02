import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';

/**
 * Reducers
 */
export const reducers = combineReducers({
  routing: routerReducer,
  users: users,

});
