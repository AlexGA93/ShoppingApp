import express, {Router, Request, Response} from 'express';
// Defining Router
const dbRouter: Router = Router();

import { authJWT } from '../middleware';

// controllers
import * as dbMethods from '../controllers/db.controller'

dbRouter.get('/products',[authJWT.verifyToken, authJWT.isAdmin],dbMethods.updateDb);

export default dbRouter;

