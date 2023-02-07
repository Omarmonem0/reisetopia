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
        case "FETCH_HOTELS":
            return { ...state, serachPageState: { ...state.serachPageState, status: "loading" } }
        case "FETCH_HOTELS_SUCCESS":
            return { ...state, serachPageState: { ...state.serachPageState, data: action.payload as ISearchPageHotel[], status: "succeeded" } }
        case "FETCH_HOTELS_FAIL":
            return { ...state, serachPageState: { ...state.serachPageState, status: "failed", error: action.payload as string } }
        default:
            return state
    }
}

export default reducer