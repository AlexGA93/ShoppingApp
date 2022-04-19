
// File that holds the typescript types
export declare type typeActions = string;

// product array element type
export declare interface IelementProduct {
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image:string,
    qty?: number,
    favorite?: number,
    rating: {
        rate: number,
        count: number // stock
    }
    // favorite: number,
    // id: string,
    // image: string,
    // price: number,
    // description: string,
    // title: string,
    // stock: number,
    // qty?: number
};

// state element type
export declare interface IAppState {
    shopping: {
        products: IelementProduct[],
        favs: IelementProduct[],
        cart: IelementProduct[]
    }
};

export declare type stateActions = IelementProduct | IelementProduct[] | string;

export type ActionTypes =
    | { type: string, payload: IelementProduct } // get a single product
    | { type: string, payload: IelementProduct[] } // get all products favs or not
    | { type: string, payload: string } // error
