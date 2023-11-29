import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";
import { checkoutHandler } from "../APICALL/APIcalls";


export default function PaymentGateway() {
  const { state } = useLocation();

  const [finalPrice, setFinalPrice] = useState();

  useEffect(() => {
    if (state == undefined || state == null) {
      alert("create APi for get price and update")
    } else {
      setFinalPrice(state);
    }
  }, []);


  const payAmout = () => {
    checkoutHandler(500)
  }

  return (
    <>
     <div>
        <Commoncomponent/>
      </div>
      <Progressbar bgcolor="#59E659" progress="90" height={90} />
      <div style={{display:"flex", alignItems: "center"}}>
<div style={{fontSize: "40px", fontWeight: "bold", marginRight: "10px"}}>Your Final amount to pay is: </div>
      <div style={{fontSize: "40px", fontWeight: "bold",marginRight: "10px"}}>{finalPrice}</div>
      <button style={{fontSize: "20px", fontWeight: "bold"}} onClick={()=>payAmout()}>Pay</button>
      </div>
    </>
  );
}
