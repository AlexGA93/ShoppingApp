import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    
    age: {
        type: String,
        required: true,
    },

    address: {
        street: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },
});

// module.exports = User = mongoose.model("users", userSchema);

module.exports = mongoose.model("users", userSchema);