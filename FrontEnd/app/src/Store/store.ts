import { configureStore } from '@reduxjs/toolkit';
import searchPagereducer from './searchPage/searchPageSlice';

const store = configureStore({reducer: {
    searchPage: searchPagereducer
}})

export default store
export type AppDisptach = typeof store.dispatch