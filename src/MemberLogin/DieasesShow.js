import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { dieasesCount, token } from '../APICALL/APIcalls';
import { useDispatch } from 'react-redux';

export default function DieasesShow() {
    const userid = token?.id
    const dispatch = useDispatch()
const countData = useSelector((state)=> state.disease.dieasesCountShow)


console.log(countData,"countData")

   useEffect(()=>{
    dieasesCount(userid, dispatch)
   },[])
 
  return (
  <>
  <table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Diease</th>
        </tr>
        {countData.map((item)=> {
            return (
                <tr>
                    <th>{item.personId.fname}</th>
                    <th>{item.diseasesID.name}</th>
                </tr>
            )
        })}
    </tbody>
    </table></>
  )
}
