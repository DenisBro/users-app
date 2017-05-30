import { combineReducers } from 'redux';

import users from './users';

/**
 * Reducers
 */
export const reducers = combineReducers({
  users: users,
});
