import React, { useState } from "react";
import { useEffect } from "react";
import {  diseasedata, token } from "../APICALL/APIcalls";
import { useDispatch, useSelector } from "react-redux";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";

export default function Phase2disease() {
  const userId = token?.id
  const navigate = useNavigate()
  const [phase1data, setPhase1data] = useState([]);
  const [diseasecheck, setDiseasecheck] = useState(false);
  const dispatch = useDispatch();
  const diseases = useSelector((state) => state.disease.diseasedata);

  useEffect(() => {
    diseasedata(dispatch);
  }, []);

  useEffect(() => {
    const phasecheck = diseases.filter((item) => item.type == "Medium");
    setPhase1data(phasecheck);
  }, [diseases]);

  const handleSubmit = () => {
    const formdata = new Object;
    formdata.userid = userId
    formdata.diseasedata = phase1data
    console.log(formdata,"formdata")
    // dieasesadd2(formdata, navigate)
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
                  diseasecheck={item.isChecked[item._id]}
                  onChange={() => handleDiseaseCheck(item._id)}
                />
              </td>
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
