import { BaseResponse } from '../Models/BaseResponse';
export class BaseController {
    constructor() {

    }
    enrichResponse<T>(result: T, success: boolean, error: string) : BaseResponse<T> {
        const response : BaseResponse<T> = {
            success,
            error,
            result
        }
        return response
    }
}