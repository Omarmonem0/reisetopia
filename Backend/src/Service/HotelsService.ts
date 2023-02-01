import { HotelsMapper } from "../Mappers/HotelsMapper";
import { HotelRepository } from "../Repository/HotelsRepository";

export class HotelsService {
    private mapper: HotelsMapper
    private repository: HotelRepository

    constructor() {
        this.mapper = new HotelsMapper()
        this.repository = new HotelRepository()
    }

    getAllHotels(language: string) {
        console.log("[Service] -> getAllHotels")
        this.repository.getAllHotels("en")
        this.mapper.repoToModel()
    }

    getHotelBySearchTerm(language: string, searchTerm: string) {
        console.log("[Service] -> getHotelBySearchTerm")
        this.repository.getHotelBySearchTerm("en","search-term")
        this.mapper.repoToModel()
    }

    getHotelDetails(language: string, hotelId: number) {
        console.log("[Service] -> getHotelDetails")
        this.repository.getHotelDetails("en", 123)
        this.mapper.repoToModel()
    }
}