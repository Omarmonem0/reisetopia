import { createSelector } from "@reduxjs/toolkit"
import { IPageState, ISearchPageHotel } from "../type"

export const hotelsSelector = createSelector(((state: { searchPage: IPageState<ISearchPageHotel[]> }) => state.searchPage.data), (hotels) => {
    return hotels.map((hotel) => {
        return {
            name: hotel.name,
            image: hotel.firstImage,
            address: hotel.address,
            distanceToCenter: hotel.distanceToCenterKm
        }
    })
})
export const pageStatusSelector = createSelector((state: { searchPage: IPageState<ISearchPageHotel[]> }) => state.searchPage.status, (status) => status)
export const languageSelector = createSelector((state: { searchPage: IPageState<ISearchPageHotel[]> }) => state.searchPage.language, (language) => language)
export const errorSelector = createSelector((state: { searchPage: IPageState<ISearchPageHotel[]> }) => state.searchPage.error, (error) => error)