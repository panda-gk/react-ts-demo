import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import routes from './config'
import pages  from './pages'

const route = (r: IRouterItem2) => {
    const ComponentItem = pages[r.component]
    return (
      <Route path={r.path} component={ComponentItem} key={r.path} exact />
    )
  }
interface IRouterItem {
  path: string;
  component?: string;
  children: any[];
}


interface IRouterItem2 {
  path: string;
  component: string;
}
const Routes = () => {
  return(
      <Switch>
        {
         routes.menus.map((routerItem:IRouterItem) => {
         
          return routerItem.component ? route(routerItem as any) : routerItem.children.map((r: IRouterItem) => route(r as any))
         })
        }
        {/* <Route path='/test' component={Test} ></Route> */}
        <Route render={() => <Redirect to={routes.menus[0].children ? routes.menus[0].children[0].path : routes.menus[0].path} />} />
      </Switch>
  )
};

export default Routes;