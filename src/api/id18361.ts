
      /* eslint-disable */
      /**
      * b端查询任务列表
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18361 {
  /**
   * 根据标签查询
   */
  tag_id?: string | number;
  count: string | number;
  /**
   * 100:战队任务 200日常营销任务 300 红包任务
   */
  mission_type?: string | number;
}
    export class IResid18361 {
  data: {
    /**
     * id
     */
    id: string;
    /**
     * 标题
     */
    mission_title: string;
    /**
     * 描述
     */
    mission_description: string;
    /**
     * 图片
     */
    mission_picture: string;
    /**
     * 任务状态 200已发布 300 进行中 400 已结束
     */
    state: string;
    /**
     * 完成状态0未领取100已领取 200 核算中300 未完成 400已完成 500 奖励已发放
     */
    complete_state: string;
    /**
     * 到期时间（ms时间戳）
     */
    end_time: string;
    /**
     * 是否可接受任务未报名状态下 0不能 1能
     */
    receive_state: number;
  }[];
}
    const http: Serve<IReqid18361, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/b/operation/mission/list',
        params: data
      }) 
    export default http
    /* eslint-enable */