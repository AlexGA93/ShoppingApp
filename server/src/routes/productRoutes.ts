// import express
import { Router } from 'express';
// Defining Router
const dbRouter: Router = Router();

// controllers
import * as authMethods from '../controllers/auth.controller';
import * as productMethods from '../controllers/products.controller';


// middleware
import { authJWT } from '../middleware';


// get all products
dbRouter.get('/all', productMethods.getProducts);
dbRouter.get('/product/_id/:id', productMethods.getProductById);
dbRouter.get('/product/category/:category', productMethods.getProductByCategory);
dbRouter.get('/product/rating/:rating', productMethods.getProductByRating);
dbRouter.get('/product/favorites/all', productMethods.getFavoritesProducts);

export default dbRouter;