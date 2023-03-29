//  how to add or remove input field dynamically when user click on button in react.js
//https://sadam-bapunawar.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5

import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar";
import { useParams } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
export default function FamailUpdate() {
  const [spouseadd, setSpouseadd] = useState(false);

const handlesubmit = () => {
  console.log("called")
}
  return (
    <>
      <div>FamailUpdate</div>
      <div>
        <Commoncomponent />
      </div>
      <Progressbar bgcolor="orange" progress="30" height={30} />
      <form onSubmit={handlesubmit}>
        <div className="family-container">
          <div className="spouseheader"><div onClick={()=>setSpouseadd(!spouseadd)}>{spouseadd ? "Spouse Add ^" : "Spouse Add >"} </div></div>
        { spouseadd && <div className="family-container-inside">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <input placeholder="Plesse Enter Spouse First Name" />
                </div>
                <div className="col-sm">
                  <input placeholder="Plesse Enter Spouse Last Name" />
                </div>
                <div className="col-sm">
                  <input placeholder="Plesse Enter Spouse Age" />
                </div>
              </div>
        <button type="submit">Submit</button>
            </div>
          </div>}
        </div>
      </form>
    </>
  );
}
