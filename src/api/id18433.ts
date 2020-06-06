
      /**
      * 查询订单是否成功的接口
      * 
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18433 {
  order_no: string | number;
}
    export class IResid18433 {
  code?: number;
  msg?: string;
  data?: {
    /**
     * 订单状态 10 待支付，20 支付中，30 支付完成	,40 支付失败.
     */
    order_status?: number;
  };
}
    
      const http: Serve<
        IReqid18433,
        IResid18433['data']
      > = (data?) => request({
        method: 'GET',
        url: '/ec/b/operation/query/ordersuccess',
        data: {params: data}
      }) as Promise<any> 
      export default http;

      