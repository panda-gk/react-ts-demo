
      /**
      * 追加推广红包数量
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18811 {
  /**
   * 红包id
   */
  red_envelope_id?: number;
  /**
   * 追加数量
   */
  append_count?: number;
  live_id: number;
}
    export class IResid18811 {
  data?: {
    order_no?: string;
    red_envelope_id?: number;
    red_envelope_type?: string;
    start_time?: string;
    countdown?: number;
    amount?: number;
    pay_type?: number;
    unified_order_url?: {
      pre_pay_id?: string;
      redirect_url?: string;
      app_pay_request?: {
        package?: string;
        appid?: string;
        sign?: string;
        prepayid?: string;
        partnerid?: string;
        noncestr?: string;
        timestamp?: string;
      };
    };
  };
  code?: number;
  msg?: string;
}
    
      const http: Serve<
        IReqid18811,
        IResid18811['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/b/operation/popularize/append/count',
        data: data
      }) as Promise<any> 
      export default http;

      