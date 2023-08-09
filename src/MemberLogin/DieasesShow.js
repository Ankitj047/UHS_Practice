import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { dieasesCount, token } from '../APICALL/APIcalls';
import { useDispatch } from 'react-redux';
import Commoncomponent from './Commoncomponent';

export default function DieasesShow() {
    const userid = token?.id
    const dispatch = useDispatch()
const countData = useSelector((state)=> state.disease.dieasesCountShow)


let ShowData = countData.reduce((acc, curr) => {
    acc[curr._doc.personId.fname] = acc[curr._doc.personId.fname]
    ? [...acc[curr._doc.personId.fname], curr._doc.diseasesID.name]
    : [curr._doc.diseasesID.name];
    return acc;
}, {});

let priceData = countData.reduce((acc, curr) => {
    acc.price = curr.price;
    acc[curr._doc.personId.fname] = acc[curr._doc.personId.fname]
    ? [...acc[curr._doc.personId.fname], acc.price+curr.price]
    : [curr.price];
    return acc;
}, {});

   useEffect(()=>{
    dieasesCount(userid, dispatch)
   },[])
 
   const arrValues = []
const dataValue =  Object.entries(ShowData).forEach(([key, value]) => {
    arrValues.push({name: key , disease:value.toString()})
})


  return (
  <>
  <Commoncomponent/>
  <table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Diease</th>
            <th>Price</th>
        </tr>
        {
            arrValues.map((item, i)=> {
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.disease}</td>
                        <td>{priceData[item.name].at(-1)}</td>
                    </tr>
                )
            })
        }
        <tr>
            <th>Total Price</th>
        </tr>
    </tbody>
    </table></>
  )
}
