
// redux core
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// combined reducers
import shopping from '../reducers/shopping';

const defaultStore = { 
    products: [], 
    cart: [],
    loading: true,
    error: {}
}


//store
const store = createStore(
    shopping,
    defaultStore,
    composeWithDevTools(applyMiddleware(...[thunk]))
);
//exporting store
export default store;