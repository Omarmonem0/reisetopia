import { Language } from "../Store/type";

const BASE_URL = 'http://localhost:8000/v1/recruiting/hotels/'

export const fetchAllHotels = async (language: Language) => {
    try {
        console.log('here')
        const response = await fetch(`${BASE_URL}?lange=${language}`)
        const hotels = await response.json()
        console.log('heree')
        return hotels.result
    } catch (e) {
        throw e
    }
}

export const fetchHotelById = async (language: Language, hotelId: number) => {
    try {
        const response = await fetch(`${BASE_URL}${hotelId}?lang=${language}`)
        const hotel = await response.json()
        return hotel
    } catch (e) {
        throw e
    }
}

export const searchByHotelName = async (language: Language, searchTerm: string) => {
    try {
        const response = await fetch(`${BASE_URL}?lange=${language}&seachTerm=${searchTerm}`)
        const hotels = await response.json()
        return hotels
    } catch (e) {
        throw e
    }
}