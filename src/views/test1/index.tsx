import React, { Component } from 'react';
import  { RouteComponentProps } from 'react-router'
import API from '../../api'
class Test1 extends Component <RouteComponentProps> {

  componentDidMount() {
    this.getTest()
    console.log(1)
  }

 async getTest() {
   const params = {
    offset:0,
    count:20
   }
  const res = await API.id18313(params)
  console.log(res.data)
    
  }
  
  render() {
    return(
      <div>
        测试1
      </div>
    )
  }
}
export default Test1