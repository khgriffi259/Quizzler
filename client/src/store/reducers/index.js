import { combineReducers } from 'redux'
import errorReducer from './error'
import authReducer from './auth'
import questionReducer from './question'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    question: questionReducer
})