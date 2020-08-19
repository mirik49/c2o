import {indexReducer} from "./index/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from 'redux';

export const baseState : any = {
    showPreloader: true,
    offerCheckbox: true
};

const mainReducer = combineReducers({
    index: indexReducer,
});

const withDevTools = () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return composeWithDevTools(applyMiddleware(thunk));
            break;
        case "production" :
            return applyMiddleware(thunk)
            break;
    }
}

export function initializeStore(initialState = baseState) {
    return createStore(
        mainReducer,
        initialState,
        withDevTools()
    )
}
