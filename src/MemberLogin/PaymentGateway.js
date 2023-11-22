import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
      <div>{finalPrice}</div>
    </>
  );
}
