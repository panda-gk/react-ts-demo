
      /* eslint-disable */
      /**
      * 列出所有标签
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18391 {}
    export class IResid18391 {
  data: {
    tag_list: {
      id: number;
      tag_name: string;
    }[];
  };
  code: number;
}
    const http: Serve<IReqid18391, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/m/operation/mission/tag/list',
        params: data
      }) 
    export default http
    /* eslint-enable */