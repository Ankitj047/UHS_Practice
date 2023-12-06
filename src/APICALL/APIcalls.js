import axios from "axios";
import { postSliceAction } from "../store/slices/postslice";
import { diseaseSliceAction } from "../store/slices/diseaseslice";
import { toast } from "react-toastify";
import useRazorpay from "react-razorpay";

const baseurl = process.env.REACT_APP_BAESURL;

export const token = localStorage.getItem("authdata")
  ? JSON.parse(localStorage.getItem("authdata"))
  : "";

const API = axios.create({
  baseURL: baseurl,
  headers: { authorization: token?.token },
});

// API.interceptors.request.use((req) => {
//  if(localStorage.getItem('authdata')) req.headers.Authorization = `${JSON.parse(localStorage.getItem("authdata"))?.token}` ;
//  return req
// })

const MultiFileAPI = axios.create({
  baseURL: baseurl,
  headers: {
    authorization: token?.token,
    "Content-Type": "multipart/form-data",
  },
});

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
      // navigate("/ChooseType");
      window.location.href = "http://localhost:8000/ChooseType";
      dispatch(postSliceAction.loginauthdata(data));
      localStorage.setItem("authdata", JSON.stringify(data));
    }
  } catch (err) {
    toast(err.response.data.messaage);
  }
};

export const adduserdata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await MultiFileAPI.patch(`userpersonaldata`, formdata);
// we are sending formdata to redux store as API data has only successfull message.
    dispatch(postSliceAction.userdata(formdata));
    navigate(`/familyupdate`);
  } catch (error) {
    console.log(error);
  }
};

export const verifyuser = async (id, dispatch) => {
  const token1 = localStorage.getItem("authdata")
    ? JSON.parse(localStorage.getItem("authdata"))
    : "";

  id = token1?.id;
  try {
    const { data } = await API.get(`/userpersonaldata/${id}`);
    dispatch(postSliceAction.userdata(data));
  } catch (error) {
    console.log(error?.messaage);
  }
};

export const AddFamilydata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await API.patch(`familyAdd`, formdata);
    // dispatch(postSliceAction.familydata(data));
    // no need to set the data as it send only message
    navigate(`/Phase1disease`);
  } catch (error) {
    console.log(error);
  }
};

export const familyDataGet = async (userId, dispatch) => {
  try {
    const { data } = await API.get(`familyDataGet?userID=${userId}`);
    dispatch(postSliceAction.familydata(data));
  } catch (error) {
    console.log(error?.messaage);
  }
};

export const familyMemberDelete = async (id, dispatch) => {
  try {
    const data = await API.delete(`familyMemberDelete/${id}`);
  } catch (error) {
    console.log(error?.message);
  }
};
export const diseasedata = async (dispatch) => {
  try {
    const { data } = await API.get(`disease`);
    dispatch(diseaseSliceAction.diseasedata(data));
  } catch (error) {
    console.log(error?.messaage);
  }
};

export const Userdieseasdata = async (formdata, navigate) => {
  try {
    const data = await API.post(`dieasedata`, formdata);
    navigate("/dieasesTable");
  } catch (error) {
    console.log(error?.messaage);
  }
};

export const dieasesDataGet = async (userId, dispatch) => {
  try {
    const { data } = await API.get(`dieasesDataGet?userId=${userId}`);
    dispatch(diseaseSliceAction.userDiseaseData(data));
  } catch (error) {
    console.log(error?.messaage);
  }
};

export const dieasesCount = async (userId, dispatch) => {
  try {
    const { data } = await API.get(
      `dieasesDataGetandCountshow?userId=${userId}`
    );
    dispatch(diseaseSliceAction.dieasesCountShow(data));
  } catch (error) {
    console.log(error);
  }
};

export const saveFinalPrice = async (formData, navigate) => {
  try {
    const data = API.post(`finalPrice`, formData);
    navigate("/payment", { state: formData.finalPrice });
  } catch (error) {
    console.log(error);
  }
};

export const checkoutHandler = async (amount) => {
  try {
    const {data: {key}} = await API.get(`keyID`);
    const { data } = await API.post(`checkout`, { amount });

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: data?.order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "test",
      description: "Test Transaction",
      image: "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=2048x2048&w=is&k=20&c=3kie9V0cK6fGPuiVoOPbcoqkDQbdbojPP9S3bZUZDqo=",
      order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/paymenetVerification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    var rozerPay = new window.Razorpay(options);
    rozerPay.open();

  } catch (error) {
    console.log(error.messaage);
  }
};

export const finalSubmission = (formData) => {
  try {
    console.log("test")
const data = API.post(`pdfCreate`,formData);
  }
  catch (error){
console.log(error?.messaage)
  }
}
