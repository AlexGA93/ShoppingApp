// redux core
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// combined reducers
import shopping from '../reducers/shopping';


//store
const store = createStore(
    shopping,
    {},
    composeWithDevTools(applyMiddleware(...[thunk]))
);
//exporting store
export default store;