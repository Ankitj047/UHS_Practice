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
  const toUpdateDiseases = diseases;
  const [newCheckData, setNewCheckData] = useState([]);

  useEffect(() => {
    diseasedata(dispatch);
    dieasesDataGet(userId, dispatch);
  }, []);

  useEffect(() => {
    const tempDisease = [...diseases];

    if (userDieaseData?.length > 0) {
      const arr = tempDisease.map((item) => {
        const index = userDieaseData.findIndex(
          (i) => i.diseasesID === item._id
        );
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
  }, [diseases, userDieaseData]);

  useEffect(() => {
    // logic to merge dieases with the family details and mark true to dieases
    const newFamilyData = familyData;
    const newData = [...newFamilyData, usergetdata];
    const UpdateFamilyWithDieseaseField = newData.map((item) => {
      return { ...item, isDieasesChecked: false };
    });
    const checkData = phase1data.map((item) => {
      return { ...item, addData: UpdateFamilyWithDieseaseField };
    });

    setNewCheckData(checkData);
  }, [diseases, userDieaseData, phase1data]);

  useEffect(() => {
    // Your logic here to update isDieasesChecked
    for (const userDisease of userDieaseData) {
      for (const checkItem of newCheckData) {
        if (userDisease.diseasesID === checkItem._id) {
          const updatedAddData = checkItem.addData.map((personData) => {
            if (userDisease.personId === personData._id) {
              return { ...personData, isDieasesChecked: true };
            }
            return personData;
          });

          checkItem.addData = updatedAddData;
        }
      }
    }
    setResultData(newCheckData);
  }, [phase1data, newCheckData, diseases, userDieaseData]);

  const handleSubmit = () => {
    Userdieseasdata(dieaseData, navigate);
  };

  const handleDiseaseCheck = (id) => {
    const updateData = resultData.map((item) => {
      if (item._id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });
    setResultData(updateData);
  };

  const handleDiseaseAdd = async (personId, dId, e) => {
    console.log(e.target.checked, "checkvalue");

    newCheckData.map((item) => {
      if (item._id == dId) {
        item.addData.map((resp) => {
          if (resp._id == personId) {
            console.log("calling");
          }
        });
      }
    });

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
      userDieaseData.map((item) => {
        if (item.personId == obj.personId) {
          if (item.diseasesID == obj.diseasesID) {
            const newItem = { ...item, ISchecked: false };
            setDieaseData([...dieaseData, newItem]);
          } else {
            setDieaseData([...dieaseData, obj]);
          }
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
                <td>Disease Name</td>
                <td>Disease Type</td>
                <td>ISEffective</td>
              </tr>
              {resultData.map((item) => {
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
                      <td>
                        {item.addData.map((resp) => {
                          return (
                            <tr>
                              <td>{resp.fname}</td>
                              <td>
                                <input
                                  type="checkbox"
                                  id={resp._id}
                                  onChange={(e) =>
                                    handleDiseaseAdd(resp._id, item._id, e)
                                  }
                                  value={resp.isDieasesChecked}
                                  checked={resp.isDieasesChecked}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </td>
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
