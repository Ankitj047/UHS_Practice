import axios from "axios";


export const registerverifyapiurl = axios.get("http://localhost:3000/register")

export const registeruserapiurl =(formdata)=> axios.post("http://localhost:3000/register", formdata)

export const userudpateapiurl = (formdata) => axios.post("http://localhost:3000/userpersonaldata",formdata)

// export const userfamilydataurl = (formValues) => axios.post("http://localhost:3000/userfamilydata", formValues)

export const userfamilydataurl = (userid, formValues) => axios.patch(`http://localhost:3000/userpersonaldata?userid=${userid}`, formValues)

export const getuserdataurl = axios.get("http://localhost:3000/userpersonaldata")