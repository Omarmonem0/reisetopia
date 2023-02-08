import { IAppState, ISearchPageHotel } from "./type"

export const selectAllHotels = (state: IAppState) => state.serachPageState.data.map((hotel: ISearchPageHotel) => {
    return {
        name: hotel.name,
        image: hotel.firstImage,
        address: hotel.address,
        distanceToCenter: hotel.distanceToCenterKm
    } 
})
export const selectSearchPageStatus = (state: IAppState) => state.serachPageState.status
export const selectDetailsPageHotel = (state: IAppState) => state.detailsPageState.data
export const selectDetailsPageStatus = (state: IAppState) => state.detailsPageState.status
export const selectAppLanguage = (state: IAppState) => state.language