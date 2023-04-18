//https://www.tabnine.com/code/javascript/functions/axios/patch

import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar";
import { useParams } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import { familydata, token } from "../APICALL/APIcalls";
import { TiDeleteOutline } from "react-icons/ti";

export default function FamailUpdate() {
  const userid = token.id
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState([
    { fname: "", lname: "", age: "" },
  ]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = {userid: userid, familydata: formValues}
    familydata(familydata)
  };

  const handleChange = (i, e) => {
    let newformvalues = [...formValues];
    formValues[i][e.target.name] = e.target.value;
    setFormValues(newformvalues);
  };
  const removethisfield = (i) => {
    let newformvalues = [...formValues];
    newformvalues.splice(i, 1);
    setFormValues(newformvalues);
  };
  const addformField = (e) => {
    setFormValues([...formValues, { fname: "", lname: "", age: "" }]);
  };
  return (
    <>
      <div>
        <Commoncomponent/>
      </div>
      <Progressbar bgcolor="orange" progress="30" height={30} />
      <form onSubmit={handlesubmit}>
      <div className="family-container">
          <button type="button" onClick={() => addformField()} className="addchlidren">
            Add Children
          </button>
        {formValues.map((item, index) => (
          <div key={index} className="family-container-inside">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <input
                    type="text"
                    name="fname"
                    placeholder="enter your fname"
                    value={item.fname || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    name="lname"
                    placeholder="enter your lname"
                    value={item.lname || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    name="age"
                    placeholder="enter your age"
                    value={item.age || ""}
                    onChange={(e) => handleChange(index, e)}
                    className="form-control"
                  />
                </div>

                <div className="col-sm">
                  {index ? (
                    <button onClick={() => removethisfield(index)} style={{backgroundColor: "red"}}>
                     <TiDeleteOutline className="deleteIcon" />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
        </div>
        </div>
      </form>
      <button type="submit" className="familysubmit">Submit</button>
    </>
  );
}
