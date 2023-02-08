export interface IBaseHotel {
  id: number,
  minPrice: number,
  currencyCode: string,
  countryCode: string,
  name: string,
  address: string,
  city: string,
  description: string,
  distanceToCenterKm: number,
}

export interface ISearchPageHotel extends IBaseHotel {
  firstImage: Image,
  firstDeal: Deal
}

export interface IDetailsPageHotel extends IBaseHotel {
  deals: Deal[],
  images: Image[]
}

interface Image {
  caption: string,
  url: string
}

interface Deal {
  headline: string,
  details: string
}

export interface IPageState<T> {
  data: T,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
  language?: Language
}

export type Language = "de-DE" | "en-US" | "fr-FR" | "es-ES"

export interface IAppState {
  serachPageState: IPageState<ISearchPageHotel[]>,
  detailsPageState: IPageState<IDetailsPageHotel>,
  language: Language
}

export type Payload = Language | number | string | ISearchPageHotel[] | IDetailsPageHotel | null

export interface IAction {
  type: string,
  payload: Payload
}