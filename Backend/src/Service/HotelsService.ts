import { HotelsMapper } from "../Mappers/HotelsMapper";
import { HotelRepository } from "../Repository/HotelsRepository";
import { HotelSearchResponse } from './../Models/HotelSearchResponse';
import { HotelDetailsResponse } from './../Models/HotelDetailsResponse';
import { language } from "../Constants/Constants";
import { Hotel } from "../Models/Hotel";

export class HotelsService {
    private mapper: HotelsMapper
    private repository: HotelRepository

    constructor() {
        this.mapper = new HotelsMapper()
        this.repository = new HotelRepository()
    }

    getAllHotels(language: language) : HotelSearchResponse[] {
        console.log("[Service] -> getAllHotels")
        const hotels: Hotel[] = this.repository.getAllHotels()
        return this.mapper.mapToSearchModel(hotels, language)
    }

    getHotelsBySearchTerm(language: language, searchTerm: string) : HotelSearchResponse[] {
        console.log("[Service] -> getHotelBySearchTerm")
        const hotels: Hotel[] = this.repository.getHotelsBySearchTerm( searchTerm, language)
        return this.mapper.mapToSearchModel(hotels, language)
    }

    getHotelDetails(language: language, hotelId: number) : HotelDetailsResponse  {
        console.log("[Service] -> getHotelDetails")
        const hotel: Hotel = this.repository.getHotelDetails(hotelId)
        return this.mapper.mapToDeatilsModel(hotel, language)
    }
}