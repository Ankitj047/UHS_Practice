import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Forgotpass() {
const navigate = useNavigate()

  const [emailvalue, setEailvalue] = useState();
  const emailset = (e) => {
    // setEailvalue(e.target.value);
    // setEmessage({ ...emassage, emailcheck: "" });
  };
  return (
    <div className="loginform_containernew">
      <div className="login_image_container">
        <img
          src="Images/login.png"
          width="800px"
          height="400px"
          alt="login"
          className="login_main_image"
        />
        <img
          src="Images/Logo.png"
          width="250px"
          height="100px"
          alt="log"
          className="login_uhs_logo"
        />
      </div>
      <div className="login_input_container">
        <div className="forgotpass-container">
          <div>Forgot your password?</div>
          <div className="forgotpass-inter-container">
            Enter your Email and we will send a message to reset your password.
          </div>
        </div>
        <input
          className="login_input_username"
          type="text"
          placeholder="ENTER YOUR EMAIL"
          value={emailvalue}
          onChange={(e) => emailset(e)}
        />

        <button className="resetpassbtn">RESET MY PASSWORD</button>
      </div>
      <div className="go_back">Go back to <span style={{color:"#e9716f"}} onClick={()=> {navigate("/login")}}>Sign In</span></div>
    </div>
  );
}
