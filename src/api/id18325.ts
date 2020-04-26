
      /* eslint-disable */
      /**
      * 修改任务
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18325 {
  mission_title: string;
  mission_description?: string;
  mission_start_time: string;
  mission_end_time: string;
  /**
   * 100:战队任务 200日常营销任务 300 红包任务
   */
  mission_type: string;
  /**
   * 任务提供者 100平台任务 200供应商任务 300店主任务
   */
  mission_provider: string;
  mission_detail: string;
  mission_remark?: string;
  mission_picture?: string;
  channel?: string;
  identity_value?: string;
  /**
   * 开始执行时间类型 1 任务生效时间 2任务领取时间
   */
  execution_start_time_type: string;
  /**
   * 开始执行时间类型 1 任务失效时间 2领取后天数
   */
  execution_end_time_type: string;
  /**
   * 领取后多少天
   */
  execution_end_time_days?: string;
  /**
   * 任务玩法模板 1GMV
   */
  mission_gameplay_template: string;
  /**
   * 奖励发放时间类型：1任务完成后天数 2 固定日期
   */
  award_handout_time_type: string;
  /**
   * 奖励发放时间(固定时间)
   */
  award_handout_fixed_time: string;
  /**
   * 奖励发放时间(多少天数之后)
   */
  award_handout_after_days: string;
  /**
   * 身份类型 1所有人 2角色 3自定义
   */
  receive_rule: string;
  id: string;
  /**
   * excel文件url
   */
  file?: string;
  /**
   * string jsonarray
   */
  reward_rule_id: string;
  /**
   * jsonarray string
   */
  tag_id?: string;
  /**
   * 业务 mokuaitv weishi
   */
  business: string;
}
    export class IResid18325 {}
    const http: Serve<IReqid18325, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/m/operation/mission/update',
        data: data
      }) 
    export default http
    /* eslint-enable */