import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_ERROR,

    GET_ALL_FAVS,
    GET_ALL_FAVS_ERROR,

    ADD_TO_FAVS,
    ADD_TO_FAVS_ERROR,


    OUT_OF_FAVS,
    OUT_OF_FAVS_ERROR,


    ADD_TO_CART,
    ADD_TO_CART_ERROR

    
} from './types';

import api from '../../api/products';

import {elementProduct, DispatchType} from '../type';
import { dispatch } from 'react-hot-toast/dist/core/store';



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
    .catch((err) => {
        console.log(err.message);
        
        dispatch({
            type: GET_ALL_PRODUCTS_ERROR,
            payload: err.message
        });
    })
    // console.log('get all products');
    
}
// FAVORITES
export const getAllFavs = () => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    await api
    .get("/products/get/favorite")
    .then((response) => {
        // console.log(response.data);
        dispatch({
            type: GET_ALL_FAVS,
            payload: response.data
        });
    })
    .catch((err) => {
        // console.log(err.message);
        dispatch({
            type: GET_ALL_FAVS_ERROR,
            payload: err.message
        });
    })
    //console.log('get all favs');
    
}
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
        dispatch({
            type: ADD_TO_FAVS_ERROR,
            payload: err
        });
    })
    
    // console.log('ADD to favs');
    
};
export const quitFromFavs = (productData: elementProduct) => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    await api
    .patch(`/products/${productData.id}`, {favorite: 0})
    .then((element) => {
        // console.log(`${productData.productName} deleted from favorites`);
        // console.log(element.data);
        
        dispatch({
            type: OUT_OF_FAVS,
            payload: element.data
        });
    })
    .catch((err) => {

        dispatch({
            type: OUT_OF_FAVS_ERROR,
            payload: err
        });
    })
    // console.log('QUIT from favs');
    
};
// CART
export const addToCart = (productData: elementProduct) => async (dispatch: (args: DispatchType) => (DispatchType)) => {
    // console.log('STONKS! C:');
    // console.log(productData);
    // try{
    //     dispatch({
    //         type: ADD_TO_CART,
    //         payload: productData
    //     });
    // }catch(err){
    //     dispatch({
    //         type: ADD_TO_CART_ERROR,
    //         payload: err
    //     });
    // }

    console.log('add to cart');
    
};