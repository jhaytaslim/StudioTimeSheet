import { combineReducers } from 'redux';
import recordReducer from './record'

const reducers = combineReducers({record:recordReducer});
export default reducers;