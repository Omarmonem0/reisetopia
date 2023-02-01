export class HotelRepository {

    getAllHotels(language: string) {
        console.log("[Repo] -> getAllHotels")
    }

    getHotelBySearchTerm(language: string, searchTerm: string) {
        console.log("[Repo] -> getHotelBySearchTerm")
    }

    getHotelDetails(language: string, hotelId: number) {
        console.log("[Repo] -> getHotelDetails")
    }
}