import { useState, useEffect } from 'react'
/**
 * @param  {} apiGetList
 * api接口方法
 */
export default (apiGetList) => {
  const [params, setParams] = useState({
    pageIndex: '1',
    pageSize: '20',
  })
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false as boolean)
  const onPageChange = (pageIndex: number, pageSize: number) => {
    const data = {
      pageIndex: String(pageIndex),
      pageSize: String(pageSize),
    }
    getList(data)
  }
  const getList = (data = {}) => {
    if (loading) { return }
    const newParams = {
      ...params,
      ...data,
    }
    setParams(newParams)
    setLoading(false)
    apiGetList(newParams).then(res => {
      setLoading(false)
      setList(res.rows)
      setTotal(res.records)
    })
  }
  const pagination = {
    current: Number(params.pageIndex),
    pageSize: Number(params.pageSize),
    onChange: onPageChange,
    total: total,
  }
  useEffect(() => {
    getList({})
  }, [])
  return {
    list,
    setList,
    getList,
    loading,
    setLoading,
    total,
    setTotal,
    params,
    setParams,
    pagination,
  }
}