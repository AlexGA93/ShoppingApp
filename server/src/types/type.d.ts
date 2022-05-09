export declare interface apiProductType extends mongoose.Document{
    private _id?: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    favorite: boolean,
    rating: {
        rate: number,
        qty: number,
        count: number
    }
}

export declare interface RoleType {
    _id: string,
    name: string
};

export declare interface apiUserType extends mongoose.Document {
    private _id?: string,
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
    },
    paymentInfo: {
        bankName: string,
        accountNumber: string,
        secretNumber: number
    },
    roles?: string[],
}

export declare interface Config {
    MONGO_URI?: string,
    PORT?: string,
    SECRET: string,
    EXPIRATION_DATE: number
};

export interface RequestType {
    host?:             string;
    "user-agent"?:     string;
    "content-type"?:   string;
    "x-access-token"?:   string;
    accept?:           string;
    "content-length"?: string;
}

export declare interface decodedType {
    id: string
}