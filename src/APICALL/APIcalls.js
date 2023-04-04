import axios from "axios";
import { useDispatch } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";

export const registergetdata = async (formdata, navigate, dispatch) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/register`, formdata);
    navigate("/usersinfo")
    dispatch(userSliceAction.registerUsers(data))
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
