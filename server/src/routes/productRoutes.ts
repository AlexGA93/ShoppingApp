// import express
import { Router } from 'express';
// Defining Router
const dbRouter: Router = Router();

// controllers
import * as productMethods from '../controllers/products.controller';
// middleware
import * as  authMiddleware from '../middleware/authJWT';


// get all products
dbRouter.get('/all', productMethods.getProducts);
dbRouter.get('/product/_id/:id', productMethods.getProductById);
dbRouter.get('/product/category/:category', productMethods.getProductByCategory);
dbRouter.get('/product/rating/:rating', productMethods.getProductByRating);
dbRouter.get('/product/favorites/all', productMethods.getFavoritesProducts);

// add a new product - Admin OR seller
dbRouter.post('/',[
    authMiddleware.verifyToken, 
    authMiddleware.isAdmin //|| authMiddleware.isSeller
],productMethods.addNewProduct);

// modify favorite field -> admin
dbRouter.put('/product/update/fav/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin], productMethods.changeFavoriteProduct);

// modify product data - Admin
dbRouter.put('/product/update/title/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductTitle);
dbRouter.put('/product/update/price/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductPrice);
dbRouter.put('/product/update/desc/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductDesc);
dbRouter.put('/product/update/category/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductCat);
dbRouter.put('/product/update/img/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductImg);
dbRouter.put('/product/update/rating/rate/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductRate);
dbRouter.put('/product/update/rating/qty/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductQty);
dbRouter.put('/product/update/rating/count/:id',[authMiddleware.verifyToken, authMiddleware.isAdmin],productMethods.changeProductCount);

// delete a product - admin and seller
dbRouter.delete('/product/_id/:id',[
    authMiddleware.verifyToken, 
    authMiddleware.isAdmin || authMiddleware.isSeller
],productMethods.deleteProduct)


export default dbRouter;