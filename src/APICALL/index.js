import axios from "axios";


export const getregisterApiurl = axios.get("http://localhost:3000/register")

export const registeruserapiurl =(formdata)=> axios.post("http://localhost:3000/register", formdata)

export const userudpateapiurl = (formdata) => axios.post("http://localhost:3000/userpersonaldata",formdata)