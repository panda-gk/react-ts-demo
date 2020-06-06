
      /**
      * 生成推广链接事件监听
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18793 {}
    export class IResid18793 {
  data: {};
  code: number;
  msg: string;
}
    
      const http: Serve<
        IReqid18793,
        IResid18793['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/listener/url',
        data: data
      }) as Promise<any> 
      export default http;

      