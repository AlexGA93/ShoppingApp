//  import express
import {Router, Request, Response} from 'express';
// bcryptjs
import bcrypt from 'bcryptjs';
// schema
import ProductModel from '../database/schema/Product';


export const getProducts = async(req: Request, res: Response) => {
    let all = await ProductModel.find({});

    return res.status(200).json(all);
    
};
