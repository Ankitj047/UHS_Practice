import React, { useState } from "react";
import { useEffect } from "react";
import { diseasedata } from "../APICALL/APIcalls";
import { useDispatch, useSelector } from "react-redux";

export default function Phase1disease() {
  const [phase1data, setPhase1data] = useState([]);
  const [diseasecheck, setDiseasecheck] = useState(false);
  const dispatch = useDispatch();
  const diseases = useSelector((state) => state.disease.diseasedata);

  useEffect(() => {
    diseasedata(dispatch);
  }, []);

  useEffect(() => {
    const phasecheck = diseases.filter((item) => item.type == "Low");
    setPhase1data(phasecheck);
  }, [diseases]);

  const handleSubmit = () => {
    console.log(phase1data, "diseasecheck");
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
