
      /**
      * B端查看助力红包手气
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19753 {
  /**
   * 场景类型 写死live
   */
  scene_type: string | number;
  /**
   * 直播id
   */
  scene_id: string | number;
  /**
   * 红包id
   */
  red_envelope_id: string | number;
}
    export class IResid19753 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 总金额
     */
    amount?: number;
    /**
     * 已抢金额
     */
    grabbed_amount?: number;
    red_envelop_list?: {
      /**
       * 头像
       */
      head_url: string;
      /**
       * 昵称
       */
      nickname: string;
      /**
       * 金额
       */
      amount: number;
    }[];
  };
}
    
      const http: Serve<
        IReqid19753,
        IResid19753['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/b/operation/mission/helpredenvelope/grab/tops',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      