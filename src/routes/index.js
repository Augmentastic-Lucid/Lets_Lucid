import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './dashboard';

const Routing = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Dashboard/> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;