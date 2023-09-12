import React from "react";
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

export default function Lastsection() {

  const navigate = useNavigate();

  return (
    <div className="last-section-home">
      <div className="last-section-div">
        Universal HealthShare works with a third-party administrator that
        processes medical bills in the same manner that you’re accustomed to.
        Unlike traditional payors, Universal Health Fellowship a not-for-profit
        organization that is focused exclusively on helping its members and is
        committed to processing and paying medical bills quickly and
        efficiently.
      </div>
      <div className="last-section-div">
        Universal HealthShare is affiliated with the Multiplan/PHCS Ancillaries
        & Providers network, so all providers in that network are treated as “in
        network” for sharing among Universal HealthShare members.
      </div>
      <div className="last-section-div">
        Do you want to know more about how health sharing works from a provider’s perspective, click here.
      </div>
      <div className="last-section-div">
        <button className="last-section-botton" onClick={()=> navigate(-1)}> <BiArrowBack/> Go Back </button>
      </div>
    </div>
  );
}
