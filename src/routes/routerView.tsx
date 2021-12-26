/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 14:56:36
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 16:28:05
 */

import { Switch, Route, } from "react-router-dom"
import { RouteType } from "../models/common"

interface Props {
  routes: RouteType[]
}

const RouterView = (props: Props) => {
  const {routes} = props
  return (
    <Switch>
      {
        routes.map ( (route) => 
          <Route 
            key={route.name} 
            path={route.path}
            component={route.component}
            render={props => 
              <route.component  {...props} route={route.children}/>
            }
          ></Route>   
        )
      }
    </Switch>
  )
}

export default RouterView