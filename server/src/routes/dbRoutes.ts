import express, {Router, Request, Response} from 'express';
// Defining Router
const dbRouter: Router = Router();

// controllers
import * as dbMethods from '../controllers/db.controller'

dbRouter.get('/products',dbMethods.updateDb);

export default dbRouter;

