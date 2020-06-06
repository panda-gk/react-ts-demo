
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
  /**
   * 助力数
   */
  data?: number;
}
    
      const http: Serve<
        IReqid18883,
        IResid18883['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/helpcount',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      