import {
    createSlice,
    createAsyncThunk,
    createSelector,
} from '@reduxjs/toolkit'
import { IPageState, ISearchPageHotel, Language } from '../type'
import { fetchHotels } from '../../Services/HotelsService';


const initialState: IPageState<ISearchPageHotel[]> = {
    status: 'idle',
    data: [],
    error: "",
    language: 'en-US'
}

// Thunk functions
export const fetchHotelsThunk = createAsyncThunk('searchPage/fetchAllHotels', async (serachTerm: string, {getState}) => {
    const state: {searchPage: IPageState<ISearchPageHotel[]>} = getState() as {searchPage: IPageState<ISearchPageHotel[]>}
    return await fetchHotels(state.searchPage.language as Language, serachTerm)
})

// slice
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
            .addCase(fetchHotelsThunk.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchHotelsThunk.fulfilled, (state, action) => {
                state.status = 'idle'
                state.data = action.payload
            })
            .addCase(fetchHotelsThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message as string;
                
            })
    }
})

export const {
    changeAppLanguage
} = searchPageSlice.actions

export default searchPageSlice.reducer
