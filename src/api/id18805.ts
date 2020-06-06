
      /**
      * 查询当前推广红包状态
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18805 {
  /**
   * 红包id
   */
  red_envelope_id: string | number;
}
    export class IResid18805 {
  data?: {
    /**
     * 共发放个数
     */
    award_count: number;
    /**
     * 每份奖励
     */
    award_value: number;
    /**
     * 已发放
     */
    sent_count: number;
    /**
     * 已发放金额
     */
    sent_money: number;
    /**
     * 剩余红包个数
     */
    surplus_count: number;
    /**
     * 剩余红包金额
     */
    surplus_money: number;
  };
  code?: number;
  msg?: string;
}
    
      const http: Serve<
        IReqid18805,
        IResid18805['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/b/operation/popularize/get/status',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      