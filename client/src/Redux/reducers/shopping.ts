import { ListItem } from '@mui/material';
import Product from '../../components/Product/Product';
import * as types from '../actions/types';

import {ActionTypes, IAppState , IelementProduct, stateActions} from '../type';

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
            // product in products ? 
            let inProducts = state.products.find((element: IelementProduct): boolean => element.id===(payload as IelementProduct).id);
            // product in favs already? 
            let inFavs = state.favs.find((item: IelementProduct): boolean => item.id === (payload as IelementProduct).id && item.favorite===(payload as IelementProduct).favorite);
            
            if(!inFavs && inProducts ) {
                 return {
                    ...state,
                    products:state.products.map((product: IelementProduct) => product.id===(payload as IelementProduct).id ? {...product, favorite: (payload as IelementProduct).favorite} : product),
                    favs: payload
                }
            }
            break ;
        case types.OUT_OF_FAVS:
            // product in favs already? 
            //const isInFavs = state.favs.find((favorite: IelementProduct): boolean => favorite.id===(payload as IelementProduct).id);
            // console.log((payload as IelementProduct).id);
            // console.log(state.favs);
            
            
            
            // console.log(state.favs.find((element: IelementProduct): boolean => element.id===(payload as IelementProduct).id));
            
            // product in products ? 
            // let isInProducts = state.products.find((element: IelementProduct): boolean => element.id===(payload as IelementProduct).id);
            
        //     if(isInFavs && isInProducts ) {
        //         return {
        //            ...state,
        //            // modify product favorite info
        //            products:state.products.map((product: IelementProduct) => product.id===(payload as IelementProduct).id ? {...product, favorite: 0} : product),
        //            // remove product from state fav array
        //            favs: state.favs.filter((favProduct: IelementProduct) => favProduct.id === (payload as IelementProduct).id)
        //        }
        //    }
           break ;
        case types.GET_ALL_PRODUCTS_ERROR:
        case types.GET_ALL_FAVS_ERROR:
        case types.ADD_TO_FAVS_ERROR:
        default:
            return state;
    }
 }

 export default shopping;
