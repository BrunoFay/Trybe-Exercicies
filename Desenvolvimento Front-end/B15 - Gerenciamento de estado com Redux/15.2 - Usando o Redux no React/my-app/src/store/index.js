import { createStore, combineReducers } from 'redux';
import rootReducer from '..';

const store = createStore(rootReducer);

export default store;