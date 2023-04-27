import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import config from '../config/default.json';
import routes from './routes';

const app: Express = express();

app.use(cors());

app.use('/api', routes);

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(config.port, () => {
  console.log(`Server is running at port: ${config.port}`);
});
