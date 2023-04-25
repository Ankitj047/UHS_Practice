import React, { useState } from "react";
import { useEffect } from "react";
import {
  Userdieseasdata,
  dieasesDataGet,
  diseasedata,
  token,
} from "../APICALL/APIcalls";
import { useDispatch, useSelector } from "react-redux";
import Commoncomponent from "./Commoncomponent";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router";

const initialDieaseData = {
  personId: "",
  diseasesID: "",
  userid: "",
  ISchecked: false,
};

export default function Phase1disease() {
  const userId = token?.id;
  const navigate = useNavigate();
  const [phase1data, setPhase1data] = useState([]);
  const dispatch = useDispatch();
  const [userDiease, setUserDiease] = useState(initialDieaseData);
  const [dieaseData, setDieaseData] = useState([]);
  const userdata = useSelector((state) => state.posts.userdata);
  const diseases = useSelector((state) => state.disease.diseasedata);
  const userDieaseData = useSelector((state) => state.disease.userDiseaseData);
  const familyData = useSelector((state) => state.posts.familydata);
  const usergetdata = userdata;

  useEffect(() => {
    diseasedata(dispatch);
    dieasesDataGet(userId, dispatch);
  }, []);

  useEffect(() => {
    const phasecheck = diseases.filter((item) => item.type == "Low");
    setPhase1data(diseases);

    if (userDieaseData?.diseasesData?.length > 0) {
      setPhase1data(userDieaseData?.diseasesData);
    }
  }, [diseases, userDieaseData]);

  const handleSubmit = () => {
    console.log(dieaseData, "dieaseData");
    const sendData = dieaseData.filter((item) => item.ISchecked == true);
    Userdieseasdata(dieaseData, navigate);
  };

  const handleDiseaseCheck = (id) => {
    const check = phase1data.map((item) => {
      if (item._id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });
    setPhase1data(check);
  };

  const handleDiseaseAdd = async (personId, dId, e) => {
    const obj = {
      ...userDiease,
      personId: personId,
      diseasesID: dId,
      userid: userId,
      ISchecked: e.target.checked === true ? true : false,
    };
    setUserDiease(obj);

    if (obj.ISchecked == true) {
      setDieaseData([...dieaseData, obj]);
    } else {
        const check = dieaseData.map((item) => {
        if (item.personId == obj.personId){
          if(item.diseasesID == obj.diseasesID){
          item.ISchecked = e.target.checked
          return item
        }else{
          return item
        }
        }else{
          return item
        }
        })
      }
      
  };

  console.log(dieaseData, "setDieaseData");

  return (
    <>
      <div className="container-fluid p-0">
        <div>
          <Commoncomponent />
          <div>
            <Progressbar progress="50" bgcolor="orange" height={30} />
          </div>
          <div>Pleaes add all the low type diseasedata</div>
          <table>
            <tr>
              <td>Name</td>
              <td>Disease</td>
              <td>ISAffect</td>
            </tr>
            {phase1data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={item._id}
                      value={item.isChecked}
                      onChange={() => handleDiseaseCheck(item._id)}
                      checked={item.isChecked}
                    />
                  </td>
                  {item.isChecked == true && (
                    <table>
                      <td>{userdata.fname}</td>
                      <td>
                        {" "}
                        <input
                          type="checkbox"
                          id={userdata._id}
                          onChange={(e) =>
                            handleDiseaseAdd(userdata._id, item._id, e)
                          }
                          value={userDiease.ISchecked}
                        />
                      </td>
                      {familyData?.map((resp) => {
                        return (
                          <tr>
                            <td>{resp.fname}</td>
                            <td>
                              {" "}
                              <input
                                type="checkbox"
                                id={resp._id}
                                onChange={(e) =>
                                  handleDiseaseAdd(resp._id, item._id, e)
                                }
                                value={userDiease.ISchecked}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </table>
                  )}
                </tr>
              );
            })}
          </table>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </>
  );
}
