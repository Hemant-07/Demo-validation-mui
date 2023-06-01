import React from "react";
import Signin from "./Signin";
import { Routes, Route, HashRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Chart from "./Chart";
import Profile from "../component/Profile"
import Password from "../component/Password"
import Notification from "../component/Notification"
import FormName from "./FormName"
// import Deposits from "../component/Deposits"
// import Orders from "../component/Orders"
import Title from "../component/Title"
// import {mainListItems} from "./Listitems"


function Demo() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>
          <Route element={<mainListItems/>}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
          <Route exact path="/Password" element={<Password />}></Route>
          <Route exact path="/Notification" element={<Notification />}></Route>
          <Route exact path="/Dealer" element={<FormName />}></Route> 
        </Routes>
      </HashRouter>

     
      {/* <Chart/> */}
      {/* <Deposits/> */}
      {/* <Orders/> */}
      <Title/>
    
    
     
    </div>
  );
}

export default Demo;
