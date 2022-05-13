import mongoose,{model} from 'mongoose';
import { apiProductType } from '../../types/type';
// import Schema from 'mongoose';

const productSchema =  new mongoose.Schema({
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

const ProductModel = model<apiProductType>("product", productSchema);
export default ProductModel;