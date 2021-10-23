import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_ERROR,
    GET_ALL_FAVS,
    GET_ALL_FAVS_ERROR,
    ADD_TO_FAVS,
    ADD_TO_FAVS_ERROR,
    OUT_OF_FAVS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADJUST_MORE_QTY,
    ADJUST_LESS_QTY,
    ADJUST_ITEM_QTY,
    PAYDAY,
    PAYDAY_ERROR
} from '../actions/types';

//initial state
 const initialState = {
     products:[],
     cart:[]
 }

 const product = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_ALL_PRODUCTS:
            return {
                products: payload
            }
        default:
            return state;
    }
 }

 export default product;