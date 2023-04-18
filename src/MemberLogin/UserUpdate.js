import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";
import Commoncomponent from "./Commoncomponent";
import { adduserdata, token, verifyuser } from "../APICALL/APIcalls";

const initialstate = {
  fname: "",
  lname: "",
  age: "",
  email: "",
  phone: "",
  isaccept: false,
  diseasedes: "",
  profilephoto: "",
  userid: "",
};

export default function UserUpdate() {
  const userregisterid = token?.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState(initialstate);
  const [errormessage, setErrormessage] = useState("");

  const userdata = useSelector((state) => state.posts.userdata);
  const usergetdata = userdata;

  useEffect(() => {
    if (Object.keys(usergetdata).length > 0) {
      setFormdata(usergetdata);
    }
  }, [usergetdata]);

  useEffect(() => {
    verifyuser(userregisterid, dispatch, formdata);
  }, []);

  const handlsubmit = async (e) => {
    console.log(formdata, "formdata1");
    e.preventDefault();
    if (regexcheck() == true) {
      // formdata.userid = userregisterid;
      // setFormdata({...formdata})
      setFormdata({ ...formdata,userid: userregisterid });
      console.log(formdata, "formdata2");
      adduserdata(formdata, dispatch, navigate);
    } else {
      setErrormessage("Please Accept T&C");
    }
  };

  const handleImageChange = (e) => {

    console.log(e.target.files[0])
    setFormdata({...formdata, profilephoto: e.target.files[0]})
  }

  const regexcheck = () => {
    if (formdata.isaccept == false) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div>
          <Commoncomponent/>
          <div>
            <Progressbar progress="0" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src="Images/imphealth.jpg" className="userupdarImg" />
              </div>
              <form onSubmit={handlsubmit} className="col-6">
                <div>{errormessage}</div>
                <div className="container userupdate-container">
                  <div className="row">
                    <div className="heading">Pleaes Update The Form Below</div>
                    <div className="col-sm">
                      <input
                        placeholder="Please enter First Name"
                        value={formdata.fname}
                        onChange={(e) =>
                          setFormdata({ ...formdata, fname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row containerrow">
                    <div className="col-sm">
                      <input
                        placeholder="Please enter Last Name"
                        value={formdata.lname}
                        onChange={(e) =>
                          setFormdata({ ...formdata, lname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row containerrow">
                    <div className="col-sm">
                      <input
                        placeholder="Please enter email"
                        value={formdata.email}
                        onChange={(e) =>
                          setFormdata({ ...formdata, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row containerrow">
                    <div className="col-sm">
                      <input
                        placeholder="Please enter Phone number"
                        value={formdata.phone}
                        onChange={(e) =>
                          setFormdata({ ...formdata, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        placeholder="Please enter age"
                        value={formdata.age}
                        onChange={(e) =>
                          setFormdata({ ...formdata, age: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row containerrow">
                    <div className="col-sm">
                      <textarea
                        type="text"
                        rows="4"
                        cols="50"
                        placeholder="Please Describe Disease if Any"
                        value={formdata.diseasedes}
                        onChange={(e) =>
                          setFormdata({
                            ...formdata,
                            diseasedes: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row containerrow">
                    {/* <div style={{display: "flex"}}>
                      <div>Pleaes Upload Your Photo</div>
                      <div>
                        <button className="addfiles">Add Photo</button>
                        <input
                          id="fileupload"
                          type="file"
                          style={{ display: "none", marginLeft: "5px" }}
                        />
                      </div>
                    </div> */}
                   <div style={{display: "flex"}}>
                      <div>Pleaes Upload Your Photo</div>
                      <div>
                        <input
                          type="file"
                          multiple={false}
                          name="photo"
                          style={{marginLeft: "5px" }}
                          defaultValue={formdata.profilephoto}
                          onChange={(e)=> handleImageChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row containerrow">
                    <div className="col-sm">
                      <input
                        type="checkbox"
                        checked={formdata.isaccept}
                        onChange={() => {
                          setFormdata({
                            ...formdata,
                            isaccept: !formdata.isaccept,
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm">
                      <label>I have read and Accept T&C</label>
                    </div>
                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
