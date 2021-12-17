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

import {elementProduct, DispatchType} from '../type';



export const getAllProducts = () => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    await api
    .get("/products/list")
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
// FAVORITES
export const addToFavs = (productData: elementProduct) => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    
    await api
    .patch(`/products/${productData.id}`, {favorite: 1})
    .then((element) => {
        //console.log(`${productData.productName} added to favorites`);
        // console.log(element.data);
        
        // dispatch
        dispatch({
            type: ADD_TO_FAVS,
            payload: element.data
        });
    })
    .catch((err) => {
        console.log(err);
        // dispatch
        // dispatch({
        //     type: ADD_TO_FAVS_ERROR,
        //     payload: err
        // });
    })
    
    // console.log('ADD');
    
};


export const quitFromFavs = (productData: elementProduct) => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    await api
    .patch(`/products/${productData.id}`, {favorite: 0})
    .then((element) => {
        console.log(`${productData.productName} deleted from favorites`);
        console.log(element);
        
        // dispatch
        // dispatch({
        //     type: ADD_TO_FAVS,
        //     payload: element
        // });
    })
    .catch((err) => {
        console.log(err.message);
        
    })
    //console.log('QUIT');
    
};