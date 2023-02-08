import { fetchAllHotels , fetchHotelById, searchByHotelName } from '../Services/HotelsService';
import { IAction, IAppState, Language, Payload } from './type.d';
import { Dispatch } from '@reduxjs/toolkit';

// sync actions
export const changeAppLanguage = (language: Language) => {
    return {
        type: "CHANGE_LANGUAGE",
        payload: language
    }
}

const createPageStatusAction = (type: string, payload: Payload) : IAction => {
    return {
        type,
        payload
    }
}


// async actions
export const fetchHotels = () => {
    return async (dispatch: Dispatch, state: IAppState) => {
        try {
            dispatch(createPageStatusAction("FETCH_HOTELS_LOADING", null))
            const hotels = await fetchAllHotels(state.language)
            dispatch(createPageStatusAction("FETCH_HOTELS_SUCCESS", hotels))
        } catch (e) {
            dispatch(createPageStatusAction("FETCH_HOTELS_FAIL", e as string))
        }  
    }
}

export const fetchHotelDetails = (hotelId: number) => {
    return async (dispatch: Dispatch, state: IAppState) => {
        try {
            dispatch(createPageStatusAction("FETCH_HOTEL_DETAILS_LOADING", null))
            const hotel = await fetchHotelById(state.language, hotelId)
            dispatch(createPageStatusAction("FETCH_HOTEL_DETAILS_SUCCESS", hotel))
        } catch (e) {
            dispatch(createPageStatusAction("FETCH_HOTEL_DETAILS_FAIL", e as string))
        } 
    }
}



