import mongoose from 'mongoose';

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
        required: true
    },

    rating: {
        rate: {
            type: Number,
            required: true
        },

        qty: {
            type: Number,
            required: true
        },

        count: {
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model("users", productSchema);