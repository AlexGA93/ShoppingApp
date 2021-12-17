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

import { AppState } from '../type';

//initial state
 const initialState: AppState = {
     products:[],
     cart:[],
     loading: true,
     error: []
 }

 const product = (state=initialState, action: any): any => {
    const {type, payload} = action;

    switch(type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }

        case ADD_TO_FAVS:

            // inProducts
            const inProducts = state.products.find((product): boolean => {
                return product.id === payload.id
            });

            // inFavs
            const inFavs = state.products.find((item): boolean => item.id === payload.id && item.favorite === payload.favorite ? true : false);
            
            return {
                ...state,
                products: inFavs ? state.products.map((item) =>  item.id === payload.id ? {...item, favorite:1} : item ):[...state.products, {...inProducts, favorite: 0}]
            }
            

        case GET_ALL_PRODUCTS_ERROR:
        case ADD_TO_FAVS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state;
    }
 }

 export default product;