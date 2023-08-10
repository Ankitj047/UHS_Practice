import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Commoncomponent() {
  const navigate = useNavigate();
  const [ishover, setIshover] = useState(false);

  const userdata = useSelector((state)=> state.posts.userdata)
  const usergetdata = userdata;

  const onMouseOver = () => {
    setIshover(true)
  }

  const onMouseOut = () => {
    setIshover(false)
  }
  const logout = () => {
    localStorage.removeItem("authdata");
    // navigate("/login");
    window.location.href = "http://localhost:8000/login"
  };
  return (
    <>
      <div className="logout">
      <img src={usergetdata.profilephoto} alt="Image" className="profilephoto"/>
        <div className="welcome"> Welcome {usergetdata.email}</div>
        
        <div className="logoutdiv">
      <div>Logout</div>
        <BiLogOutCircle className="logout-icon" onClick={() => logout()}  onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
        {/* {ishover ? (
          <div>Logout</div>
        ) : ""} */}
      </div>
      </div>
      <div className="common_component-container">
        <div>
          With Universal HealthShare, a community of individual members funds
          the payment of medical needs to providers rather than an insurance
          company or employer benefit plan. Program members make voluntary
          monthly contributions, and those funds are used to help with members’
          eligible medical expenses.
        </div>
      </div>
    </>
  );
}
