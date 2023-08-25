//https://www.tabnine.com/code/javascript/functions/axios/patch

import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar";
import { useParams } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../store/slices/userSlice";
import {
  AddFamilydata,
  familyDataGet,
  familyMemberDelete,
  token,
} from "../APICALL/APIcalls";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function FamailUpdate() {
  const userid = token?.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState([
    { fname: "", lname: "", age: "" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState()
  const [uid, setUid] = useState()
  const familyData = useSelector((state) => state.posts.familydata);

  useEffect(() => {
    familyDataGet(userid, dispatch);
  }, []);

  useEffect(() => {
    if (familyData?.length > 0) {
      setFormValues(familyData);
    }
  }, [familyData]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = { userID: userid, familyData: formValues };
    AddFamilydata(formdata, dispatch, navigate);
    familyDataGet(userid, dispatch);
  };

  const handleChange = (i, e) => {
    let newArr = formValues.map((item, index) => {
      if (index === i) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      } else {
        return item;
      }
    });
    setFormValues(newArr);
  };

  const removethisfield = (i, uid) => {
    let newformvalues = [...formValues];
    newformvalues.splice(i, 1);
    if (uid !== undefined) {
      familyMemberDelete(uid, dispatch);
    }
    setFormValues(newformvalues);
    setShowModal(false);
  };

  const addformField = (e) => {
    setFormValues([...formValues, { fname: "", lname: "", age: "" }]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = (id, uid) => {
    setId(id)
    setUid(uid)
    setShowModal(true)
  }
  return (
    <>
      <div>
        <Commoncomponent />
      </div>
      <Progressbar bgcolor="orange" progress="30" height={30} />
      <form onSubmit={handlesubmit}>
        <div className="family-container">
          <button
            type="button"
            onClick={() => addformField()}
            className="addchlidren"
          >
            Add Children
          </button>
          {formValues.map((item, index) => (
            <div key={index} className="family-container-inside">
              <div className="container">
                <div className="row">
                  <div className="col-sm" style={{ display: "none" }}>
                    {item?._id}
                  </div>
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
                      <button
                        // onClick={(uid) => removethisfield(index, item._id)}
                        onClick={(uid) => handleOpen(index, item._id)}
                        style={{ backgroundColor: "red" }}
                        type="button"
                      >
                        <TiDeleteOutline className="deleteIcon" />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
        <button type="submit" className="familysubmit">
          Submit
        </button>
      </form>
                        <Modal
                          show={showModal}
                          onHide={handleClose}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                              Modal heading
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h4>Centered Modal</h4>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={() => handleClose()}>Close</Button>
                            <Button
                              onClick={() =>
                                removethisfield(id, uid)
                              }
                            >
                              Save
                            </Button>
                          </Modal.Footer>
                        </Modal>
    </>
  );
}
