/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 14:56:36
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 15:03:46
 */

import { Switch, Route } from "react-router-dom"
import routes from "./routes"

const RouterView = () => {
  return (
    <Switch>
      {
        routes.map ( route => {
          <Route 
            key={route.name} 
            path={route.path}
            component={route.component}
            render={props => {
              <route.component {...props} routes={route.children}></route.component>
            }}
            ></Route>
        })
      }
    </Switch>
  )
}

export default RouterView