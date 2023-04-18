import React, { useState } from "react";
import { useEffect } from "react";
import { diseasedata } from "../APICALL/APIcalls";
import { useDispatch, useSelector } from "react-redux";

export default function Phase1disease() {

    const [phase1data, setPhase1data] = useState([]) 
  const dispatch = useDispatch();
  const diseases = useSelector((state) => state.disease.diseasedata);

  useEffect(() => {
    diseasedata(dispatch);
  }, []);

  useEffect(() => {
   const phasecheck =  diseases.filter((item)=> item.type == "Low")
   setPhase1data(phasecheck)
  }, [diseases]);

  return(
  <>  <div>Phase1disease</div>
    {phase1data.map((item)=> {
        return (
            <h1>{item.name}</h1>
        )
    })}
    </>
    );
}
