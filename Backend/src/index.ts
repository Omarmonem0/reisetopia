import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { HotelsController } from './Controllers/HotelsController';
import { Database } from './Config/Database';
import { LocaleMiddleware } from './Middlewares/LocaleMiddleware';
import { RequestTypeMiddleware } from './Middlewares/RequestTypeMiddleware';
var cors = require('cors')


dotenv.config();
const app: Express = express();
app.use(cors())
const port = process.env.PORT;
Database.loadData()
const hotelsController = new HotelsController()

app.get('/healthCheck', (req: Request, res: Response) => {
  res.json("Healthy!")
});

app.get('/v1/recruiting/hotels', [RequestTypeMiddleware.extractRequestType,
  LocaleMiddleware.extractLocale],
  hotelsController.index.bind(hotelsController))

app.get('/v1/recruiting/hotels/:hotelId', LocaleMiddleware.extractLocale, hotelsController.show.bind(hotelsController))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});