import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function Commoncomponent() {
  const navigate = useNavigate();
  const [ishover, setIshover] = useState(false);

  const onMouseOver = () => {
    setIshover(true)
  }

  const onMouseOut = () => {
    setIshover(false)
  }
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/");
  };
  return (
    <>
      <div className="logout">
      <div>Logout</div>
        <BiLogOutCircle className="logout-icon" onClick={() => logout()}  onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
        {/* {ishover ? (
          <div>Logout</div>
        ) : ""} */}
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
