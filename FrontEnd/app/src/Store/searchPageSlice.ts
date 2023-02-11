import {
    createSlice,
    createAsyncThunk,
    createSelector,
} from '@reduxjs/toolkit'
import { IPageState, ISearchPageHotel } from './type'
import { fetchAllHotels } from './../Services/HotelsService';


const initialState: IPageState<ISearchPageHotel[]> = {
    status: 'idle',
    data: [],
    error: "",
    language: 'en-US'
}

// Thunk functions
export const fetchHotels = createAsyncThunk('searchPage/fetchAllHotels', fetchAllHotels)

const searchPageSlice = createSlice({
    name: 'searchPage',
    initialState,
    reducers: {
        changeAppLanguage(state, action) {
            state.language = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchHotels.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.status = 'idle'
                state.data = action.payload
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message as string;
                
            })
    }
})

export const {
    changeAppLanguage
} = searchPageSlice.actions

export default searchPageSlice.reducer

// selectors
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
