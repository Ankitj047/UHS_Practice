import axios from "axios";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { postSliceAction } from "../store/slices/postslice";

const baseUrl = process.env.REACT_APP_BAESURL;

const API = axios.create({
  baseURL : baseUrl,
  headers : {'authorization': localStorage.getItem(("JWTToken") || "")}
})

// API.interceptors.request.use((req)=>{
// req.headers.Authorization = localStorage.getItem(("JWTToken") || "")
// return req;
// })

export const registergetdata = async (formdata, navigate, dispatch) => {
  try {
    const { data } = await API.post(`regissteruser`, formdata);
    navigate("/login");
    dispatch(postSliceAction.registerusers(data));
  } catch (err) {
    console.error(err);
  }
};

export const loginapi = async (formdata, navigate, dispatch) => {
  try {
    const { data } = await API.post(`login`, formdata);
    if (data.messaage == "successful") {
      navigate("/usersinfo");
      dispatch(postSliceAction.loginauthdata(data))
      localStorage.setItem("JWTToken",data.token)
    }
  } catch (err) {
    console.log(err);
  }
};

export const adduserdata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await API.post(`userpersonaldata`, formdata);
    dispatch(userSliceAction.loginUserdata(data));
    navigate(`/familyupdate`);
  } catch (error) {
    console.log(error);
  }
};
