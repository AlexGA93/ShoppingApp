//  import express
import {Router, Request, Response} from 'express';
// bcryptjs
import bcrypt from 'bcryptjs';
// schema
import ProductModel from '../database/schema/Product';
import { apiProductType, errorType } from '../types/type';


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
        .catch( err =>res.status(500).json({msg:err.message}) );
        
    } catch (err) {
        let e = <Error>err;
        console.error(e.message);
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
    .updateOne({_id:id}, {$set:{'favorite': !foundedProduct?.favorite}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
};

export const changeProductTitle = async(req: Request, res: Response) => {
    let id = req.params.id;
    let newTitle = req.body.title;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'title': newTitle}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductPrice = async(req: Request, res: Response) => {
    let id = req.params.id;
    let price = req.body.price;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'price': price}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductDesc = async(req: Request, res: Response) => {
    let id = req.params.id;
    let desc = req.body.desc;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'description': desc}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductCat = async(req: Request, res: Response) => {
    let id = req.params.id;
    let category = req.body.category;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'category': category}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductImg = async(req: Request, res: Response) => {
    let id = req.params.id;
    let img = req.body.img;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'image': img}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductRate = async(req: Request, res: Response) => {
    let id = req.params.id;
    let rate = req.body.rate;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'rating.rate':rate}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductQty = async(req: Request, res: Response) => {
    let id = req.params.id;
    let qty = req.body.qty;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'rating.qty':qty}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const changeProductCount = async(req: Request, res: Response) => {
    let id = req.params.id;
    let count = req.body.count;
    
    let foundedProduct = await ProductModel.findById(id);

    if(!foundedProduct) res.status(400).json({errors:[{msg:`Product don't found`}]});

    await ProductModel
    .updateOne({_id:id}, {$set:{'rating.count':count}})
    .then( () => res.status(200).json({msg:'Product edited succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) )
    
};

export const deleteProduct = async(req: Request, res: Response) => await ProductModel
    .deleteOne({_id:req.params.id})
    .then( () => res.status(200).json({msg:'Product deleted succesfully'}) )
    .catch( err => res.status(500).json({msg:err.message}) );
