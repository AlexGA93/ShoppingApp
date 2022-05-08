
// crypto
// import crypto from 'crypto';
import { Config } from './types/type';
// dotenv
require('dotenv').config();

let configuration: Config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT:process.env.PORT,
    SECRET:'VIKINGZ-Shop',
    EXPIRATION_DATE:3600
};
    // SECRET:crypto.randomBytes(9).toString('base64')
// };

export default configuration;