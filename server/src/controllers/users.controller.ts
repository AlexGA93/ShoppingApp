// crypto
import crypto from 'crypto';
// jwt
import jwt from 'jsonwebtoken';
//  import express
import {Router, Request, Response} from 'express';
// Defining Router
const dbRouter: Router = Router();
// bcryptjs
import bcrypt from 'bcryptjs';
// schema
import UserModel from '../database/schema/User';
// types
import { apiProductType, apUserType } from '../types/type';

                /* Authentication */
export const signUp = async (req: Request, res: Response) => {
    // res.json(req.body);
    try {
        // check if there is a user named as the entered one
        let user = await UserModel.findOne({ email: req.body.email });
        
        if (user) {
            res.status(400).json({ errors: [{ msg: "User already exists" }] });
        } 
        
        // hash password
        const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        
        let userInfo:apUserType = {
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
            },
            paymentInfo: {
                bankName: req.body.payment.bankName,
                accountNumber: req.body.payment.accountNumber,
                secretNumber: req.body.payment.secretNumber 
            }
        }
        user = new UserModel(userInfo);

        const savedUser = await user.save();

        // sign jwt
        const secretKey = crypto.randomBytes(39).toString('hex');
        jwt.sign({id: savedUser._id}, secretKey ,{expiresIn: 10}, (err, token) => {
            if (err) throw err;
            // return token
            res.status(200).send({token});
            return; // to prevent 'ERR_HTTP_HEADERS_SENT'
        });


    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Error during Registration process");
    }
};

export const signIn = async (req: Request, res: Response) => {

    try {
        const {email, password} = req.body;
        
        let user: apUserType | null = await UserModel.findOne({email});
        // check if user exists
        if(!user) res.status(400).json({ errors: [{ msg: "User not registered" }] });
        
        // compare passwords
        const isMatch = await bcrypt.compare(password, (user?.password as string));

        if (!isMatch) res.status(400).json({ errors: [{ msg: "Invalid Password" }] });
        
        // jwt
        const secretKey = crypto.randomBytes(39).toString('hex');
        jwt.sign({id: user?._id}, secretKey ,{expiresIn: 10}, (err, token) => {
            if (err) throw err;
            // return token
            res.status(200).send({token});
            return; // to prevent 'ERR_HTTP_HEADERS_SENT'
        });
    } catch (err: any) {
        console.error(err.message)
        res.status(500).send('Error during Login process')
    }
};

                /* Credentials Modification */
export const editUsername = async(req: Request, res: Response) => {
    try {
        const { id, username } = req.params;

        // check if user is in database
        let user = await UserModel.findById(id);
        
        if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

        console.log(username);
        
        const updatedUser = await UserModel.findByIdAndUpdate({_id:id},{username});

        res.status(200).send(updatedUser);

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(`Error updating user's username`);
    }
};


