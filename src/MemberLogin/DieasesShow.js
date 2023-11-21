import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dieasesCount, token } from "../APICALL/APIcalls";
import { useDispatch } from "react-redux";
import Commoncomponent from "./Commoncomponent";
import { useNavigate } from "react-router";

export default function DieasesShow() {
  const navigate = useNavigate();
  const userid = token?.id;
  const dispatch = useDispatch();
  const countData = useSelector((state) => state.disease.dieasesCountShow);
  const [isChecked, setIsChecked] = useState(false);
const [errorMessage, setErrorMessage] = useState();

  let ShowData = countData.reduce((acc, curr) => {
    acc[curr._doc.personId.fname] = acc[curr._doc.personId.fname]
      ? [...acc[curr._doc.personId.fname], curr._doc.diseasesID.name]
      : [curr._doc.diseasesID.name];
    return acc;
  }, {});

  let priceData = countData.reduce((acc, curr) => {
    acc.price = curr.price;
    acc[curr._doc.personId.fname] = acc[curr._doc.personId.fname]
      ? [...acc[curr._doc.personId.fname], acc.price + curr.price]
      : [curr.price];
    return acc;
  }, {});

  let totalPrice = 0;
  const deleteData = delete priceData.price;

  for (const key in priceData) {
    totalPrice += priceData[key].reduce((acc, value) => acc + value, 0);
  }

  useEffect(() => {
    dieasesCount(userid, dispatch);
  }, []);

  const arrValues = [];
  const dataValue = Object.entries(ShowData).forEach(([key, value]) => {
    arrValues.push({ name: key, disease: value.toString() });
  });

  const handleChange = () => {
    navigate({
      pathname: "/Phase1disease",
      search: "?id=1",
    });
  };

  const handleSubmitChange = () => {
    setIsChecked(!isChecked);
    setErrorMessage("")
  };

  const handleSubmit = () => {
    if(isChecked == true){

    }
    else{
        setErrorMessage("Please read and accpet.")
    }
  }

  return (
    <>
      <Commoncomponent />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Diease</th>
            <th>Price</th>
            <th>IsAgree</th>
          </tr>
          {arrValues.map((item, i) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.disease}</td>
                <td>{priceData[item.name].at(-1)}</td>
                <td>
                  <input
                    type="checkbox"
                    checked="ture"
                    onChange={() => handleChange()}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <th>Total Price</th>
            <td colSpan={2} className="totalPrice">
              {totalPrice}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          padding: "20px 0px 20px 10px",
          display: "flex",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <input
            type="checkbox"
            onChange={() => handleSubmitChange()}
            checked={isChecked}
          />
          <h3 style={{ marginLeft: "10px", marginTop: "4px" }}>
            I have read and accept the pricing
          </h3>
        </div>
      </div>
      <h1  style={{
          display: "flex",
          color: "red"
        }} >{errorMessage}</h1>
      <button
        style={{
          display: "flex",
          margin: "10px",
        }} onClick={()=> handleSubmit()}
      >
        Submit
      </button>
    
    </>
  );
}
