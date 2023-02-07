import { Dispatch } from '@reduxjs/toolkit';
import { Language } from './type.d';
export const changeAppLanguage = (language: Language) => {
    return {
        type: "CHANGE_LANGUAGE",
        payload: language
    }
}

export const fetchHotels = () => {
    return async () => {
        const response = await fetch(('https://dummyjson.com/products'))
        const data = await response.json();
        console.log(data)
        return fetchHotelsSuccess(data)
    }
}

export const fetchHotelsSuccess = (payload: any) => {
    return {
        type: "FETCH_HOTELS_SUCCESS",
        payload
    }
}

export const fetchHotelsFail = (error: string) => {
    return {
        type: "FETCH_HOTELS_FAIL",
        payload: error
    }
}
