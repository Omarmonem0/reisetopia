import { BaseHotelsResponse } from './BaseHotelsResponse';
import { Deal } from './Deal';
import { Image } from './Image';
export interface HotelSearchResponse extends BaseHotelsResponse {
    firstDeal: Deal,
    firstImage: Image
}