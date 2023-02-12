import { Deal } from './Deal';
import { Localization } from './Localization';
import { Benefit } from './Benefit';
import { Image } from './Image';
export interface Hotel {
    id: number,
    minPrice: number,
    currencyCode: string,
    countryCode: string,
    name: Localization,
    address: Localization,
    city: Localization,
    description: Localization,
    deals: Deal[],
    benefits: Benefit[],
    images: Image[],
    lat: number,
    lng: number
}