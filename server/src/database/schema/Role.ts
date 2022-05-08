
import mongoose,{model, Schema} from 'mongoose';
import { apiProductType } from '../../types/type';

//types
// import { apiProductType } from '../../types/type';

const roleSchema: Schema =  new mongoose.Schema(
    {
        name: {
            type: String
        },
    },
    {
        versionKey: false
    }
);

const RoleModel = model<apiProductType>("role", roleSchema);
export default RoleModel;