import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { getregisterApiurl } from "../APICALL";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";
import Commoncomponent from "./Commoncomponent";

export default function UserUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userdata = useSelector((state) => state.users.user);

  const getdata = async () => {
    const { data } = await getregisterApiurl
      .then((item) => item)
      .catch((err) => console.log(err));
    console.log(data);
    dispatch(userSliceAction(data));
  };

const handlsubmit =() => {
  navigate('/familyupdate')
} 

  return (
    <>
    <div><Commoncomponent/></div>
    <div><Progressbar progress='0'/></div>
      {/* <Progressbar bgcolor="red" progress='60'  height={30} />
      <Progressbar bgcolor="#99ff66" progress='50'  height={30} />
      <Progressbar bgcolor="#ff00ff" progress='85'  height={30} />
      <Progressbar bgcolor="#99ccff" progress='95'  height={30} /> */}
      <form onClick={()=> handlsubmit()}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <input placeholder="Please enter First Name"/>
            </div>
            <div className="col-sm"><input  placeholder="Please enter Last Name"/></div>
          </div>
        </div>
      </form>
    </>
  );
}
