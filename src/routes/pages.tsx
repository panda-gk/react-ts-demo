import React from 'react'
import Loadable from 'react-loadable'


const Loading = () => {
  return <div></div>
}
const LoadableComponent: any = (loader: any, loading: any = Loading) => Loadable({
  loader,
  loading,
})


const pages =  {
    test1: LoadableComponent(() => import('../views/test1')),
    test2: LoadableComponent(() => import('../views/test2')),
    test3: LoadableComponent(() => import('../views/test3')),
    test4: LoadableComponent(() => import('../views/test4')),
    test5: LoadableComponent(() => import('../views/test5')),
 }

 export default pages