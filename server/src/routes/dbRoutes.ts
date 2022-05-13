//  import express
import {Router} from 'express';
// Defining Router
const dbRouter: Router = Router();

// controllers
import * as dbMethods from '../controllers/db.controller';
// middlewares
import * as  authMiddleware from '../middleware/authJWT';

// admin only route
dbRouter.get('/products',[authMiddleware.verifyToken, authMiddleware.isAdmin],dbMethods.updateDb);

export default dbRouter;

