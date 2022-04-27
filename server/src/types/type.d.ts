export declare interface apiProductType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export declare interface apUserType {
    username: string,
    email: string,
    password: string,
    age: number,
    address: {
        street: string,
        zip: string,
        region:string,
        city: string,
        country: string
    }
}