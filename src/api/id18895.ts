
      /* eslint-disable */
      /**
      * 删除标签
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18895 {
  /**
   * jsonarray string
   */
  ids: string;
}
    export class IResid18895 {
  code: number;
  msg: string;
}
    const http: Serve<IReqid18895, any> = (data?) =>  request({
        method: 'POST',
        url: '/ec/m/operation/mission/tag/delete',
        data: data
      }) 
    export default http
    /* eslint-enable */