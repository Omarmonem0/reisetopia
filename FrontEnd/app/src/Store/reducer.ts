import { IAppState, IDetailsPageHotel, ISearchPageHotel, Language } from "./type";
import { IAction } from './type.d';

const initialState: IAppState = {
    serachPageState: {
        data: [],
        status: "idle",
        error: null
    },
    detailsPageState: {
        data: {} as IDetailsPageHotel,
        status: "idle",
        error: null
    },
    language: "en-US"
}

const reducer = (state = initialState, action: IAction): IAppState => {

    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return { ...state, language: action.payload as Language }
        case "FETCH_HOTELS_LOADING":
            return { ...state, serachPageState: { ...state.serachPageState, status: "loading" } }
        case "FETCH_HOTELS_SUCCESS":
            return { ...state, serachPageState: { ...state.serachPageState, data: action.payload as ISearchPageHotel[], status: "succeeded" } }
        case "FETCH_HOTELS_FAIL":
            return { ...state, serachPageState: { ...state.serachPageState, status: "failed", error: action.payload as string } }
        case "FETCH_HOTEL_DETAILS_LOADING":
            return { ...state, detailsPageState: { ...state.detailsPageState, status: "loading" } }
        case "FETCH_HOTEL_DETAILS_SUCCESS":
            return { ...state, detailsPageState: { ...state.detailsPageState, data: action.payload as IDetailsPageHotel, status: "succeeded" } }
        case "FETCH_HOTEL_DETAILS_FAIL":
            return { ...state, detailsPageState: { ...state.detailsPageState, status: "failed", error: action.payload as string } }
        default:
            return state
    }
}

export default reducer