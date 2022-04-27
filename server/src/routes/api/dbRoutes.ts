import axios from 'axios';

//  import express
import express, {Router, Request, Response} from 'express';
// Defining Router
const dbRouter: Router = Router();
// express validator
// const {body, validationResult} = require('express-validator');

import { apiProductType } from '../../types/types';

import Product from '../../database/schema/Product';

const apiUrl: string = 'https://fakestoreapi.com/products';

dbRouter.get('/products',  async (req: Request, res: Response) => {
    //axios api call
    var dataProduct = await axios.get<apiProductType[]>(apiUrl);

    // express post request to insert in mongo database
    dataProduct.data.forEach( (element: apiProductType) => {

        // defining a new product model to store
        var productDetails = new Product({
            id: element.id,
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
        // store in MongoDB
        productDetails.save();
    });

    // send data
    res.send('Updated database');
    
});

export default dbRouter;

