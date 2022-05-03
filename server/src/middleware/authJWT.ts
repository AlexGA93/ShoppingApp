/*
Middleware to check if token has been sent 
and check user's roles
*/
import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import UserModel from '../database/schema/User';
import { decodedType, RequestType } from '../types/type';



export const verifyToken = async (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
        const token: RequestType = req.headers;
        // check headers
        let secret = config.SECRET;
        
        //check if there's token
        if(!token) res.status(403).json({message:"No token provided"});
        
        // check if there's a valid token extracting token's info        
        let {id} = jwt.verify((token['x-access-token'] ?? ''), secret) as decodedType;
        
        // check if user exists by id
        const user = await UserModel.findById(id, {password:0});
        
        if(!user) return res.status(404).json({message:'user not found'})
        
        // pass to the next route
        next();
        
}