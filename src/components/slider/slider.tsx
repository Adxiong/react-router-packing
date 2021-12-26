/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 15:45:39
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 16:29:56
 */

import { RouteType } from "../../models/common"
import { NavLink } from "react-router-dom"
import "./slider.css"

interface Props {
  menus: RouteType[]
}

const Slider = (props: Props) => {
  const {menus} = props
  return (
    <div className="menu">
      {
        menus.map ( (route) => {
          return (
            <div className="menu-item" key={route.name}><NavLink to={route.path}> {route.name}</NavLink> </div>
          )
        })
      }
    </div>
  )
  
}


export default Slider