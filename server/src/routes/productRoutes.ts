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
// add a new product - Admin
dbRouter.post('/', productMethods.addNewProduct);
// modify favorite field
dbRouter.put('/product/update/fav/:id', productMethods.changeFavoriteProduct);
// modify product data - Admin
dbRouter.put('/product/update/title/:title');
dbRouter.put('/product/update/price/:price');
dbRouter.put('/product/update/desc/:description');
dbRouter.put('/product/update/category/:category');
dbRouter.put('/product/update/img/:image');
dbRouter.put('/product/update/rating/rate/:rate');
dbRouter.put('/product/update/rating/qty/:qty');
dbRouter.put('/product/update/rating/count/:count');
// delete a product - admin



export default dbRouter;