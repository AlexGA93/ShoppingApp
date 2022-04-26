import express, { Application, Request, Response } from 'express';

// dotenv
require('dotenv').config();

//database
require('./database/database');

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

app.listen(port, (): void => {
  return console.log(`Express is listening at http://localhost:${port}`);
});