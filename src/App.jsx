import { Route,Routes } from "react-router-dom";
import Dashboard from "./Topic-13 React Lifecycle FBC/Dashboard";
import Profile from "./Topic-13 React Lifecycle FBC/Profile"
import Page from "./Topic-13 React Lifecycle FBC/Page"
import Home from "./Topic-13 React Lifecycle FBC/Home";


import React from 'react'
import Header from './Topic-14 React Routing/Header'
import { Outlet } from 'react-router-dom'


const App = () => {
  
  return (
    <div id="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Page />} >
          <Route  index element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </div>
  );
};
    <div id="app">
      <Header/>

      <Outlet />
    </div>
  )
}

export default App;
export default App