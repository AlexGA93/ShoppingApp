// File that holds the typescript types

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
    cart: elementProduct[],
    error: string[],
    loading: boolean,
    products: elementProduct[]
}

// Dispatch action type
export declare interface DispatchType {
    type: string, 
    payload: elementProduct[]
};
