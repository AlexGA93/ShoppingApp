
// redux core
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// combined reducers
import shopping from '../reducers/shopping';

var defaultStore = { 
    cart: [],
    error: [],
    loading: true,
    products:[]
}


//store
var store = createStore(
    shopping,
    defaultStore,
    composeWithDevTools(applyMiddleware(...[thunk]))
);
//exporting store
export default store;