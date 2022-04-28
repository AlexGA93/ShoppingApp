
import mongoose,{model, Schema} from 'mongoose';

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

// export default productSchema;
// const ProductModel = model<apiProductType>("Product", productSchema) ;
// export default ProductModel;
module.exports = mongoose.model('Role', roleSchema)