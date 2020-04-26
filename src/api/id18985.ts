
      /* eslint-disable */
      /**
      * 直播推广记录
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18985 {
  /**
   * 最后id，第一次传null
   */
  last_id: string | number;
  /**
   * 每页条数
   */
  count: string | number;
}
    export class IResid18985 {
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
     * 预算总金额
     */
    award_money: number;
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
    /**
     * 开始推广时间
     */
    start_date: string;
    /**
     * 直播标题
     */
    live_title: string;
  }[];
  code?: number;
  msg?: string;
}
    const http: Serve<IReqid18985, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/b/operation/popularize/log/list',
        params: data
      }) 
    export default http
    /* eslint-enable */