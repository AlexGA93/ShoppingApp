// jwt
import jwt from 'jsonwebtoken';
// secret
import config from '../config';
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
    try {
        // check if there is a user named as the entered one
        let user = await UserModel.findOne({ email: req.body.email });
        // console.log(user);
        
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
                bankName: req.body.paymentInfo.bankName,
                accountNumber: req.body.paymentInfo.accountNumber,
                secretNumber: req.body.paymentInfo.secretNumber 
            }
        }

        user = new UserModel(userInfo);

        const savedUser = await user.save();

        // sign jwt
        jwt.sign({id: savedUser._id}, config.SECRET ,{expiresIn: 10}, (err, token) => {
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
        jwt.sign({id: user?._id}, config.SECRET ,{expiresIn: 100}, (err, token) => {
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
export const editBasicInfo= async(req: Request, res: Response) => {

    // let flagKey = Object.entries(req.body)[0][0]; // username
    // let keyValue = Object.keys(req.body)[0][0]; // name

    // console.log(flagKey+'  '+keyValue);
    
    let userName = req.body.username;
    // console.log(userName);
    
    let id = req.params.id;

    try {
        let user = await UserModel.findById(id)
        // console.log(user);
        
        if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

        await UserModel.findByIdAndUpdate({_id:id},{username:userName});

        res.status(200).send("Updated username");

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(`Error updating user's username`);
    }
};

export const editAddressInfo= async(req: Request, res: Response) => {
    
    console.log(req.params.id); // id
    console.log(Object.entries(req.body)[0][0]); 

    let flag = Object.entries(req.body)[0][0]; // data to change
    let id = req.params.id;

    try {
        let user = await UserModel.findById(id);
        if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

        await UserModel.findByIdAndUpdate({_id:id},{address:{flag}});

        res.status(200).send("Updated address");

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(`Error updating user's username`);
    }
};

export const editPaymentInfo= async(req: Request, res: Response) => {
    
    console.log(req.params.id); // id
    console.log(Object.entries(req.body)[0][0]); 

    let flag = Object.entries(req.body)[0][0]; // data to change
    let id = req.params.id;

    try {
        let user = await UserModel.findById(id);
        if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

        await UserModel.findByIdAndUpdate({_id:id},{paymentInfo:{flag}});

        res.status(200).send("Updated payment");

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send(`Error updating user's username`);
    }
};


