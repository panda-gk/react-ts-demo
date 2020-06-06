import React, { useEffect } from 'react';
import  { RouteComponentProps } from 'react-router'
import API from '../../api'

const Test1 = (props:RouteComponentProps) => {

  useEffect(() => {
    getTest()
  }, [])

  const getTest = async () => {
    const params = {
      offset: 0,
      count: 20,
    }
    const res = await API.id18313(params)
    console.log(res.total_count)
  }

  return(
    <div>
      测试1
    </div>
  )
}

export default Test1