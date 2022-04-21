import express, { Application, Request, Response } from 'express';

// dotenv
require('dotenv').config()

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

app.listen(port, (): void => {
  return console.log(`Express is listening at http://localhost:${port}`);
});