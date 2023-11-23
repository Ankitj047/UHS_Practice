import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";

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

  return (
    <>
     <div>
        <Commoncomponent/>
      </div>
      <Progressbar bgcolor="#59E659" progress="90" height={90} />
      <div>{finalPrice}</div>
    </>
  );
}
