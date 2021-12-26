/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 15:48:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 15:48:58
 */

export interface RouteType {
  name: string;
  path: string;
  component: (props: any) => JSX.Element;
  children?: RouteType[]; 
}