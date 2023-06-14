import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { root } from './root.router.js';

dotenv.config();


const app: Express = express();

app.get('/', async (req: Request, res: Response) => {
  // Handle the request
  res.send('Hello, World!');
});

app.use(root);

app.listen(3000, () => {
  console.log('server listening to 3000');

});