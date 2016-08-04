import { FETCH_USERS } from '../actions/types';

console.log(FETCH_USERS);

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_USERS:
      return [ ...state, ...action.payload.data];
  }
  return state;
}
