// File that holds the typescript types
export declare type typeActions = string;

// product array element type
export declare interface elementProduct {
    id: string,
    image_url: string,
    stock: number,
    productName: string,
    price: number,
    productDescription: string,
    favorite: number
}

// state element type
export declare interface AppState {
    products: elementProduct[],
    favs:elementProduct[],
    cart: elementProduct[],
    error: string[]
}

// Dispatch action type
export declare interface DispatchType {
    type: string, 
    payload: elementProduct[]
};
