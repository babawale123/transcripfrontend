import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { userLoginReducer } from './reducers/UserReducer';
import { studentReducer, transcriptReducer } from './reducers/transcriptReducer';


const reducers = combineReducers({
    userLogin: userLoginReducer,
    transcript:transcriptReducer,
    student:studentReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
)

export default store