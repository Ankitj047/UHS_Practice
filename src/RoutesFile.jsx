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
import PaymentGateway from './MemberLogin/PaymentGateway';
import Final from './MemberLogin/Final';



export default function RoutesFile() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>   
        {/* Home page with all the home component */}
        <Route path={"/login"} element={<Login/>}></Route>
        {/* Login page */}
        <Route path={"/ourmission"} element={<Ourmission/>}></Route>
        {/* our mission page */}
        <Route path={'/forgotpass'} element={<Forgotpass/>}></Route>
        {/* forgot password page functionality pending */}
        <Route path={"/registration"} element={<Registration/>}></Route>
        {/* register page */}
        <Route path={"/usersinfo"} element={<UserUpdate/>}></Route>
        {/* add details of the user */}
        <Route path={"/familyupdate"} element={<FamailUpdate/>}></Route>
        {/* add details of the family */}
        <Route path={"/ChooseType"} element={<Dashboard/>}></Route>
        {/* choose the type of user */}
        <Route path={"/Phase1disease"} element={<Phase1disease/>}></Route>
        {/* show the list of diesease */}
        <Route path={'/dieasesTable'} element={<DieasesShow/>} ></Route>
        {/* show over all diesease with family and price calculation*/}
        <Route path={'/payment'} element={<PaymentGateway/>}></Route>
        <Route path={'/submipage'} element={<Final/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
