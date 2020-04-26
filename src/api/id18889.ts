
      /* eslint-disable */
      /**
      * 【废弃】查看红包是否被抢完
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18889 {
  scene_type: string | number;
  scene_id: string | number;
  red_envelope_id: string | number;
}
    export class IResid18889 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 1 代表没抢完,2代表抢完了
     */
    can_grab?: number;
  };
}
    const http: Serve<IReqid18889, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/c/operation/mission/redenvelope/cangrab',
        params: data
      }) 
    export default http
    /* eslint-enable */