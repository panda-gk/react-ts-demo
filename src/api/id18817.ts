
      /**
      * [废弃]监听主播关闭直播事件
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18817 {
  live_id: number;
}
    export class IResid18817 {
  data?: {};
  code?: number;
  msg?: string;
}
    
      const http: Serve<
        IReqid18817,
        IResid18817['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/b/operation/popularize/listener/close',
        data: data
      }) as Promise<any> 
      export default http;

      