
      /* eslint-disable */
      /**
      * 查看手气
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18511 {
  /**
   * 场景类型，写死live
   */
  scene_type: string | number;
  /**
   * 传live_id
   */
  scene_id: string | number;
  /**
   * 红包id
   */
  red_envelope_id: string | number;
}
    export class IResid18511 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 我的金额
     */
    my_amount?: number;
    red_envelope_list?: {
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
    const http: Serve<IReqid18511, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/grab/tops',
        params: data
      }) 
    export default http
    /* eslint-enable */