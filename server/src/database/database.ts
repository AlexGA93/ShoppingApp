const mongoose = require('mongoose');

// dotenv
require('dotenv').config();

const db = process.env.MONGO_URI;

mongoose.connect(
    db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then( () => console.log(`Connected to Vikingz's Mongo cluster`))
.catch( (err:string) => console.log(err))