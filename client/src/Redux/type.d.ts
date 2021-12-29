import { ActionType } from 'typesafe-actions';
import * as actions from './actions/shopping';

// File that holds the typescript types
export declare type typeActions = string;

// product array element type
export declare interface IelementProduct {
    id: string,
    image_url: string,
    stock: number,
    productName: string,
    price: number,
    productDescription: string,
    favorite: number
}

// state element type
export declare interface IAppState {
    products: elementProduct[],
    favs:elementProduct[],
    cart: elementProduct[],
    error: string[]
}

export declare interface ISuccessAction {
    type: string,
    payload: IelementProduct
}

export declare interface IErrorAction {
    type: string,
    payload: string
}

// dispatch type
export type DispatchTypes = ISuccessAction | IErrorAction;