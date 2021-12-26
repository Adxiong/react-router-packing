/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 14:16:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 16:28:52
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect } from "react-router-dom"
import RouteView from "./routes/routerView"
import Slider from "./components/slider/slider"
import Routes from './routes/routes';
import "./index.css"
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Slider menus={Routes}></Slider>
      <Redirect path='/' to="/home"></Redirect>
      <RouteView routes={Routes}></RouteView>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
