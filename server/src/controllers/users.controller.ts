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
        jwt.sign({id: savedUser._id}, config.SECRET ,{expiresIn: 3600}, (err, token) => {
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
        jwt.sign({id: user?._id}, config.SECRET ,{expiresIn: 3600}, (err, token) => {
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
export const editUsername= async(req: Request, res: Response) => {

    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel
    .findByIdAndUpdate(id,{username:keyValue})
    .then(user => {
        res.status(200).send('User credentials has been updated');
    })
    .catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editEmail= async(req: Request, res: Response) => {

    let flagKey = Object.entries(req.body)[0][0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel
    .findByIdAndUpdate(id,{email:keyValue})
    .then(user => {
        res.status(200).send('User credentials has been updated');
    })
    .catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editPassword= async(req: Request, res: Response) => {

    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    // hash password
    const hashedPassword = bcrypt.hashSync(keyValue, bcrypt.genSaltSync(10));

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel
    .findByIdAndUpdate(id,{password:hashedPassword})
    .then(user => {
        res.status(200).send('User credentials has been updated');
    })
    .catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};


export const editAddressStreetInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'address.street': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editAddressZipInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'address.zip': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editAddressRegionInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'address.region': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editAddressCityInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'address.city': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editAddressCountryInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'address.country': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};


export const editPaymentBankNameInfo= async(req: Request, res: Response) => {
    
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'paymentInfo.bankName': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editPaymentAccountNumInfo= async(req: Request, res: Response) => {
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'paymentInfo.accountNumber': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editPaymentSecretNumInfo= async(req: Request, res: Response) => {
    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({id}, {$set:{'paymentInfo.secretNumber': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};

