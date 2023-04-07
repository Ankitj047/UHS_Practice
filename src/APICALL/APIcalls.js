import axios from "axios";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { postSliceAction } from "../store/slices/postslice";


const baseUrl = process.env.REACT_APP_BAESURL


export const registergetdata = async (formdata, navigate, dispatch) => {
  try {
    const { data } = await axios.post(`${baseUrl}/register`, formdata);
    navigate("/usersinfo")
    dispatch(postSliceAction.registerusers(data))
    console.log(data,"calldata");
  } catch (err) {
    console.error(err);
  }
};

export const getregisterdata = async(dispatch, setRegisterdata) => {
  try {
       const {data} = await axios.get(`${baseUrl}/register`)
       dispatch(userSliceAction.getregisterdata(data));
       setRegisterdata(data)
  } catch (error) {
    console.log(error)
  }
}

export const adduserdata = async (formdata, dispatch,navigate) => {

  try {
    const {data} = await axios.post(`${baseUrl}/userpersonaldata`,formdata)
    dispatch(userSliceAction.loginUserdata(data));
      navigate(`/familyupdate`);    
  } catch (error) {
    console.log(error)
  }
} 
