import { createSelector } from "@reduxjs/toolkit"
import { IPageState, ISearchPageHotel } from "../type"
import { IDetailsPageHotel } from '../type';

export const hotelSelector = createSelector(((state: { detailsPage: IPageState<IDetailsPageHotel> }) => state.detailsPage.data), (hotel) => hotel)
export const pageStatusSelector = createSelector((state: { detailsPage: IPageState<IDetailsPageHotel> }) => state.detailsPage.status, (status) => status)
export const errorSelector = createSelector((state: { detailsPage: IPageState<IDetailsPageHotel> }) => state.detailsPage.error, (error) => error)