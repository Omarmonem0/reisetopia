import { DESTRUCTION } from 'dns';
import { language } from '../Constants/Constants';
import { Database } from './../Config/Database';
import { Hotel } from './../Models/Hotel';
export class HotelRepository {

    getAllHotels(): Hotel[] {
        console.log("[Repo] -> getAllHotels")
        try {
            return Database.hotels
        } catch (e) {
            throw e
        }
    }

    getHotelsBySearchTerm(searchTerm: string, language: language): Hotel[] {
        console.log("[Repo] -> getHotelsBySearchTerm")
        try {
            return Database.hotels.filter((hotel) => hotel.name[language]?.includes(searchTerm))
        } catch (e) {
            throw e
        }
        
    }

    getHotelDetails(hotelId: number): Hotel {
        console.log("[Repo] -> getHotelDetails")
        try {
            return Database.hotels.filter((hotel) => hotel.id === hotelId)[0]
        } catch (e) {
            throw e
        }
    }
}