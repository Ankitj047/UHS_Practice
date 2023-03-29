import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar";
import { useParams } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
import { useDispatch, useSelector } from "react-redux";
import { userfamilydataurl } from "../APICALL";
import { userSliceAction } from "../store/slices/userSlice";

export default function FamailUpdate() {
const dispatch = useDispatch()

  const [formValues, setFormValues] = useState([
    { fname: "", lname: "", age: "" },
  ]);

  const handlesubmit = async(e) => {
    e.preventDefault();
    console.log(formValues, "formValues");
    const {data} = userfamilydataurl(formValues).then((item)=> item).catch((err)=> console.log(err))

dispatch(userSliceAction.userfamilydata(data))
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
      <div>FamailUpdate</div>
      <div>
        <Commoncomponent />
      </div>
      <Progressbar bgcolor="orange" progress="30" height={30} />
      <form onSubmit={handlesubmit}>
        {formValues.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="fname"
              placeholder="enter your fname"
              value={item.fname || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <input
            type="text"
            name="lname"
            placeholder="enter your lname"
            value={item.lname || ""}
            onChange={(e) => handleChange(index, e)}
            />
            <input
              type="text"
              name="age"
              placeholder="enter your age"
              value={item.age || ""}
              onChange={(e) => handleChange(index,e)}
            />
            {index ? (
              <button onClick={() => removethisfield(index)}>Rmove</button>
            ) : null}
          </div>
        ))}
        <div>
          <button type="button" onClick={() => addformField()}>
            Add Children
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
