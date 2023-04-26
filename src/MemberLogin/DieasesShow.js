import React from 'react'
import { useSelector } from 'react-redux';

export default function DieasesShow() {
    const userDieaseData = useSelector((state) => state.disease.userDiseaseData);
    console.log(userDieaseData,"userDieaseData")
  return (
  <>
  <table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Diease</th>
        </tr>
        {userDieaseData.map((item)=> {
            return (
                <tr key={item.id}>
                    <td>{item.personId}</td>
                    <td>{item.diseasesID}</td>
                </tr>
            )
        })}
    </tbody>
    </table></>
  )
}
