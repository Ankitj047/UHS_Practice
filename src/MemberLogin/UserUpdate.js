import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { getregisterApiurl } from "../APICALL";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";
import Commoncomponent from "./Commoncomponent";
import { userudpateapiurl } from "../APICALL";
import { createSearchParams } from "react-router-dom";
import { getuserdataurl } from "../APICALL";
import { postSliceAction } from "../store/slices/postslice";
import {adduserdata} from "../APICALL/APIcalls"
import Sidebar from "./Sidebar";

const initialstate = {
  fname: "",
  lname: "",
  age: "",
  email: "",
  phone: "",
  isaccept: false,
  diseasedes: "",
  userid: "",
};

export default function UserUpdate() {
  const userid = localStorage.getItem("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState(initialstate);
  const [errormessage, setErrormessage] = useState("");
  const userdata = useSelector((state) => state.users.user);
  const [getuserdata, setGetuserdata] = useState("");
  const [id, setid] = useState();

  const registerUser=useSelector((state)=> state.posts.registeruser);

  //if same id user was there auto udapte the data 

  // useEffect(() => {
  //   getuserdataurl
  //     .then((data) => {
  //       let ans = data.data.filter((item) => item.userid == userid);
  //       setGetuserdata(ans);

  //       if (ans.length > 0) {
  //         setFormdata(ans[0]);
  //         setid(ans[0].id);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  const handlsubmit = async (e) => {
    e.preventDefault();
    if (regexcheck() == true) {
      formdata.userid = localStorage.getItem("id");
      adduserdata(formdata, dispatch,navigate)
    } else {
      setErrormessage("Please Accept T&C");
    }
  };

  const regexcheck = () => {
    if (formdata.isaccept == false) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div>
        {/* <Sidebar/> */}
        <Commoncomponent />
      </div>
      <div>
        <Progressbar progress="0" />
      </div>
      <form onSubmit={handlsubmit}>
        <div>{errormessage}</div>
        <div className="container userupdate-container">
          <div className="row">
            <div className="col-sm">
              <input
                placeholder="Please enter First Name"
                value={formdata.fname}
                onChange={(e) =>
                  setFormdata({ ...formdata, fname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input
                placeholder="Please enter Last Name"
                value={formdata.lname}
                onChange={(e) =>
                  setFormdata({ ...formdata, lname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input
                placeholder="Please enter email"
                value={formdata.email}
                onChange={(e) =>
                  setFormdata({ ...formdata, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input
                placeholder="Please enter Phone number"
                value={formdata.phone}
                onChange={(e) =>
                  setFormdata({ ...formdata, phone: e.target.value })
                }
              />
            </div>
            <div className="col-sm">
              <input
                placeholder="Please enter age"
                value={formdata.age}
                onChange={(e) =>
                  setFormdata({ ...formdata, age: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <textarea
                type="text"
                rows="4"
                cols="50"
                placeholder="Please Describe Disease if Any"
                value={formdata.diseasedes}
                onChange={(e) =>
                  setFormdata({ ...formdata, diseasedes: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input
                type="checkbox"
                placeholder="Please enter email"
                checked={formdata.isaccept}
                onChange={() => {
                  setFormdata({ ...formdata, isaccept: !formdata.isaccept });
                }}
              />
            </div>
            <div className="col-sm">
              <label>I have read and Accept T&C</label>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
