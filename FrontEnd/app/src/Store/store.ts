import { configureStore } from '@reduxjs/toolkit';
import searchPageReducer from './searchPage/searchPageSlice';
import detailsPageReducer from './detailsPage/detailsPageSlice'

const store = configureStore({reducer: {
    searchPage: searchPageReducer,
    detailsPage: detailsPageReducer
}})

export default store
export type AppDisptach = typeof store.dispatch