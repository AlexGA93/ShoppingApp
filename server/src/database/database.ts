// mongoose
const mongoose = require('mongoose');

// config
import config from '../config';

// dotenv
require('dotenv').config();

const db = config.MONGO_URI;

mongoose.connect(
    db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then( () => console.log(`Connected to Vikingz's Mongo cluster`))
.catch( (err:string) => console.log(err))