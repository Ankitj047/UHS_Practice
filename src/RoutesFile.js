import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgotpass from './Auth/Forgotpass';
import Login from './Auth/Login';
import Registration from './Auth/Registration';
import Home from './Home/Home';
import Ourmission from './Home/NavbarHeaderPages/Ourmission';
import FamailUpdate from './MemberLogin/FamailUpdate';
import UserUpdate from './MemberLogin/UserUpdate';
import Dashboard from './MemberLogin/Dashboard';
import Phase1disease from './MemberLogin/Phase1disease';
import DieasesShow from './MemberLogin/DieasesShow';



export default function RoutesFile() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/ourmission"} element={<Ourmission/>}></Route>
        <Route path={'/forgotpass'} element={<Forgotpass/>}></Route>
        <Route path={"/registration"} element={<Registration/>}></Route>
        <Route path={"/usersinfo"} element={<UserUpdate/>}></Route>
        <Route path={"/familyupdate"} element={<FamailUpdate/>}></Route>
        <Route path={"/ChooseType"} element={<Dashboard/>}></Route>
        <Route path={"/Phase1disease"} element={<Phase1disease/>}></Route>
        <Route path={'/dieasesTable'} element={<DieasesShow/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
