import React, { useState } from "react";
import { useEffect } from "react";
import { Userdieseasdata, dieasesDataGet, diseasedata, token } from "../APICALL/APIcalls";
import { useDispatch, useSelector } from "react-redux";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";

export default function Phase1disease() {
  const userId = token?.id
  const navigate = useNavigate()
  const [phase1data, setPhase1data] = useState([]);
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.posts.userdata);
  const diseases = useSelector((state) => state.disease.diseasedata);
  const userDieaseData = useSelector((state)=> state.disease.userDiseaseData) 

  useEffect(() => {
    diseasedata(dispatch);
    dieasesDataGet(userId,dispatch)
  }, []);

  useEffect(() => {
    const phasecheck = diseases.filter((item) => item.type == "Low");
    setPhase1data(phasecheck);
    
    if (userDieaseData?.diseasesData?.length > 0){
      setPhase1data(userDieaseData?.diseasesData)
    }
  }, [diseases, userDieaseData]);

  const handleSubmit = () => {
    const formdata = new Object;
    formdata.userid = userId
    formdata.diseasesData = phase1data
    Userdieseasdata(formdata, navigate)
  };

  const handleDiseaseCheck = (id) => {
    const check = phase1data.map((item) => {
      if (item._id === id) {
        return ({...item, isChecked: !item.isChecked})
      } else {
        return item;
      }
    });
    setPhase1data(check)
  };

  return (
    <>
     <div className="container-fluid p-0">
        <div>
          <Commoncomponent/>
          <div>
            <Progressbar progress="50" bgcolor="orange" height={30}/>
          </div>
          <div>Pleaes add all the low type diseasedata</div>
      <table>
        <tr>
          <td>Name</td>
          <td>Disease</td>
          <td>ISAffect</td>
        </tr>
        {phase1data.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>
                <input
                  type="checkbox"
                  id={item._id}
                  value={item.isChecked}
                  onChange={() => handleDiseaseCheck(item._id)}
                  checked={item.isChecked}
                />
              </td>
              {item.isChecked == true && (
<table>
    <td>{userdata.fname}</td>
    <td> <input type="checkbox" /></td>
    {/* <td>{userdata.familydata}</td> */}
    {userdata?.familydata?.map((item)=> {
      return (
        <tr>
        <td>{item.fname}</td>
        <td> <input type="checkbox" /></td>
        </tr>
      )
    })}
</table>
              ) }
            </tr>
          );
        })}
      </table>
      <button onClick={()=>handleSubmit()}>Submit</button>
      </div>
      </div>
    </>
  );
}
