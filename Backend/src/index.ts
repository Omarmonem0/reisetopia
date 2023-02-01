import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { HotelsController } from './Controller/HotelsController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const hotelsController = new HotelsController()

app.get('/', (req: Request, res: Response) => {
  res.json("Healthy!")
});

app.get('/v1/recruiting/hotels', hotelsController.index.bind(hotelsController))
app.get('/v1/recruiting/hotels/:hotelId', hotelsController.show.bind(hotelsController))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});