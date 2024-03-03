import { RequestHandler, Request } from "express"

export function setupConfigCorn(): RequestHandler{
    return async function(request: Request, response, next) {
        response.set('Access-Control-Allow-Origin', '*')
        response.set('Access-Control-Allow-Headers', '*')
        response.set('Access-Control-Allow-Methods', '*')
        next()
    }

}
