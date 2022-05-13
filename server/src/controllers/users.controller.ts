
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
    let street = req.body[flagKey]; // value
    let id = req.params.id;

    

    let user = await UserModel.findById(id);
    console.log(user);
    
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'address.street':street}})
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
    let zip = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'address.zip': zip}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
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

    await UserModel.updateOne({_id:id}, {$set:{'address.region': keyValue}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editAddressCityInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let city = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'address.city': city}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editAddressCountryInfo= async(req: Request, res: Response) => {
    
    
    let flagKey = Object.keys(req.body)[0]; // key
    let country = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'address.country': country}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};


export const editPaymentBankNameInfo= async(req: Request, res: Response) => {
    
    let flagKey = Object.keys(req.body)[0]; // key
    let bankName = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'paymentInfo.bankName': bankName}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editPaymentAccountNumInfo= async(req: Request, res: Response) => {
    let flagKey = Object.keys(req.body)[0]; // key
    let numInfo = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'paymentInfo.accountNumber': numInfo}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
    }
    ).catch(err => {
        console.error(err.message);
    res.status(500).send(`Error updating user's information`);
    });
};
export const editPaymentSecretNumInfo= async(req: Request, res: Response) => {
    let flagKey = Object.keys(req.body)[0]; // key
    let secretNum = req.body[flagKey]; // value
    let id = req.params.id;

    let user = await UserModel.findById(id);
    
    if (!user) res.status(400).json({errors:[{msg:`User don't found`}]});

    await UserModel.updateOne({_id:id}, {$set:{'paymentInfo.secretNumber': secretNum}})
    .then(()=>{
        res.status(200).send('User address street successfully edited!');
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
