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
} from './types';

import api from '../../api/products';



export const getAllProducts = () => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    await api
    .get("/products")
    .then((response) => {
        // console.log(response.data);
        
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        });
    })
    .catch(err => {
        console.log(err.message);
        
        dispatch({
            type: GET_ALL_PRODUCTS_ERROR,
            payload: err.message
        });
    })
}
