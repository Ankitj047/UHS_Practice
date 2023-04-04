import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { registeruserapiurl } from '../APICALL';
import { useDispatch } from 'react-redux';
import { userSliceAction } from '../store/slices/userSlice';
import { Link } from 'react-router-dom';
import { registergetdata } from '../APICALL/APIcalls';

const errormessage = {
  emaillength: "",
  emailcheck: "",
  paslength: "",
  passcheck: "",
};


export default function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [emailvalue, setEailvalue] = useState('');
  const [pass, setPass] = useState('');
  const [emassage, setEmessage] = useState(errormessage);

  const emailset = (e) => {
    setEailvalue(e.target.value);
    setEmessage({ ...emassage, emailcheck: "" });
  };

  const passset = (e) => {
    setPass(e.target.value);
    setEmessage({ ...emassage, paslength: "", passcheck: "" });
  };


  const formdata = {
    name: emailvalue,
    pass: pass
  }

const register = () => {
  dispatch(registergetdata(formdata, navigate, dispatch));
}

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
          <a href='/login'><img
            src="Images/Logo.png"
            width="250px"
            height="100px"
            alt="log"
            className="login_uhs_logo"
          /></a>
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
          <button className="signin_button" onClick={register}>
           Register
          </button>
        </div>
        <span>{emassage.emaillength}</span>
        <span>{emassage.emailcheck}</span>
        <span>{emassage.paslength}</span>
        <span>{emassage.passcheck}</span>
        <div style={{marginTop: "50px"}}>
          Copyright © {new Date().getFullYear()} Ankit Jain. All rights
          reserved. | Powered by @ankit
        </div>{" "}
      </div>
    </>
  )
}
