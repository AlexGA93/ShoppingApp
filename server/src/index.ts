import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

import config from './config';

//database
require('./database/database');

// roles
import {createRoles} from './libs/initialSetup';

// routes
import databaseRoute from './routes/dbRoutes';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

const app: Application = express();

// roles creation
createRoles();

const port = config.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to Vikingz Store Server!');
});

// routes
app.use('/api/admin', databaseRoute);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(port, (): void => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
