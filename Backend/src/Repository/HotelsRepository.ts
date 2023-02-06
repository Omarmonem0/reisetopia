import { DESTRUCTION } from 'dns';
import { language } from '../Constants/Constants';
import { Database } from './../Config/Database';
import { Hotel } from './../Models/Hotel';
export class HotelRepository {

    getAllHotels(): Hotel[] {
        console.log("[Repo] -> getAllHotels")
        return Database.hotels
    }

    getHotelsBySearchTerm(searchTerm: string, language: language): Hotel[] {
        console.log("[Repo] -> getHotelBySearchTerm")
        return Database.hotels.filter((hotel) => hotel.name[language]?.includes(searchTerm))
        
    }

    getHotelDetails(hotelId: number): Hotel {
        console.log("[Repo] -> getHotelDetails")
        return Database.hotels.filter((hotel) => hotel.id === hotelId)[0]
    }
}