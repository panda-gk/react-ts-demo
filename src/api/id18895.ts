
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
  data: {};
}
    
      const http: Serve<
        IReqid18895,
        IResid18895['data']
      > = (data?) => request({
        method: 'POST',
        url: '/ec/m/operation/mission/tag/delete',
        data: data
      }) as Promise<any> 
      export default http;

      