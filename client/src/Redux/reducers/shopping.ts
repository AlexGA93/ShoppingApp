import * as types from '../actions/types';

import { IelementProduct, DispatchTypes, IAppState } from '../type';

//initial state
 const initialState: IAppState = {
    products:[],
    favs:[],
    cart:[],
    error: []
 }

 const product = (state=initialState, action: DispatchTypes): any => {
    

    switch(action.type){
        case types.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case types.GET_ALL_FAVS:
            return {
                ...state,
                favs: action.payload,
            }    
        case types.ADD_TO_FAVS:

            // inProducts
            // const inProducts = state.products.find((product): boolean => {
            //     return product.id === action.payload.id
            // });

            // inFavs
            //const inFavs = state.products.find((item): boolean => item.id === action.payload.id && item.favorite === action.payload.favorite ? true : false);
            
            // return {
            //     ...state,
            //     products: inFavs ? state.products.map((item) =>  item.id === action.payload.id ? {...item, favorite:1} : item ):[...state.products, {...inProducts, favorite: 0}]
            // }
        case types.ADD_TO_CART:
            // is in cart?
            // const inCart = state.cart.find((item): boolean => item.id === action.payload.id ? true : false);
            
            // return {
            //     ...state,
            //     // cart: inCart ? null : state.cart.push({...action.payload, qty:1})
            // }
        case types.GET_ALL_PRODUCTS_ERROR:
        case types.GET_ALL_FAVS_ERROR:
        case types.ADD_TO_FAVS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
 }

 export default product;