import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { IPageState, ISearchPageHotel, Language } from '../type'
import { fetchHotelById } from '../../Services/HotelsService';
import { IDetailsPageHotel } from '../type';


const initialState: IPageState<IDetailsPageHotel> = {
    status: 'idle',
    data: {} as IDetailsPageHotel,
    error: "",
}

// Thunk functions
export const fetchHotelByIdThunk = createAsyncThunk('detailsPage/fetchHotelById', async (hotelId: number, {getState}) => {
    const state: {searchPage: IPageState<ISearchPageHotel[]>} = getState() as {searchPage: IPageState<ISearchPageHotel[]>}
    return await fetchHotelById(state.searchPage.language as Language, hotelId)
})

// slice
const detailsPageSlice = createSlice({
    name: 'detailsPage',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchHotelByIdThunk.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchHotelByIdThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchHotelByIdThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message as string;  
            })
    }
})

export default detailsPageSlice.reducer