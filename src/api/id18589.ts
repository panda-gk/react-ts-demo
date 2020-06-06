
      /**
      * 助力资格判断
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18589 {
  scene_type: string | number;
  scene_id: string | number;
  red_envelope_id: string | number;
}
    export class IResid18589 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 0 代表无资格抢 1代表有资格抢
     */
    help_status: number;
    /**
     * 1 邀请别人成功  2 被邀请成功 （同时邀请和被邀请时，返回1）
     */
    help_type: number;
    /**
     * 0 代表已抢完,1代表未抢完  2 未开抢
     */
    grab_status: number;
    /**
     * 0 不可以  1可以
     */
    can_help: number;
  };
}
    
      const http: Serve<
        IReqid18589,
        IResid18589['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/helpredenvelope/status',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      