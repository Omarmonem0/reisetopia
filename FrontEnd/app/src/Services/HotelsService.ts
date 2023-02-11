import { Language } from "../Store/type";

const BASE_URL = 'http://localhost:8000/v1/recruiting/hotels/'

export const fetchHotels = async (language: Language, searchTerm: string) => {
    try {
        const response = await fetch(`${BASE_URL}?lang=${language}&search=${searchTerm}`)
        const hotels = await response.json()
        return hotels.result
    } catch (e) {
        throw e
    }
}

export const fetchHotelById = async (language: Language, hotelId: number) => {
    try {
        const response = await fetch(`${BASE_URL}${hotelId}?lang=${language}`)
        const hotel = await response.json()
        return hotel.result
    } catch (e) {
        throw e
    }
}