import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { getregisterApiurl } from "../APICALL";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";

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

const submit =() => {
  navigate('/familyupdate')
} 

  return (
    <>
    <div><Progressbar progress='0'/></div>
      {/* <Progressbar bgcolor="red" progress='60'  height={30} />
      <Progressbar bgcolor="#99ff66" progress='50'  height={30} />
      <Progressbar bgcolor="#ff00ff" progress='85'  height={30} />
      <Progressbar bgcolor="#99ccff" progress='95'  height={30} /> */}
<button onClick={()=>submit()} >Add Me</button>
    </>
  );
}
