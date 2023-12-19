import React, { useEffect, useState,  } from "react";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";
import { finalSubmission, token } from "../APICALL/APIcalls";
import { useDispatch, useSelector } from "react-redux";
import { SubmissionSliceAction } from "../store/slices/submission";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Final() {

  const dispatch = useDispatch();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [error, setError] = useState();
  const [ loader, setLoader] = useState(false)
  const [show, setShow] = useState(false)

  const submissionData = useSelector((state)=> state?.submission?.finalSubmission)

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

        finalSubmission(formData, dispatch)
        
        setError()      
    }
    else{
        setError("Please accept all T&C");
    }
  };
  
  const showModal = () => {
    setShow(!show)
  }
  return (
    <>
      <div>
        <Commoncomponent />
      </div>
      
      {submissionData == undefined ? <Progressbar bgcolor="#4CBB17" progress="95" height={95} />  : <Progressbar bgcolor="#4CBB17" progress="100" height={100} /> }

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
          <button className="submit-button" onClick={()=>showModal()}>
           I have read and Accept all t&C.
          </button>
          <div className="tooltip">I have read and accept all T&C</div>
        </div>
      </div>
      <div>
      {show && <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>showModal()}>Close</Button>
          <Button variant="primary" onClick={() => handleSubmit()}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>}
      </div>
    </>
  );
}
