import mongoose,{model} from 'mongoose';
import { apUserType } from '../../types/type';
import Schema from 'mongoose';

const userSchema =  new mongoose.Schema({
    username: {
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
        type: Number,
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
    paymentInfo: {
        bankName: {
            type: String
        },
        accountNumber: {
            type: String
        },
        secretNumber: {
            type: Number
        }
    },
    roles: [{
        ref: "role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

const UserModel = model<apUserType>("user", userSchema);
export default UserModel;