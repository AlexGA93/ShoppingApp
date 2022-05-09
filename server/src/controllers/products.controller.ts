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

export const getProductById = async(req: Request, res: Response) => await ProductModel
    .findById(req.params.id)
    .then( products => res.status(200).json(products))
    .catch( err => res.status(500).json({msg:err.message}));

export const getProductByCategory = async(req: Request, res: Response) => await ProductModel
    .find({category:req.params.category})
    .then( (filteredProducts: apiProductType[]) => res.status(200).json(filteredProducts))
    .catch( err => res.status(500).json({msg:err.message}));
    
export const getProductByRating = async(req: Request, res: Response) => await ProductModel
    .find({"rating.rate": parseFloat(req.params.rating)})
    .then( (filteredProducts: apiProductType[]) => res.status(200).json(filteredProducts))
    .catch( err => res.status(500).json({msg:err.message}));

export const getFavoritesProducts = async(req: Request, res: Response) => await ProductModel
    .find({favorite: true})
    .then( (filteredProducts: apiProductType[]) => {
        (filteredProducts.length !== 0) ? res.status(200).json(filteredProducts) : res.status(200).json({msg:'No favorite items in database'})
    })
    .catch( err => res.status(500).json({msg:err.message}));

export const addNewProduct = async(req: Request, res: Response) => {
    const {
        title,
        price,
        description,
        category,
        image,
        favorite
    } = req.body;

    const {
        rate,
        qty,
        count
    } = req.body.rating;

    try {
;
        if (await ProductModel.findOne({title})) res.status(400).json({ errors: [{ msg: "Product already exists" }] });
        
        const newProduct = new ProductModel<apiProductType>({
            title,
            price,
            description,
            category,
            image,
            favorite,
            rating: {
                rate,
                qty ,
                count
            }
        });

        await newProduct
        .save()
        .then( ()=> res.status(200).json({msg:"Added new poduct"}) )
        .catch( (err: any)=>res.status(500).json({msg:err.message}) );

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Error during product addition process");
    }
};

export const changeFavoriteProduct = async(req: Request, res: Response) => {
    // product id
    let id = req.params.id;

    // find product
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({id}, {$set:{'favorite': !foundedProduct?.favorite}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
};

