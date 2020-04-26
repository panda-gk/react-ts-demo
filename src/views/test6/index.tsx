import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import {IGlobalStore} from '../../store/globalStore'
import { getHome } from '../../apis'
import { IUserHomeInfoRes } from '../../apis/type'
import { Button } from 'antd';
interface IProps {
  globalStore:IGlobalStore
}
interface IState {
  info: IUserHomeInfoRes
}

@inject(({ globalStore }) => ({
  globalStore,
}))
@observer class Test6 extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      info: {
        waitPayNum: 0,
        waitSendNum: 0,
        waitReceiveNum: 0,
        name: '',
        image: '',
        waitCheckNum: 0,
      }
    }
  }
  async getHome() {
    const res = await getHome({})
    console.log(res)
    this.setState({
      info: res
    })

  }

  componentDidMount() {
  }

  render() {
    console.log(this.props)
    const { info } = this.state
    return(
      <div>
        测试6 {this.props.globalStore.name}
        <Button type="primary" onClick={this.getHome.bind(this)}>Button</Button>
        <p>{info.image}</p>
      </div>
    )
  }
}
export default Test6