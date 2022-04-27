import axios from 'axios';
//  import express
import {Router, Request, Response} from 'express';
// Defining Router
const dbRouter: Router = Router();
// bcryptjs
import bcrypt from 'bcryptjs';
// schema
const User = require('../database/schema/User');
// types
import { apiProductType, apUserType } from '../types/type';

export const signUp = async (req: Request, res: Response) => {
    // res.json(req.body);
    try {
        // check if there is a user named as the entered one
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            res.status(400).json({ errors: [{ msg: "User already exists" }] });
        } 
        
        // hash password
        const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        
        const userInfo:apUserType = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            age: req.body.age,
            address: {
                street: req.body.address.street,
                zip: req.body.address.zip,
                region: req.body.address.region,
                city: req.body.address.city,
                country: req.body.address.country
            }
        }
        user = new User(userInfo);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

export const signIn = (req: Request, res: Response) => {
    res.send('signIn');
};


