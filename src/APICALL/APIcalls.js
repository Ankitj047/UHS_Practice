import axios from "axios";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { postSliceAction } from "../store/slices/postslice";

const baseurl = process.env.REACT_APP_BAESURL;
export const token  = JSON.parse(localStorage.getItem(("authdata") || ""))

const API = axios.create({
  baseURL : baseurl,
  headers : {'authorization': token?.token}
})

const MultiFileAPI = axios.create({
  baseURL : baseurl,
  headers : {'authorization': token.token, "Content-Type" : "multipart/form-data"}
})

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
      localStorage.setItem("authdata",JSON.stringify(data))
      console.log(data,"data")
    }
  } catch (err) {
    console.log(err);
  }
};

export const adduserdata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await MultiFileAPI.patch(`userpersonaldata`, formdata);
    dispatch(postSliceAction.userdata(data));
    navigate(`/familyupdate`);
  } catch (error) {
    console.log(error);
  }
};

export const verifyuser = async (id, dispatch) => {
try {
  const {data} = await API.get(`/userpersonaldata/${id}`)
  dispatch(postSliceAction.userdata(data))
  console.log(data)
} catch (error) {
  console.log(error?.messaage)
}
}

export const familydata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await API.patch(`userpersonaldata`, formdata);
    dispatch(postSliceAction.userdata(data));
    navigate(`/familyupdate`);
  } catch (error) {
    console.log(error);
  }
};