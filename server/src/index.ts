import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

import config from './config';

//database
require('./database/database');

// routes
import databaseRoute from './routes/dbRoutes';
import userRoutes from './routes/userRoutes';
// const productRoutes = require('./routes/api/productRoutes');

const app: Application = express();
const port = config.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

// routes
app.use('/api/admin', databaseRoute);
app.use('/api/users', userRoutes);
// app.use('/products', productRoutes);

app.listen(port, (): void => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
