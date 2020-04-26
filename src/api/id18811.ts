
      /* eslint-disable */
      /**
      * 追加红包数量
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18811 {
  /**
   * 红包id
   */
  red_envelope_id?: number;
  /**
   * 追加数量
   */
  append_count?: number;
}
    export class IResid18811 {
  data?: {};
  code?: number;
  msg?: string;
}
    const http: Serve<IReqid18811, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/b/operation/popularize/append/count',
        data: data
      }) 
    export default http
    /* eslint-enable */