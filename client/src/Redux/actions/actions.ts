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
import {Dispatch} from 'redux';
import {ActionTypes, IelementProduct} from '../type';



export const getAllProducts = () => async (dispatch: Dispatch<ActionTypes>) => {
    await api
    .get("/products/list")
    .then((response) => {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_ALL_PRODUCTS_ERROR,
            payload: err.message// err.response.statusText
        });
    })
    
}
// FAVORITES
export const getAllFavs = () => async (dispatch: Dispatch<ActionTypes>) => {
    await api
    .get("/products/get/favorite")
    .then((response) => {
        dispatch({
            type: GET_ALL_FAVS,
            payload: response.data
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_ALL_FAVS_ERROR,
            payload: err.message
        });
    })
    
}
export const addToFavs = (productData: IelementProduct) => async (dispatch: Dispatch<ActionTypes>) => {
    await api
    .patch(`/products/${productData.id}`, {favorite: 1})
    .then((element) => {
        dispatch({
            type: ADD_TO_FAVS,
            payload: element.data
        });
    })
    .catch((err) => {
        dispatch({
            type: ADD_TO_FAVS_ERROR,
            payload: "Add to Favs Error"
        });
    })
};

export const quitFromFavs = (productData: IelementProduct) => async(dispatch: Dispatch<ActionTypes>) => {
    await api
    .patch(`/products/${productData.id}`, {favorite:0})
    .then((element) => {
        dispatch({
            type: OUT_OF_FAVS,
            payload: element.data
        })
    })
    .catch((err) => {
        dispatch({
            type: OUT_OF_FAVS_ERROR,
            payload: "Out of Favs Error"
        });
    })
}
    