import rawHotels  from '../hotels.json';
import { Hotel } from './../Models/Hotel';


export class Database {
    public static hotels: Hotel[];
   
    public static loadData() {
        console.log("[Database] -> loadData")
        Database.hotels = rawHotels as any
    }

    
}