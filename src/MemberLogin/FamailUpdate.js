//https://www.tabnine.com/code/javascript/functions/axios/patch

import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar";
import { useParams } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
import { useDispatch, useSelector } from "react-redux";
import { userfamilydataurl } from "../APICALL";
import { userSliceAction } from "../store/slices/userSlice";

export default function FamailUpdate() {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState([
    { fname: "", lname: "", age: "" },
  ]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formValues, "formValues");
    const { data } = userfamilydataurl(formValues)
      .then((item) => item)
      .catch((err) => console.log(err));

    dispatch(userSliceAction.userfamilydata(data));
  };

  const handleChange = (i, e) => {
    let newformvalues = [...formValues];
    formValues[i][e.target.name] = e.target.value;
    console.log(formValues[i]);
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
        <Commoncomponent />
      </div>
      <Progressbar bgcolor="orange" progress="30" height={30} />
      <form onSubmit={handlesubmit}>
      <div className="family-container">
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
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    name="lname"
                    placeholder="enter your lname"
                    value={item.lname || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="text"
                    name="age"
                    placeholder="enter your age"
                    value={item.age || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>

                <div className="col-sm">
                  {index ? (
                    <button onClick={() => removethisfield(index)}>
                      Rmove
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <button type="button" onClick={() => addformField()} className="addchlidren">
            Add Children
          </button>
        </div>
        </div>
          <button type="submit">Submit</button>
      </form>
    </>
  );
}
