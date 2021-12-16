// file that holds the TypeScript types

// products interface
interface elementProduct {
    favorite: string, 
    id: string,
    image_url: string,
    price: number,
    productDescription: string,
    productName: string,
    stock: number
}


type AppState = {
    products: elementProduct[],
    cart: elementProduct[],
    loading: boolean,
    error: string
};

interface DispatchType {
    type: string,
    payload: elementProduct[] | string
}