import axios from "axios";


export const registerverifyapiurl = axios.get("http://localhost:3000/register")

export const registeruserapiurl =(formdata)=> axios.post("http://localhost:3000/register", formdata)

export const userudpateapiurl = (formdata) => axios.post("http://localhost:3000/userpersonaldata",formdata)

export const userfamilydataurl = (formValues) => axios.post("http://localhost:3000/userfamilydata", formValues)
