import React, {useEffect} from 'react'
import Progressbar from './Progressbar';
import { useParams } from "react-router-dom";

export default function FamailUpdate() {
  const {username} = useParams();

  useEffect(() => {
    setTimeout(() => {
      console.log(username,"params data");
    }, 1000);
    
  }, []);
  return (
    <>
    <div>FamailUpdate</div>
    <Progressbar bgcolor="orange" progress='30'  height={30} />
    <div>{username}</div>
    </>)
}
