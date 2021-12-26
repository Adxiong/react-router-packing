/*
 * @Descripttion: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2021-12-26 14:16:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2021-12-26 15:04:19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import RouteView from "../routes/routerView"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouteView></RouteView>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
