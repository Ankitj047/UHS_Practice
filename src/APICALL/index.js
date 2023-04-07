import axios from "axios";

// const baseUrl = process.env.REACT_APP_BAESURL
const baseUrl = "http://localhost:5000"

export const registerverifyapiurl = axios.get(`${baseUrl}/register`)

export const registeruserapiurl =(formdata)=> axios.post(`${baseUrl}/register`, formdata)

export const userudpateapiurl = (id, formdata) => axios.put(`${baseUrl}/userpersonaldata/${id}`,formdata)

// export const userfamilydataurl = (formValues) => axios.post("http://localhost:3000/userfamilydata", formValues)

export const userfamilydataurl = (userid, formValues) => axios.patch(`${baseUrl}/userpersonaldata?userid=${userid}`, formValues)

export const getuserdataurl = axios.get(`${baseUrl}/userpersonaldata`)