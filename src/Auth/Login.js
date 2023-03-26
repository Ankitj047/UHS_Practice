import React, { useState } from "react";
import { useNavigate } from "react-router";

const errormessage = {
  emaillength: "",
  emailcheck: "",
  paslength: "",
  passcheck: "",
};

export default function Login() {
  const navigate = useNavigate();

  const [emailvalue, setEailvalue] = useState();
  const [pass, setPass] = useState();
  const [emassage, setEmessage] = useState(errormessage);
  const regexCheck = () => {
    const emailregex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    if (emailvalue?.match(emailregex) == null || emailvalue == null) {
      setEmessage({
        ...errormessage,
        emailcheck: "Please Enter Valid Email ID",
      });
      return false;
    }

    if (pass?.length <= 10 || pass?.length == null || pass?.length == "") {
      setEmessage({ ...emassage, paslength: "Min 10 length for the pass" });
      return false;
    } else if (pass.match(/[A-Z]/g) < 2) {
      setEmessage({
        ...emassage,
        passcheck: "there should be min 3 caps letter",
      });
      return false;
    } else if (pass.match(/[a-z]/g) > 2) {
      setEmessage({
        ...emassage,
        passcheck: "there should be min 3 caps letter",
      });
      return false;
    } else if (pass.match(/[@%$&*]/g) > 1) {
      setEmessage({ ...emassage, passcheck: "min 1 special character needed" });
      return false;
    } else {
      return true;
    }
  };

  const emailset = (e) => {
    setEailvalue(e.target.value);
    setEmessage({ ...emassage, emailcheck: "" });
  };

  const passset = (e) => {
    setPass(e.target.value);
    setEmessage({ ...emassage, paslength: "", passcheck: "" });
  };

  const login = () => {
    //  if (regexCheck() == true) {
    //   navigate('/')
    //  }
    navigate("/");
  };

  return (
    <>
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
          <input
            className="login_input_username"
            type="text"
            placeholder="ENTER YOUR EMAIL"
            value={emailvalue}
            onChange={(e) => emailset(e)}
          />
          <input
            className="login_input_username"
            type="text"
            placeholder="ENTER YOUR PASSWORD"
            value={pass}
            onChange={(e) => passset(e)}
          />
          <button className="signin_button" onClick={login}>
            SIGN IN
          </button>
        </div>
        <span>{emassage.emaillength}</span>
        <span>{emassage.emailcheck}</span>
        <span>{emassage.paslength}</span>
        <span>{emassage.passcheck}</span>
        <div className="Forgotpass" onClick={()=> {navigate("/forgotpass")}}>Forgot your password?</div>
        <div className="having_trouble">Having trouble logging in?</div>
        <div className="check"><span className="word_highlight">Please check</span> if your email has been registered on the portal.</div>
        <div style={{marginTop: "50px"}}>
          Copyright © {new Date().getFullYear()} Ankit Jain. All rights
          reserved. | Powered by @ankit
        </div>{" "}
      </div>
    </>
  );
}
