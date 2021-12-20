import * as types from '../actions/types';

import { AppState } from '../type';

//initial state
 const initialState: AppState = {
    products:[],
    favs:[],
    cart:[],
    error: []
 }

 const product = (state=initialState, action: any): any => {
    const {type, payload} = action;

    switch(type){
        case types.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
            }
        case types.GET_ALL_FAVS:
            return {
                ...state,
                favs: payload,
            }    
        case types.ADD_TO_FAVS:

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
        case types.GET_ALL_PRODUCTS_ERROR:
        case types.GET_ALL_FAVS_ERROR:
        case types.ADD_TO_FAVS_ERROR:
        // case types.ADD_TO_CART:
        
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
    }
 }

 export default product;