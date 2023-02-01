import { Request, Response } from "express";
import { HotelsService } from "../Service/HotelsService";

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
        this.service.getAllHotels("en")
        res.status(200).send()
    }

    search(req: Request, res: Response) {
        console.log("[Contoller] -> search")
        this.service.getHotelBySearchTerm("en","search-term")
        res.status(200).send()
    }

    show(req: Request, res: Response) {
        console.log("[Contoller] -> show")
        this.service.getHotelDetails("en", 123)
        res.status(200).send()
    }
}