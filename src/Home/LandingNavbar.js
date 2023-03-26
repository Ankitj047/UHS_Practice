import React from "react";
import { Link } from "react-router-dom";

export default function LandingNavbar() {
  return (
    <>
    <div className="navspace">
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <img src="/images/Logo.png" width="300" height="80" alt=""/>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-linku" href="#">Health Sharing <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-linku"  href="#">Is Sharing Right For You?</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-linku dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Fellowship
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Our Mission</a>
          <a className="dropdown-item" href="#">Statement of Share</a>
          <a className="dropdown-item" href="#">Get in Touch</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-linku" href="#">Resources</a>
      </li>
      <li className="nav-item">
        <Link className="mloginbutton" to={"/login"}>Member Login</Link>
      </li>
    </ul>
  </div>
</div>
</div>
    </>
  );
}
