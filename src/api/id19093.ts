
      /**
      * 查看直播间红包任务列表
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid19093 {
  /**
   * 场景类型，默认live
   */
  scene_type: string | number;
  /**
   * as live_id
   */
  scene_id: string | number;
}
    export class IResid19093 {
  code?: number;
  msg?: string;
  data?: {
    id: number;
    /**
     * 开抢之前为到开抢时间的倒计时秒数（正数），开抢之后，未抢完之前为0，抢完之后为到抢完时间的间隔（负数）
     */
    countdown: number;
    /**
     * 0 已抢完 1未抢完 2 未开抢
     */
    grab_status: number;
    amount: number;
    /**
     * 2 助力红包 3推广红包
     */
    red_type: number;
    /**
     * 当前用户是否抢过该红包，1是未抢，2是已抢
     */
    grabbed_flag: number;
  }[];
}
    
      const http: Serve<
        IReqid19093,
        IResid19093['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/c/operation/mission/redenvelope/list',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      