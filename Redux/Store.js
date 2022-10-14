import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { rootReducer } from './rootreducer';

export const configStore = () => {
    let store = createStore(rootReducer,applyMiddleware(thunk))
    return store;
}