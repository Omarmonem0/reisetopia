import { Request, Response } from "express";
import { HotelDetailsResponse } from "../Models/HotelDetailsResponse";
import { HotelSearchResponse } from "../Models/HotelSearchResponse";
import { HotelsService } from "../Service/HotelsService";
import { requestType, statusCodes } from './../Constants/Constants';
import { BaseResponse } from './../Models/BaseResponse';
import { BaseController } from './BaseController';

export class HotelsController extends BaseController {
    private service: HotelsService

    constructor() {
        super()
        this.service = new HotelsService()
    }
   
    healthCheck(req: Request, res: Response) {
        res.status(statusCodes.ok).send("Healthy")
    }

    index(req: Request, res: Response) {
        console.log("[Contoller] -> index")
        try {
            if (res.locals.type === requestType.index) {
                const hotels : HotelSearchResponse[] = this.service.getAllHotels(res.locals.language)
                const response : BaseResponse<HotelSearchResponse[]> = this.enrichResponse(hotels, true, "") 
                res.status(statusCodes.ok).send(response)
            }  
            else 
                this.search(req, res)
        } catch (e) {
            console.log(e)
            const response : BaseResponse<{}> = this.enrichResponse({},false, e as string)
            res.status(statusCodes.internalServerError).send(response)
        }
    }

    search(req: Request, res: Response) {
        console.log("[Contoller] -> search")
        try {
            const searchResult : HotelSearchResponse[] = this.service.getHotelsBySearchTerm(res.locals.language, res.locals.searchTerm)
            const response : BaseResponse<HotelSearchResponse[]> = this.enrichResponse(searchResult, true, "") 
            res.status(statusCodes.ok).send(response)
        } catch (e) {
            console.log(e)
            const response : BaseResponse<{}> = this.enrichResponse({},false, e as string)
            res.status(statusCodes.internalServerError).send(response)
        }
    }

    show(req: Request, res: Response) {
        console.log("[Contoller] -> show")
        try {
            const hotelDetails : HotelDetailsResponse = this.service.getHotelDetails(res.locals.language, Number(req.params.hotelId))
            const response : BaseResponse<HotelDetailsResponse> = this.enrichResponse(hotelDetails, true,  "")
            res.status(statusCodes.ok).send(response)
        } catch(e) {
            const response : BaseResponse<{}> = this.enrichResponse({},false, e as string)
            res.status(statusCodes.internalServerError).send(response)
        }
    }
}