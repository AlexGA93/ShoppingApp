//  import express
import {Router} from 'express';
// Defining Router
const dbRouter: Router = Router();

import * as userMethods from '../controllers/users.controller';
// middleware to protect routes
import { verifyToken } from '../middleware/authJWT';
                /* Authentication */
// Add a new user
dbRouter.post('/signup', userMethods.signUp);
// login
dbRouter.post('/signin', userMethods.signIn);

                /* Credentials Modification */
// Edit user's name
dbRouter.put('/username/:id', verifyToken, userMethods.editBasicInfo);
// Edit user's email
dbRouter.put('/email/:id', userMethods.editBasicInfo);
// Edit user's password
dbRouter.put('/password/:id', userMethods.editBasicInfo);
// Edit user's address
dbRouter.put('/address/:id', userMethods.editAddressInfo);
// Edit user's paymentInfo
dbRouter.put('/payment/:id', userMethods.editPaymentInfo);

export default dbRouter;
