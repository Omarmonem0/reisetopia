import { language } from "../Constants/Constants";
import { Hotel } from "../Models/Hotel";
import { Localization } from './../Models/Localization';
import { BaseHotelsResponse } from './../Models/BaseHotelsResponse';
import { HotelSearchResponse } from "../Models/HotelSearchResponse";
import { HotelDetailsResponse } from "../Models/HotelDetailsResponse";
import { Deal } from "../Models/Deal";
import { Image } from './../Models/Image';

export class HotelsMapper {
    private languagesPriority: language[];

    constructor() {
        this.languagesPriority = ["en-US", "de-DE", "fr-FR", "es-ES"]
    }

    mapToBaseModel(hotels: Hotel[], language: language): BaseHotelsResponse[] {
        try {
            const localizedHotels: BaseHotelsResponse[] = hotels.map(hotel => {
                return {
                    id: hotel.id,
                    minPrice: hotel.minPrice,
                    currencyCode: hotel.currencyCode,
                    countryCode: hotel.countryCode,
                    name: this.translate(hotel.name, language),
                    address: this.translate(hotel.address, language),
                    city: this.translate(hotel.city, language),
                    description: this.translate(hotel.description, language),
                    distanceToCenterKm: this.calculateDistanceToCenter(hotel.lat, hotel.long)
                }
            })
            return localizedHotels;
        } catch (e) {
            throw e
        }
    }

    mapToDeatilsModel(hotel: Hotel, language: language): HotelDetailsResponse {
        try {
            console.log(language)
            const translatedHotel: BaseHotelsResponse = this.mapToBaseModel([hotel], language)?.[0]
            const detailsResponseHotel: HotelDetailsResponse = {
                ...translatedHotel,
                deals: hotel.deals.map(deal => {
                    return {
                        headline: this.translate(deal.headline as Localization, language),
                        details: this.translate(deal.details as Localization, language)
                    }
                }),
                images: hotel.images.map(image => {
                    return {
                        ...image,
                        caption: this.translate(image.caption as Localization, language)
                    }
                }),
            }
            return detailsResponseHotel
        } catch (e) {
            throw e
        }
    }

    mapToSearchModel(hotels: Hotel[], language: language): HotelSearchResponse[] {
        try {
            const translatedHotels: BaseHotelsResponse[] = this.mapToBaseModel(hotels, language);
            const searchResponsHotels: HotelSearchResponse[] = translatedHotels.map((hotel, index) => {
                return {
                    ...hotel,
                    firstDeal: hotels[index].deals.length ? {
                        headline: this.translate(hotels[index].deals[0].headline as Localization, language),
                        details: this.translate(hotels[index].deals[0].details as Localization, language)
                    } : {} as Deal,
                    firstImage: hotels[index].images.length ? {
                        url: hotels[index].images[0].url,
                        caption: this.translate(hotels[index].images[0].caption as Localization, language)
                    } : {} as Image
                }
            })
            return searchResponsHotels;
        } catch (e) {
            throw e
        }
    }

    translate(field: Localization, Language: language): string {
        if (field[Language])
            return field[Language] as string

        for (let i = 0; i < this.languagesPriority.length; i++) {
            if (field[this.languagesPriority[i]])
                return field[this.languagesPriority[i]] as string
        }

        return ""
    }

    calculateDistanceToCenter(lat: number, long: number): number {
        // TODO: calculate distance
        return 0
    }


}