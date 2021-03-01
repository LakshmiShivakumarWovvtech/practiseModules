import {combineReducers} from 'redux';
import CovidCountReducer from './CovidCountReducer';

export default combineReducers({
  counts: CovidCountReducer,
});
