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
});

// module.exports = User = mongoose.model("users", userSchema);

module.exports = mongoose.model("users", userSchema);