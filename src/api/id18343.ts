
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
  data: {};
}
    
      const http: Serve<
        IReqid18343,
        IResid18343['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/m/operation/mission/copy',
        data: data
      }) as Promise<any> 
      export default http;

      