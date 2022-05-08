/*
Middleware to check if token has been sent 
and check user's roles
*/
import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

import UserModel from '../database/schema/User';
import RoleModel from '../database/schema/Role';

import { decodedType, RequestType, RoleType } from '../types/type';




export const verifyToken = async (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
       try {
        const token: RequestType = req.headers;
        // check headers
        let secret = config.SECRET;
        
        //check if there's token
        if(!token) res.status(403).json({message:"No token provided"});
        
        // check if there's a valid token extracting token's info        
        const decoded = jwt.verify((token['x-access-token'] ?? ''), secret) as decodedType;        

        // check if user exists by id
        const user = await UserModel.findById(decoded.id, {password:0});
        // console.log(user);
        
        
        if(!user) return res.status(404).json({message:'user not found'})
        
        // pass to the next route
        next();
       } catch (error) {
           return res.status(401).json({message:"Unauthorized"});
       }
        
};


// Methods to check if user is moderator or admin

export const isAdmin = async (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
        let id = req.params.id;
        
        // fing user by id
        const user = await UserModel.findById({_id:id});
        
        // check roles
        const roles: RoleType[] = await RoleModel.find({_id:{$in: user?.roles}});
        console.log(roles);

        // role validation
        for(let i=0; i<roles.length ;i++){
            if(roles[i].name === 'admin'){
            //     console.log(roles[i].name);
                next();
                return;
            }
        }

        return res.status(403).json({message: "Requer Admin role"});
    };

export const isSeller = async (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
        let id = req.params.id;
        
        // fing user by id
        const user = await UserModel.findById({_id:id});
        
        // check roles
        const roles: RoleType[] = await RoleModel.find({_id:{$in: user?.roles}});
        console.log(roles);

        // role validation
        for(let i=0; i<roles.length ;i++){
            if(roles[i].name === 'seller'){
            //     console.log(roles[i].name);
                next();
                return;
            }
        }

        return res.status(403).json({message: "Requer Seller role"});
    };