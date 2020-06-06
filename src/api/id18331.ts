
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
  data: {};
}
    
      const http: Serve<
        IReqid18331,
        IResid18331['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/m/operation/mission/delete',
        data: data
      }) as Promise<any> 
      export default http;

      