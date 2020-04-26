
      /* eslint-disable */
      /**
      * 助力红包发放记录
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19417 {
  last_id?: string | number;
  count?: string | number;
  /**
   * 不传默认为 live
   */
  scene_type?: string | number;
}
    export class IResid19417 {
  code?: number;
  msg?: string;
  data?: {
    data?: {
      head_url: string;
      nickname: string;
      gmt_create: string;
      amount: number;
      grabbed_amount: number;
    }[];
    last_id?: number;
  };
}
    const http: Serve<IReqid19417, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/b/operation/mission/helpredenvelope/list',
        params: data
      }) 
    export default http
    /* eslint-enable */