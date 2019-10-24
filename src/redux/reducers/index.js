import { combineReducers } from 'redux';
import {imageReducer,postReducer} from './reducers';
import langReducer from './langReducer';

export default combineReducers ( {

        images : imageReducer,
        posts : postReducer,
        locale :  langReducer

} )

