
      /* eslint-disable */
      /**
      * 新增任务标签
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18349 {
  /**
   * tag
   */
  tag_name: string;
}
    export class IResid18349 {
  code: number;
  data: {
    id: string;
    tag_name: string;
  };
}
    const http: Serve<IReqid18349, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/m/operation/mission/tag/add',
        data: data
      }) 
    export default http
    /* eslint-enable */