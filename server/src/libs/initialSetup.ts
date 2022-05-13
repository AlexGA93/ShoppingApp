/**
 Functions that will create roles at the moment our API is running
 */
import RoleModel from '../database/schema/Role';

 export const createRoles = async () =>{
    try {
        // check for documents in the roles collection
        const count = await RoleModel.estimatedDocumentCount();

        // check if there is not any role created
        if (count>0) return;

        // create a new role
        const values = await Promise.all([
            new RoleModel({name: 'user'}).save(),
            new RoleModel({name: 'seller'}).save(),
            new RoleModel({name: 'admin'}).save(),
        ]);

        console.log(values);
        
    } catch (error) {
        console.error(error);
    }


 };

