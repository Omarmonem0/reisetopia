import { BaseHotelsResponse } from "./BaseHotelsResponse";
import { Deal } from "./Deal";
import { Image } from './Image';

export interface HotelDetailsResponse extends BaseHotelsResponse {
    deals: Deal[],
    images: Image[]
}