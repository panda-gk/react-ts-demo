
      /* eslint-disable */
      /**
      * 查询任务列表
      * 返回示例
<span class="colour" style="color:rgb(0, 0, 0)">{</span>
<span class="colour" style="color:rgb(0, 0, 0)">    </span><span class="colour" style="color:rgb(163, 21, 21)">"data"</span><span class="colour" style="color:rgb(0, 0, 0)">: {</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"total_count"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"last_id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">-1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"data"</span><span class="colour" style="color:rgb(0, 0, 0)">: [</span>
<span class="colour" style="color:rgb(0, 0, 0)">            {</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"mission_title"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"111"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"mission\_start\_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-01-01 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"mission\_end\_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-12-01 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"mission_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">100</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">3</span>
<span class="colour" style="color:rgb(0, 0, 0)">            }</span>
<span class="colour" style="color:rgb(0, 0, 0)">        ]</span>
<span class="colour" style="color:rgb(0, 0, 0)">    },</span>
<span class="colour" style="color:rgb(0, 0, 0)">    </span><span class="colour" style="color:rgb(163, 21, 21)">"code"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">10000</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">    </span><span class="colour" style="color:rgb(163, 21, 21)">"msg"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"success"</span>
<span class="colour" style="color:rgb(0, 0, 0)">}</span>
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18313 {
  offset: string | number;
  count: string | number;
  /**
   * 任务类型(100:战队任务 200日常营销任务 300 红包任务)
   */
  mission_type?: string | number;
  /**
   * 状态(100 草稿 200已发布 300 进行中 400 已结束)
   */
  state?: string | number;
  /**
   * 1快手 2花椒 企鹅小店不传
   */
  channel?: string | number;
  /**
   * 见tag列表 传id
   */
  tag?: string | number;
  /**
   * mokuaitv 星选  weishi企鹅小店
   */
  business?: string | number;
}
    export class IResid18313 {
  data: {
    total_count: number;
    data: {
      mission_title: string;
      state: 100 | 200 | 300 | 400;
      mission_start_time: string;
      mission_end_time: string;
      mission_type: 100 | 200 | 300;
      id: string;
    }[];
  };
  code: number;
}
    const http: Serve<IReqid18313, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/m/operation/mission/list',
        params: data
      }) 
    export default http
    /* eslint-enable */