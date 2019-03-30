import predictionReducers from './prediction/reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    prediction: predictionReducers
});
