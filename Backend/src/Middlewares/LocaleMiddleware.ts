import { NextFunction, Request, Response } from "express";

export class LocaleMiddleware {
    static extractLocale (req: Request, res: Response, next: NextFunction) {
        console.log("[LocaleMiddleware] -> extractRequestType")
        if(req.query && req.query.lang && req.query.lang.length)
            res.locals.language = req.query.lang
        else
            res.locals.language = "en-US"

        next()
    }
}