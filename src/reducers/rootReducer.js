import { combineReducers} from "redux"
import userInfo from './info'
import changeCount from './increment'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    userInfo,
    changeCount,
    routing: routerReducer
});

export default rootReducer