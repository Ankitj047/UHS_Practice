import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { getregisterApiurl } from "../APICALL";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";
import Commoncomponent from "./Commoncomponent";

const initialstate = {
  fname: "",
  lname: "",
  age: "",
  email: "",
  phone: "",
  isaccept: false,
  diseasedes: "",
};

export default function UserUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(initialstate)
  const userdata = useSelector((state) => state.users.user);

  const getdata = async () => {
    const { data } = await getregisterApiurl
      .then((item) => item)
      .catch((err) => console.log(err));
    console.log(data);
    dispatch(userSliceAction(data));
  };

  const handlsubmit = () => {
    console.log("yes I am called");
    navigate("/familyupdate");
  };

  return (
    <>
      <div>
        <Commoncomponent />
      </div>
      <div>
        <Progressbar progress="0" />
      </div>
      <form onClick={() => handlsubmit()}>
        <div className="container userupdate-container">
          <div className="row">
            <div className="col-sm">
              <input placeholder="Please enter First Name" />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input placeholder="Please enter Last Name" />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input placeholder="Please enter email" />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input placeholder="Please enter Phone number" />
            </div>
            <div className="col-sm">
              <input placeholder="Please enter age" />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <textarea
                type="text"
                rows="4"
                cols="50"
                placeholder="Please Describe Disease if Any"
              />
            </div>
          </div>
          <div className="row containerrow">
            <div className="col-sm">
              <input type="checkbox" placeholder="Please enter email" />
            </div>
            <div className="col-sm">
              <label>I have read and Accept T&C</label>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
