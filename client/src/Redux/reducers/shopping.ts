import * as types from '../actions/types';

import {ActionTypes, IAppState , stateActions} from '../type';

//initial state
 const initialState = {
    products:[],
    favs:[],
    cart:[]
 }

 const shopping = (state = initialState, action: ActionTypes) => {
    let type: string = action.type;
    let payload: stateActions = action.payload;

    switch(type){
        case types.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case types.GET_ALL_FAVS:
            return {
                ...state,
                favs: payload
            }    
        // case types.ADD_TO_FAVS:

        //     // inProducts
        //     const inProducts = state.products.find((product): boolean => {
        //         return product.id === payload.id
        //     });

        //     // inFavs
        //     const inFavs = state.products.find((item): boolean => item.id === payload.id && item.favorite === payload.favorite ? true : false);
            
        //     return {
        //         ...state,
        //         favs: inFavs ? state.products.map((item) =>  item.id === payload.id ? {...item, favorite:1} : item ):[...state.products, {...inProducts, favorite: 0}]
        //     }
            
        // case types.ADD_TO_CART:
            // is in cart?
            // console.log(payload);
            // break;
            
            //const inCart = state.cart.find((item): boolean => item.id === payload.id ? true : false);
            
            // return {
            //     ...state,
            //     // cart: inCart ? null : state.cart.push({...payload, qty:1})
            // }
        case types.GET_ALL_PRODUCTS_ERROR:
        case types.GET_ALL_FAVS_ERROR:
        case types.ADD_TO_FAVS_ERROR:
            // return {
            //     ...state,
            //     error: payload,
            // }
        default:
            return state;
            
    }
 }

 export default shopping;
