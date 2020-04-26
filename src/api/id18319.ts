
      /* eslint-disable */
      /**
      * 查询任务详情
      * 返回示例
<span class="colour" style="color:rgb(0, 0, 0)">{</span>
<span class="colour" style="color:rgb(0, 0, 0)">    </span><span class="colour" style="color:rgb(163, 21, 21)">"data"</span><span class="colour" style="color:rgb(0, 0, 0)">: {</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission_title"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"111"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission\_start\_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-01-01 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission\_end\_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-12-01 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">100</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission_provider"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">100</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission_detail"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"aaa"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"channel"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"execution\_start\_time\_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"execution\_end\_time\_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"mission\_gameplay\_template"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"award\_handout\_time\_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">2</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"receive_rule"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">2</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"award\_handout\_fixed\_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-12-01 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"gmt_creater"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">2</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"gmt_modifier"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">2</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"tags"</span><span class="colour" style="color:rgb(0, 0, 0)">: [</span>
<span class="colour" style="color:rgb(0, 0, 0)">            {</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"tag_name"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"山"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"tag_id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">2</span>
<span class="colour" style="color:rgb(0, 0, 0)">            },</span>
<span class="colour" style="color:rgb(0, 0, 0)">            {</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"tag_name"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"火"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"tag_id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">3</span>
<span class="colour" style="color:rgb(0, 0, 0)">            },</span>
<span class="colour" style="color:rgb(0, 0, 0)">            {</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"tag_name"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"雪"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"tag_id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">5</span>
<span class="colour" style="color:rgb(0, 0, 0)">            }</span>
<span class="colour" style="color:rgb(0, 0, 0)">        ],</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"reward_rules"</span><span class="colour" style="color:rgb(0, 0, 0)">: [</span>
<span class="colour" style="color:rgb(0, 0, 0)">            {</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"award_name"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"release_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-12-12 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"currency_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span>
<span class="colour" style="color:rgb(0, 0, 0)">            },</span>
<span class="colour" style="color:rgb(0, 0, 0)">            {</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"award_name"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"年货节-个人战"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"release_time"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-12-12 00:00:00"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"currency_type"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">                </span><span class="colour" style="color:rgb(163, 21, 21)">"id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">3</span>
<span class="colour" style="color:rgb(0, 0, 0)">            }</span>
<span class="colour" style="color:rgb(0, 0, 0)">        ],</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"identity_value"</span><span class="colour" style="color:rgb(0, 0, 0)">: [</span>
<span class="colour" style="color:rgb(0, 0, 0)">            </span><span class="colour" style="color:rgb(9, 136, 90)">1</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">            </span><span class="colour" style="color:rgb(9, 136, 90)">2</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">            </span><span class="colour" style="color:rgb(9, 136, 90)">3</span>
<span class="colour" style="color:rgb(0, 0, 0)">        ],</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"id"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">3</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"biz_code"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"mokuaitv"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"delete_mark"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">0</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"delete_timestamp"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">0</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"gmt_created"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-04-16 13:53:21"</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">        </span><span class="colour" style="color:rgb(163, 21, 21)">"gmt_modified"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"2020-04-16 17:55:34"</span>
<span class="colour" style="color:rgb(0, 0, 0)">    },</span>
<span class="colour" style="color:rgb(0, 0, 0)">    </span><span class="colour" style="color:rgb(163, 21, 21)">"code"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(9, 136, 90)">10000</span><span class="colour" style="color:rgb(0, 0, 0)">,</span>
<span class="colour" style="color:rgb(0, 0, 0)">    </span><span class="colour" style="color:rgb(163, 21, 21)">"msg"</span><span class="colour" style="color:rgb(0, 0, 0)">: </span><span class="colour" style="color:rgb(4, 81, 165)">"success"</span>
<span class="colour" style="color:rgb(0, 0, 0)">}</span>
      **/
      
    import request from '../serve'
    type Serve<T, G> = (data?: T) => Promise<G>
    export class IReqid18319 {
  id: string | number;
}
    export class IResid18319 {
  data: {
    id: string;
    mission_title: string;
    mission_description: string;
    mission_start_time: string;
    mission_end_time: string;
    mission_type: 100 | 200 | 300;
    mission_provider: 100 | 200 | 300;
    mission_detail: string[];
    mission_remark: string;
    mission_picture: string;
    channel: number;
    identity_type: number;
    identity_value: (1 | 2 | 3 | 8)[];
    execution_start_time_type: 1 | 2;
    execution_end_time_type: 1 | 2;
    execution_end_time_days: number;
    mission_gameplay_template: 1 | 2;
    award_handout_time_type: 1 | 2;
    award_handout_fixed_time: string;
    award_handout_after_days: number;
    business: string;
    reward_rules: {
      id: number;
      award_name: string;
      release_time: string;
      award_handout_time_type: string;
      currency_type: 1 | 2;
      state: number;
    }[];
    tags: {
      tag_id: number;
      tag_name: string;
    }[];
    receive_rule: 1 | 2 | 3;
    file: string;
  };
  code: number;
  msg: string;
}
    const http: Serve<IReqid18319, any> = (data?) =>  request({
        method: 'GET',
        url: '/ec/m/operation/mission/detail',
        params: data
      }) 
    export default http
    /* eslint-enable */