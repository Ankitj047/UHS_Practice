// this code is for the excel import and read with api 

import React, { useState } from 'react'
import Commoncomponent from './Commoncomponent'
import { excelDataPost } from '../APICALL/APIcalls';
import { useDispatch, useSelector } from 'react-redux';
import { exceldatasliceAction } from '../store/slices/exceldataslice';

export default function AgentDynamic() {

  const dispatch = useDispatch();

  const excelGetData = useSelector((state)=> state?.exceldata?.exceldataupdate)
  const excelData = excelGetData?.RegisterData;
  console.log(excelGetData,"excelData")
  let formData = {}

  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

const handleChange = (e) => {
  let UploadedFile = e.target.files[0];

  let fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ];

  if (UploadedFile && fileType.includes(UploadedFile?.type)) {
    setTypeError(null);
    setExcelFile({...formData,file: UploadedFile})
  } else {
    setTypeError("Please choose Excel File");
    setExcelFile(null);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
excelDataPost(excelFile, dispatch)
}
  return (
    <>
    <Commoncomponent/>
    <>
      <div>For Agent Use</div>

      {/* upload file */}
      <form
        style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        onSubmit={handleSubmit}
      >
        <input type="file" required onChange={(e) => handleChange(e)} />
        <button type="submit">Upload</button>
        {typeError && (
          <div className="alert alert.danger" role="alert">
            {typeError}
          </div>
        )}
      </form>

      {/* view data */}

      {excelData ? (
        <table>
          <thead>
            <tr>
              {Object.keys(excelData[0]).map((item) => {
                return (
                  <>
                    <th
                      key={item}
                      style={{
                        padding: "5px",
                        borderColor: "black",
                        borderWidth: "2px",
                      }}
                    >
                      {item}
                    </th>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {excelData.map((individualData, index) => {
            return  <tr key={index}>
                {Object.keys(individualData).map((key) => {
                  return (
                    <>
                      <td key={key}  style={{
                        padding: "5px",
                        borderColor: "black",
                        borderWidth: "2px",
                      }}>{individualData[key]}</td>
                    </>
                  );
                })}
              </tr>;
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
    </>
  )
}
