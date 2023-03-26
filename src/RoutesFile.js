import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Auth/Login';
import Home from './Home/Home';
import Ourmission from './Home/NavbarHeaderPages/Ourmission';



export default function RoutesFile() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/ourmission"} element={<Ourmission/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
