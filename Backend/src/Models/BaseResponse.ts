export interface BaseResponse<T> {
    success: boolean,
    error: string,
    result: T
}