
      /* eslint-disable */
      /**
      * 复制任务
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18343 {
  id: string;
}
    export class IResid18343 {
  code: number;
  msg: string;
  field_4: string;
}
    const http: Serve<IReqid18343, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/m/operation/mission/copy',
        data: data
      }) 
    export default http
    /* eslint-enable */