import axios from 'axios';
//  import express
import express, {Router, Request, Response} from 'express';

import Product from '../database/schema/Product';

import { apiProductType } from '../types/type';

export const updateDb = async (req:Request, res:Response) => {
    
    const apiUrl: string = 'https://fakestoreapi.com/products';
    //axios api call
    var dataProduct = await axios.get<apiProductType[]>(apiUrl);

    console.log(dataProduct);
    
    // express post request to insert in mongo database
    dataProduct.data.forEach( (element: apiProductType) => {
        // defining a new product model to store
        var productDetails = new Product({
            id: element._id,
            title: element.title,
            price: element.price,
            description: element.description,
            category: element.category,
            image: element.image,
            favorite: false,
            rating: {
                rate: element.rating.rate,
                qty: 0,
                count: element.rating.count
            }
        });

        // console.log(productDetails);
        
        // store in MongoDB
        productDetails.save();
    });

    // send data
    res.send('Updated database');
};