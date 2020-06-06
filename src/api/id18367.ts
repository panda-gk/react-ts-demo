
      /**
      * b端任务报名
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18367 {
  /**
   * 任务ID
   */
  mission_id: string;
}
    export class IResid18367 {
  data: {};
}
    
      const http: Serve<
        IReqid18367,
        IResid18367['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/b/operation/mission/apply',
        data: data
      }) as Promise<any> 
      export default http;

      