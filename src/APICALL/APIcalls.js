import axios from "axios";
import { postSliceAction } from "../store/slices/postslice";
import { diseaseSliceAction } from "../store/slices/diseaseslice";

const baseurl = process.env.REACT_APP_BAESURL;

export const token = localStorage.getItem("authdata")
  ? JSON.parse(localStorage.getItem("authdata"))
  : "";

const API = axios.create({
  baseURL: baseurl,
});

API.interceptors.request.use((req) => {
 if(localStorage.getItem('authdata')) req.headers.Authorization = `${JSON.parse(localStorage.getItem("authdata"))?.token}` ;
 return req
})

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
      navigate("/ChooseType");
      // window.location.href = "http://localhost:8000/ChooseType"
      dispatch(postSliceAction.loginauthdata(data));
      localStorage.setItem("authdata", JSON.stringify(data));
    }
  } catch (err) {
    console.log(err);
  }
};

export const adduserdata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await MultiFileAPI.patch(`userpersonaldata`, formdata);
    // dispatch(postSliceAction.userdata(data));
    console.log(data,"data")
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


// export const subjectdata = async (dispatch) => {
  //   try {
    //     const { data } = await API.get(`subjectroute`);
    //     dispatch(postSliceAction.subjectdata(data));
    //     console.log(data,"datasubjext")
//   } catch (error) {
//     console.log(error?.messaage);
//   }
// };


export const AddFamilydata = async (formdata, dispatch, navigate) => {
  try {
    const { data } = await API.patch(`familyAdd`, formdata);
    dispatch(postSliceAction.familydata(data));
    navigate(`/Phase1disease`);
  } catch (error) {
    console.log(error);
  }
};

export const familyDataGet = async (userId,dispatch) => {
  try {
    const {data }= await API.get(`familyDataGet?userID=${userId}`)
    dispatch(postSliceAction.familydata(data));
  } catch (error) {
    console.log(error?.messaage)
  }
}

export const familyMemberDelete = async (id,dispatch) => {
  try {
    const data = await API.delete(`familyMemberDelete/${id}`)
  } catch (error) {
    console.log(error?.message)
  }
}
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
      navigate("/dieasesTable")
    } catch (error) {
      console.log(error?.messaage);
    }
  };
  
  export const dieasesDataGet = async (userId, dispatch) => {
    try {
      const {data}= await API.get(`dieasesDataGet?userId=${userId}`);
      dispatch(diseaseSliceAction.userDiseaseData(data))
    } catch (error) {
      console.log(error?.messaage);
    }
  };


  export const dieasesCount  = async (userId, dispatch) => {
    try {
      const {data} = await API.get(`dieasesDataGetandCountshow?userId=${userId}`)
     dispatch(diseaseSliceAction.dieasesCountShow(data))
    } catch (error) {
      console.log(error)
    }
  }