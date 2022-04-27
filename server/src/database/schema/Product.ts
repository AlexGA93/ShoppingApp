
import mongoose,{model, Schema} from 'mongoose';

//types
// import { apiProductType } from '../../types/type';

const productSchema: Schema =  new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    description: {
        type: String,
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    favorite: {
        type: Boolean,
        // required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],

    rating: {
        rate: {
            type: Number,
            required: true
        },

        qty: {
            type: Number,
            // required: true
        },

        count: {
            type: Number,
            required: true
        }
    }
},
{
    timestamps: true,
    versionKey: false
}
);

// export default productSchema;
// const ProductModel = model<apiProductType>("Product", productSchema) ;
// export default ProductModel;
module.exports = mongoose.model('products', productSchema)