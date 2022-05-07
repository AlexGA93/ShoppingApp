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
dbRouter.put('/username/:id', verifyToken, userMethods.editUsername);
// Edit user's email
dbRouter.put('/email/:id', userMethods.editEmail);
// Edit user's password
dbRouter.put('/password/:id', userMethods.editPassword);
// Edit user's address street
dbRouter.put('/address/street/:id', userMethods.editAddressStreetInfo);
dbRouter.put('/address/zip/:id', userMethods.editAddressZipInfo);
dbRouter.put('/address/region/:id', userMethods.editAddressRegionInfo);
dbRouter.put('/address/city/:id', userMethods.editAddressCityInfo);
dbRouter.put('/address/country/:id', userMethods.editAddressCountryInfo);
// Edit user's paymentInfo
dbRouter.put('/payment/bank_name/:id', userMethods.editPaymentBankNameInfo);
dbRouter.put('/payment/account_number/:id', userMethods.editPaymentAccountNumInfo);
dbRouter.put('/payment/secret_number/:id', userMethods.editPaymentSecretNumInfo);

export default dbRouter;
