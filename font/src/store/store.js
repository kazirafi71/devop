import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducer/combineReducer'
import {
    composeWithDevTools
} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))

export default store