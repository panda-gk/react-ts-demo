
      /**
      * 追加助力红包发起支付
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18445 {
  /**
   * 红包类型,2是助力红包,3是推广红包
   */
  red_envelope_type: string;
  /**
   * 直播相关的给 live_id
   */
  red_envelope_id: string;
  /**
   * 金额 以分为单位
   */
  amount: string;
}
    export class IResid18445 {
  data?: {
    order_no?: string;
    mission_id?: number;
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
        IReqid18445,
        IResid18445['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/b/operation/mission/helpredenvelope/create_1586845680647',
        data: data
      }) as Promise<any> 
      export default http;

      