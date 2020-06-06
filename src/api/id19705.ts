
      /**
      * 推广员查询推广信息
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19705 {
  live_id: string | number;
  /**
   * 主播id
   */
  anchor_id: string | number;
}
    export class IResid19705 {
  data: {
    /**
     * 是否参与推广
     */
    is_popularize: boolean;
    /**
     * 每份奖励金额/分
     */
    award_value: number;
    /**
     * 已成功推广数
     */
    count: number;
    /**
     * 已获得奖励金额
     */
    money: number;
    /**
     * 红包是否已抢完
     */
    is_finish: boolean;
  };
  code: number;
  msg: string;
}
    
      const http: Serve<
        IReqid19705,
        IResid19705['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/c/operation/popularize/get/status',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      