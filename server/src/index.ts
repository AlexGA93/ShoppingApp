import express, { Application, Request, Response } from 'express';

// dotenv
require('dotenv').config();

//database
require('./database/database');

// routes
const userRoutes = require('./routes/api/userRoutes');
const productRoutes = require('./routes/api/productRoutes');

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

// routes
app.use('/user', userRoutes);
app.use('/product', productRoutes);

app.listen(port, (): void => {
  return console.log(`Express is listening at http://localhost:${port}`);
});