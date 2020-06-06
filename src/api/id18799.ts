
      /**
      * [废弃]观众通过推广链接进入事件监听
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18799 {
  /**
   * 红包id
   */
  red_envelope_id: number;
  live_id: number;
  /**
   * 邀请人id，推广链接中有携带
   */
  inviter_id: number;
}
    export class IResid18799 {
  data: {};
  code: number;
  msg: string;
}
    
      const http: Serve<
        IReqid18799,
        IResid18799['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/c/operation/popularize/listener/into',
        data: data
      }) as Promise<any> 
      export default http;

      