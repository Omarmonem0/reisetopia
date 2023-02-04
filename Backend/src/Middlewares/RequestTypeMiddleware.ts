import { NextFunction, Request, Response } from "express";
import { requestType } from './../Constants/Constants';

export class RequestTypeMiddleware {
    static extractRequestType (req: Request, res: Response, next: NextFunction) {
        if(req.query && req.query.search && req.query.search.length) {
            res.locals.type = requestType.search
            res.locals.searchTerm = req.query.search
        }
        else
            res.locals.type = requestType.index

        next()
    }
}