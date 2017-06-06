//import { takeLatest } from 'redux-saga';
import { fork, all, takeLatest } from 'redux-saga/effects';

import { usersFetchList, usersAdd, usersEdit, usersDelete} from './users';

//main saga generator
export function* sagas() {
  yield all([
    fork(takeLatest, 'usersFetchList', usersFetchList),
    fork(takeLatest, 'usersAdd', usersAdd),
    fork(takeLatest, 'usersEdit', usersEdit),
    fork(takeLatest, 'usersDelete', usersDelete),
  ]);
}
