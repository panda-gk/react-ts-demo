
      /* eslint-disable */
      /**
      * 发布任务
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18337 {
  id: string;
}
    export class IResid18337 {
  code: number;
  msg: string;
}
    const http: Serve<IReqid18337, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/m/operation/mission/release',
        data: data
      }) 
    export default http
    /* eslint-enable */