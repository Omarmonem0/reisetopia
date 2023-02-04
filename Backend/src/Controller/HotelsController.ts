import { Request, Response } from "express";
import { runInThisContext } from "vm";
import { HotelsService } from "../Service/HotelsService";
import { requestType } from './../Constants/Constants';

export class HotelsController {
    private service: HotelsService

    constructor() {
        this.service = new HotelsService()
    }
   
    healthCheck(req: Request, res: Response) {
        res.status(200).send("Healthy")
    }

    index(req: Request, res: Response) {
        console.log("[Contoller] -> index")
        if (res.locals.type === requestType.index)
            this.service.getAllHotels(res.locals.language)
        else 
            this.search(req, res)
        res.status(200).send()
    }

    search(req: Request, res: Response) {
        console.log("[Contoller] -> search")
        this.service.getHotelBySearchTerm(res.locals.langauge, res.locals.searchTerm)
        res.status(200).send()
    }

    show(req: Request, res: Response) {
        console.log("[Contoller] -> show")
        this.service.getHotelDetails(res.locals.langauge, 123)
        res.status(200).send()
    }
}