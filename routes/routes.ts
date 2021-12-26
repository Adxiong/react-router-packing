/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 14:23:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 15:04:37
 */

import { lazy } from "react"

interface RouteType {
  name: string;
  path: string;
  component: React.LazyExoticComponent<(props) => JSX.Element>;
  children?: RouteType[]; 
}

const Routes: RouteType[] = [
  {
    name: "home",
    path: "/home",
    component: lazy( () => import('../src/page/home/home')),
  }
]


export default Routes
