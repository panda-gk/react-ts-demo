
      /* eslint-disable */
      /**
      * 发布推广
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18787 {
  /**
   * 单份奖励值/分
   */
  award_value: number;
  /**
   * 总奖励份数
   */
  award_count: number;
  live_id: number;
  /**
   * 直播标题
   */
  live_title: string;
}
    export class IResid18787 {
  data: {};
  code: number;
  msg: string;
}
    const http: Serve<IReqid18787, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/b/operation/popularize/publish',
        data: data
      }) 
    export default http
    /* eslint-enable */