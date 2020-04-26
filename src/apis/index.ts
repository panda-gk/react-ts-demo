import http from '../serve'
import * as Type from './type'
type Request<T, G> = (params?: T) => Promise<G>
export const getHome:Request<{}, Type.IUserHomeInfoRes> = params => http.get('/assistant/home/userHomeInfo', params) as Promise<any>