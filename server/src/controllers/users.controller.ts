
//  import express
import {Router, Request, Response} from 'express';
// bcryptjs
import bcrypt from 'bcryptjs';
// schema
import UserModel from '../database/schema/User';

                /* Obtain User */
export const getUser = async(req: Request, res: Response) => await UserModel
    .findById({_id:req.params.id})
    .then( user => res.status(200).json(user))
    .catch( err => res.status(500).json({msg:err.message}));


                /* Credentials Modification */
export const editUsername= async(req: Request, res: Response) => {

    let flagKey = Object.keys(req.body)[0]; // key
    let keyValue = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel
    .findByIdAndUpdate(id,{username:keyValue})
    .then(() => {
        res.status(200).send('User credentials has been updated');
    })
    .catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editEmail= async(req: Request, res: Response) => {

    let flagKey = Object.keys(req.body)[0]; // key
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

    await UserModel.updateOne({id}, {'$set':{'address.street': keyValue}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
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

    await UserModel.updateOne({id}, {'$set':{'address.zip': keyValue}})
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

    await UserModel.updateOne({id}, {'$set':{'address.region': keyValue}})
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

    await UserModel.updateOne({id}, {'$set':{'address.city': keyValue}})
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

    await UserModel.updateOne({id}, {'$set':{'address.country': keyValue}})
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

    await UserModel.updateOne({id}, {'$set':{'paymentInfo.bankName': keyValue}})
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

    await UserModel.updateOne({id}, {'$set':{'paymentInfo.accountNumber': keyValue}})
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

    await UserModel.updateOne({id}, {'$set':{'paymentInfo.secretNumber': keyValue}})
    .then(()=>{
        res.status(200).send('ya');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};

                /* Delete User */
export const deleteUser = async(req: Request, res: Response) => await UserModel
    .deleteOne({_id:req.params.id})
    .then( () => res.status(200).json({msg: "User deleted"}) )
    .catch( err => {
        console.log('err');
        return res.status(500).send({msg: "Error has ocurred during user delete process"}) 
    });