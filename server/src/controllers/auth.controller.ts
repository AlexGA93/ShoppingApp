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
import { apUserType, RoleType } from '../types/type';
import RoleModel from '../database/schema/Role';



/* Authentication */
export const signUp = async (req: Request, res: Response) => {

    let {
        username, 
        email, 
        password, 
        age, 
        roles
    } = req.body;

    let {
        street, 
        zip, 
        region, 
        city, 
        country
    } = req.body.address;

    let {
        bankName, 
        accountNumber, 
        secretNumber
    } = req.body.paymentInfo;

    try {
        // check if there is a user named as the entered one
        // let user = await UserModel.findOne({email});
        // console.log(user);
        
        if (await UserModel.findOne({email})) {
            res.status(400).json({ errors: [{ msg: "User already exists" }] });
        } 
        
        // hash password
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        
        // let userInfo:apUserType = {
        //     username: username,
        //     email: email,
        //     password: hashedPassword,
        //     age: age,
        //     address: {
        //         street: street,
        //         zip: zip,
        //         region: region,
        //         city: city,
        //         country: country
        //     },
        //     paymentInfo: {
        //         bankName: bankName,
        //         accountNumber: accountNumber,
        //         secretNumber: secretNumber 
        //     }
        // }

        const newUser = new UserModel<apUserType>({
            username,
            email,
            password: hashedPassword,
            age,
            address: {
                street,
                zip,
                region,
                city,
                country
            },
            paymentInfo: {
                bankName,
                accountNumber,
                secretNumber 
            }
        });

        // check for roles
        /*
        If user doesn't send any array called 'role' he/she will be stored with an role's id  as 'user'
        If the user is registered with an roles array (coud be moderator or admin or both of them) he/she will be stored with and mapped array with their ids
        */

        if(roles){

            // checking for roles n every roles that there are stored in the collection
            const foundedRoles = await RoleModel.find({name:{$in: roles}});

            // pushing role in user's role
            newUser.roles?.push(foundedRoles.map(role => role._id).toString());

            
        } else {
            // if user doesn't send any role, this app will stored him/her with the role 'user'
            const role = await RoleModel.findOne({name:"user"});
            
            let id: string = <string>(role?._id)?.toString();
            // save role's id in new user's array
            newUser.roles = [id];
        }

        const savedUser = await newUser.save();

        // sign jwt
        jwt.sign({id: savedUser._id}, config.SECRET ,{expiresIn: config.EXPIRATION_DATE}, (err, token) => {
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
        const {email, password}:{email: string, password: string} = req.body;
        
        let user: apUserType | null = await UserModel.findOne({email});
        // console.log(user);
        
        
        // // check if user exists
        if(!user) res.status(400).json({ errors: [{ msg: "User not registered" }] });
        
        // // compare passwords
        const isMatch: boolean = await bcrypt.compare(password, (user?.password as string)!);
        
        

        if (!isMatch) res.status(400).json({ errors: [{ msg: "Invalid Password" }] });
        
        // jwt
        jwt.sign({id: user?._id}, config.SECRET ,{expiresIn: config.EXPIRATION_DATE}, (err, token) => {
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
