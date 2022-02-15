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
            // searcg if payload is in products if yes update favs array
            let inProducts = state.products.map((element: IelementProduct): boolean => element.id === (payload as IelementProduct).id);
            console.log(inProducts.includes(true));

            return {
                ...state,
                products: inProducts.includes(true) ? state.products.map((element: IelementProduct) => element.id===(payload as IelementProduct).id ? {...element, favorite: 1}: element): null,
                favs: payload
            }
                
        case types.OUT_OF_FAVS:
            // console.log(state.favs);
            let isInProducts = state.products.map((element: IelementProduct): boolean => element.id === (payload as IelementProduct).id);
            let isInFavs = state.favs.map((element: IelementProduct): boolean => element.id === (payload as IelementProduct).id);
            // update state favs array structure
            state.favs.splice(isInFavs.indexOf(true),1);
            // charge changes in our state
            return {
                ...state,
                products: isInProducts.includes(true) ? state.products.map((element: IelementProduct) => element.id===(payload as IelementProduct).id ? {...element, favorite: 0}: element): null,
            }
            // break;
        case types.GET_ALL_PRODUCTS_ERROR:
        case types.GET_ALL_FAVS_ERROR:
        case types.ADD_TO_FAVS_ERROR:
        default:
            return state;
    }
 }

 export default shopping;
