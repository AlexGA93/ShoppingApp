//  import express
import {Router} from 'express';
// Defining Router
const dbRouter: Router = Router();

import * as userMethods from '../controllers/users.controller';
                /* Authentication */
// Add a new user
dbRouter.post('/signup', userMethods.signUp);
// login
dbRouter.post('/signin', userMethods.signIn);

                /* Credentials Modification */
// Edit user's name
dbRouter.put('/:id/:name', userMethods.editUsername);
// Edit user's email
dbRouter.put('/:id/:email');
// Edit user's password
dbRouter.put('/:id/:password]');

// Edit user's address
dbRouter.put('/:id/address/:street');
dbRouter.put('/:id/address/:zip');
dbRouter.put('/:id/address/:region');
dbRouter.put('/:id/address/:city');
dbRouter.put('/:id/address/:country');

// Edit user's paymentInfo
dbRouter.put('/:id/payment/:bankName');
dbRouter.put('/:id/payment/:accountNumber');
dbRouter.put('/:id/payment/:secretNumber');

export default dbRouter;
