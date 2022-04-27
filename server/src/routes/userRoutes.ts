//  import express
import {Router} from 'express';
// Defining Router
const dbRouter: Router = Router();


// //bcrypt
// import bcrypt from 'bcryptjs';
// // jwt
// import jwt from 'jsonwebtoken';
// // config
// const config = require('config');

// // express validator
// const {body, validationResult} = require('express-validator');

// // User model
// import User from '../database/schema/User';



import * as userMethods from '../controllers/users.controller';

// Add a new user
dbRouter.post('/signup', userMethods.signUp);
dbRouter.post('/signin', userMethods.signIn);

export default dbRouter;
