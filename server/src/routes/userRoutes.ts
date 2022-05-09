//  import express
import {Router} from 'express';
// Defining Router
const dbRouter: Router = Router();

// controllers
import * as authMethods from '../controllers/auth.controller';
import * as userMethods from '../controllers/users.controller';

// middleware to protect routes
import { authJWT } from '../middleware';

                /* Authentication */
// Add a new user
dbRouter.post('/signup', authMethods.signUp);
// login
dbRouter.post('/signin', authMethods.signIn);

                /* user */
dbRouter.get('/me/:id',authJWT.verifyToken, userMethods.getUser);

                /* Credentials Modification */
// Edit user's name
dbRouter.put('/username/:id', authJWT.verifyToken, userMethods.editUsername);
// Edit user's email
dbRouter.put('/email/:id', authJWT.verifyToken, userMethods.editEmail);
// Edit user's password
dbRouter.put('/password/:id', authJWT.verifyToken, userMethods.editPassword);
// Edit user's address street
dbRouter.put('/address/street/:id', authJWT.verifyToken, userMethods.editAddressStreetInfo);
dbRouter.put('/address/zip/:id', authJWT.verifyToken, userMethods.editAddressZipInfo);
dbRouter.put('/address/region/:id', authJWT.verifyToken, userMethods.editAddressRegionInfo);
dbRouter.put('/address/city/:id', authJWT.verifyToken, userMethods.editAddressCityInfo);
dbRouter.put('/address/country/:id', authJWT.verifyToken, userMethods.editAddressCountryInfo);
// Edit user's paymentInfo
dbRouter.put('/payment/bank_name/:id', authJWT.verifyToken, userMethods.editPaymentBankNameInfo);
dbRouter.put('/payment/account_number/:id', authJWT.verifyToken, userMethods.editPaymentAccountNumInfo);
dbRouter.put('/payment/secret_number/:id', authJWT.verifyToken, userMethods.editPaymentSecretNumInfo);

// delete user
dbRouter.delete('/me/:id', authJWT.verifyToken, userMethods.deleteUser);

export default dbRouter;
