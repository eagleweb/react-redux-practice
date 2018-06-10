import { combineReducers} from "redux"
import userInfo from './info'
import changeCount from './increment'
import calcRoute from './route'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    userInfo,
    changeCount,
    calcRoute,
    routing: routerReducer
});

export default rootReducer