import mongoose,{model} from 'mongoose';

//types
import { apiProductType } from '../../types/types';

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
});

// export default productSchema;
const ProductModel = model<apiProductType>("Product", productSchema);
export default ProductModel;