
      /**
      * b端获取任务详情
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18355 {
  /**
   * 任务ID
   */
  mission_id: string | number;
}
    export class IResid18355 {
  data?: {
    /**
     * 标题
     */
    mission_title?: string;
    /**
     * 描述
     */
    mission_description?: string;
    /**
     * 开始时间
     */
    mission_start_time?: string;
    /**
     * 结束时间
     */
    mission_end_time?: string;
    /**
     * 任务类型
     */
    mission_type?: number;
    /**
     * 提供者
     */
    mission_provider?: number;
    /**
     * 详情
     */
    mission_detail?: string;
    /**
     * 备注
     */
    mission_remark?: string;
    /**
     * 渠道
     */
    channel?: number;
    execution_start_time_type?: number;
    execution_end_time_type?: number;
    mission_gameplay_template?: number;
    receive_rule?: number;
    state?: number;
    /**
     * 当前用户是否接收任务
     */
    user_accept_mission_mark?: boolean;
    /**
     * 队伍排名
     */
    user_team_rank?: number;
    /**
     * 榜单
     */
    team_top?: {
      team_name: string;
      gmv: number;
    }[];
    id?: number;
    biz_code?: string;
    delete_mark?: number;
    delete_timestamp?: number;
    gmt_created?: string;
    gmt_modified?: string;
    /**
     * 用户身份：1队长 0队员
     */
    user_identity: number;
  };
  code?: number;
  msg?: string;
}
    
      const http: Serve<
        IReqid18355,
        IResid18355['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/b/operation/mission/detail',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      