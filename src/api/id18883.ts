
      /* eslint-disable */
      /**
      * 查看红包的助力数
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18883 {
  /**
   * 场景类型,直播固定为:live
   */
  scene_type: string | number;
  /**
   * 直播id
   */
  scene_id: string | number;
  red_envelope_id: string | number;
}
    export class IResid18883 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 助力数
     */
    help_count?: number;
  };
}
    const http: Serve<IReqid18883, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/helpcount',
        params: data
      }) 
    export default http
    /* eslint-enable */