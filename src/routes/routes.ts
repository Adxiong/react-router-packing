/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 14:23:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 16:15:41
 */


import Home from '../page/home/home'
import User from "../page/user/user"
import Login from '../page/login/login'
import { RouteType } from '../models/common'



const Routes: RouteType[] = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: 'user',
    path: "/user",
    component: User
  },
  {
    name: "login",
    path: "/login",
    component: Login
  }
]


export default Routes
