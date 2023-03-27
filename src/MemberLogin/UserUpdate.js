import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { getregisterApiurl } from "../APICALL";
import Progressbar from "./Progressbar";

export default function UserUpdate() {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.users.user);

  const getdata = async () => {
    const { data } = await getregisterApiurl
      .then((item) => item)
      .catch((err) => console.log(err));
    console.log(data);
    dispatch(userSliceAction(data));
  };

  return (
    <>
    <div><Progressbar/></div>
  <div>UserEnrollment</div>
    </>
  );
}
