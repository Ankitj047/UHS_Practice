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
  userId: "",
  ISchecked: false,
};

export default function Phase1disease() {
  const userId = token?.id;
  const navigate = useNavigate();
  const [phase1data, setPhase1data] = useState([]);
  const [resultData, setResultData] = useState([]);
  const dispatch = useDispatch();
  const [userDiease, setUserDiease] = useState(initialDieaseData);
  const [dieaseData, setDieaseData] = useState([]);
  const userdata = useSelector((state) => state.posts.userdata);
  const diseases = useSelector((state) => state.disease.diseasedata);
  const userDieaseData = useSelector((state) => state.disease.userDiseaseData);
  const familyData = useSelector((state) => state.posts.familydata);
  const usergetdata = userdata;
const toUpdateDiseases = diseases


  const newFamilyData = familyData;
  const newData = [...newFamilyData, usergetdata];
 const checkData = toUpdateDiseases.map((item)=> {return {...item, addData:newData}})

 console.log(checkData,"checkData")
  // Create a map of secondArray for efficient lookup
  const secondArrayMap = new Map(newData.map((item) => [item._id, item]));

  // Match person IDs and update the firstArray with corresponding data from secondArray

  useEffect(() => {
    diseasedata(dispatch);
    dieasesDataGet(userId, dispatch);
  }, []);

  useEffect(() => {
    // setPhase1data(diseases);
    const resultArray = userDieaseData.map((item) => ({
      ...item,
      personData: secondArrayMap.get(item.personId),
    }));
    const tempDisease = [...diseases];

    if (resultArray?.length > 0) {
      const arr = tempDisease.map((item) => {
        const index = resultArray.findIndex((i) => i.diseasesID === item._id);
        if (index !== -1) {
          return {
            ...item,
            isChecked: true,
          };
        } else {
          return item;
        }
      });
      setPhase1data(arr);
    } else {
      setPhase1data(diseases);
    }

    setResultData(resultArray);
    

  }, [diseases, userDieaseData]);



  const handleSubmit = () => {
    Userdieseasdata(dieaseData, navigate);
  };

  const handleDiseaseCheck = (id) => {
    const updateData = phase1data.map((item) => {
      if (item._id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });
    setPhase1data(updateData);
  };

  const handleDiseaseAdd = async (personId, dId, e) => {
    const obj = {
      ...userDiease,
      personId: personId,
      diseasesID: dId,
      userId: userId,
      ISchecked: e.target.checked === true ? true : false,
    };
    setUserDiease(obj);

    if (obj.ISchecked == true) {
      setDieaseData([...dieaseData, obj]);
    } else {
      const check = dieaseData.map((item) => {
        if (item.personId == obj.personId) {
          if (item.diseasesID == obj.diseasesID) {
            item.ISchecked = e.target.checked;
            return item;
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div>
          <Commoncomponent />
          <div>
            <Progressbar progress="50" bgcolor="orange" height={30} />
          </div>
          <div>Pleaes add all the type of diseasedata</div>
          <table>
            <tbody>
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
                        {newData?.map((resp) => {
                          return (
                            <tr key={resp._id}>
                              <td>{resp.fname}</td>
                              <td>
                                  <input
                                    type="checkbox"
                                    id={resp._id}
                                    onChange={(e) =>
                                      handleDiseaseAdd(resp._id, item._id, e)
                                    }
                                    value={userDiease.ISchecked}
                                    checked={resp.isChecked}
                                  />
                                </td>

{/* {resultData.length>0 && resultData.map((itemOne) => {
                                if (
                                  item._id == itemOne.diseasesID &&
                                  resp._id == itemOne.personId
                                ) {
                                  return (
                                    <>
                                      <td>
                                        <input
                                          type="checkbox"
                                          id={resp._id}
                                          onChange={(e) =>
                                            handleDiseaseAdd(
                                              resp._id,
                                              item._id,
                                              e
                                            )
                                          }
                                          value={userDiease.ISchecked}
                                          checked={true}
                                          // checked={resultArray.map((itemOne)=> item._id == itemOne.diseasesID && resp._id == itemOne.personId) ? true : resp.isChecked }
                                        />
                                      </td>
                                    </>
                                  );
                                }
                              })} */}
                            </tr>
                          );
                        })}
                      </table>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </>
  );
}
