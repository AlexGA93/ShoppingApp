import * as types from '../actions/types';
import {ActionTypes, IelementProduct, stateActions} from '../type';

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
        case types.ADD_TO_FAVS:
            let isInProducts = state.products.map((element: IelementProduct): boolean => element.id === (payload as IelementProduct).id);

            return {
                ...state,
                products: isInProducts.includes(true) ? state.products.map((element: IelementProduct) => element.id===(payload as IelementProduct).id ? {...element, favorite: 1}: element): null,
                favs: payload
            }

        case types.OUT_OF_FAVS:
            let dataIsInProducts = state.products.map((element: IelementProduct): boolean => element.id === (payload as IelementProduct).id);
            let isInFavs = state.favs.map((element: IelementProduct): boolean => element.id === (payload as IelementProduct).id);
            state.favs.splice(isInFavs.indexOf(true),1);

            return {
                ...state,
                products: dataIsInProducts.includes(true) ? state.products.map((element: IelementProduct) => element.id===(payload as IelementProduct).id ? {...element, favorite: 0}: element): null,
            }

        case types.ADD_TO_CART:

            let inProducts = state.products.find( (product: IelementProduct) => product.id === (payload as IelementProduct).id ) ?? {};
            let inCart = state.cart.find( (product: IelementProduct) => product.id === (payload as IelementProduct).id );
            
            return {
                ...state,
                cart: inCart ? 
                    state.cart.map((item: IelementProduct) =>item.id === (payload as IelementProduct).id ? { ...item, qty: item.qty ?  item.qty+1 : null }: item) 
                    : 
                    [...state.cart, { ...inProducts, qty: 1 }],
            };
        case types.GET_ALL_PRODUCTS_ERROR:
        case types.GET_ALL_FAVS_ERROR:
        case types.ADD_TO_FAVS_ERROR:
        case types.ADD_TO_CART_ERROR: 
        default:
            return state;
    }
 }

 export default shopping;
