//  import express
import {Router} from 'express';
// Defining Router
const dbRouter: Router = Router();

// controllers
import * as authMethods from '../controllers/auth.controller';
import * as dbMethods from '../controllers/db.controller'

// middleware to protect routes
import { authJWT } from '../middleware';

dbRouter.get('/products',dbMethods.updateDb);

export default dbRouter;

