import {combineReducers} from 'redux'

import books from './Books';
import users from './Users';

const appReducer = combineReducers({
  users,
  books,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer