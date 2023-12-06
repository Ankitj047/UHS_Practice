import React, { useState } from "react";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";
import { finalSubmission, token } from "../APICALL/APIcalls";

export default function Final() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [error, setError] = useState();


  const userId = token?.id;

  const formData = {
    userId: userId
  }
  
  const handleClick1 = () => {
    setCheck1(!check1);
    setError()
  };

  const handleClick2 = () => {
    setCheck2(!check2);
    setError()
  };
  const handleClick3 = () => {
    setCheck3(!check3);
    setError()
  };
  const handleClick4 = () => {
    setCheck4(!check4);
    setError()
  };
  const handleClick5 = () => {
    setCheck5(!check5);
    setError()
  };

  const handleSubmit = () => {
    
    if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true) {

        finalSubmission(formData)
        
        setError()      
    }
    else{
        setError("Please accept all T&C");
    }
  };

  return (
    <>
      <div>
        <Commoncomponent />
      </div>
      <Progressbar bgcolor="#4CBB17" progress="95" height={95} />

      <div className="finalPageMainSection">
        <div className="finalPageSection">
          <input type="checkbox" onClick={() => handleClick1()} />
          <div className="finalPageDivSection">I accept the T&C 1.</div>
        </div>
        <div className="finalPageSection">
          <input type="checkbox" onClick={() => handleClick2()} />
          <div className="finalPageDivSection">I accept the T&C 2.</div>
        </div>
        <div className="finalPageSection">
          <input type="checkbox" onClick={() => handleClick3()} />
          <div className="finalPageDivSection">I accept the T&C 3.</div>
        </div>
        <div className="finalPageSection">
          <input type="checkbox" onClick={() => handleClick4()} />
          <div className="finalPageDivSection">I accept the T&C 4.</div>
        </div>
        <div className="finalPageSection">
          <input type="checkbox" onClick={() => handleClick5()} />
          <div className="finalPageDivSection">I accept the T&C 5.</div>
        </div>
<div>{error}</div>
        <div className="button-container">
          <button className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </button>
          <div className="tooltip">I have read and accept all T&C</div>
        </div>
      </div>
    </>
  );
}
