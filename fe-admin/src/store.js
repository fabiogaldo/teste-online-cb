import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import accountReducer from './reducers/AccountReducer';
import questionReducer from './reducers/QuestionReducer';

const reducers = combineReducers({
  account: accountReducer,
  question: questionReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
