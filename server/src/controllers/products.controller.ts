//  import express
import {Router, Request, Response} from 'express';
// bcryptjs
import bcrypt from 'bcryptjs';
// schema
import ProductModel from '../database/schema/Product';
import { apiProductType } from '../types/type';


export const getProducts = async(req: Request, res: Response) => await ProductModel
    .find({})
    .then( products => res.status(200).json(products))
    .catch( err => res.status(500).json({msg:err.message}));

export const getProductById = async(req: Request, res: Response) => {
    
    let id = req.params.id;
    console.log(id);
    

    await ProductModel
    .findById(id)
    .then( products => res.status(200).json(products))
    .catch( err => res.status(500).json({msg:err.message}));
    
};

export const getProductByCategory = async(req: Request, res: Response) => await ProductModel
    .find({category:req.params.category})
    .then( (filteredProducts: apiProductType[]) => res.status(200).json(filteredProducts))
    .catch( err => res.status(500).json({msg:err.message}));
    
    
