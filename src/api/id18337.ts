
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
  data: {};
}
    
      const http: Serve<
        IReqid18337,
        IResid18337['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/m/operation/mission/release',
        data: data
      }) as Promise<any> 
      export default http;

      