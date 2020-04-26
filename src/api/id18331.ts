
      /* eslint-disable */
      /**
      * 删除任务
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18331 {
  id: string;
}
    export class IResid18331 {
  code: number;
  msg: string;
}
    const http: Serve<IReqid18331, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/m/operation/mission/delete',
        data: data
      }) 
    export default http
    /* eslint-enable */