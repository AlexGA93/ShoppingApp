// redux core
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducers';

//store
var store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[thunk]))
);

//create a specific type with rootReducer
export type rootStore = ReturnType<typeof rootReducer>

//exporting store
export default store;
