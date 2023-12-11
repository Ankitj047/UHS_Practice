// this code is only frontend excel file add and read 

import React, { useState } from "react";
import Commoncomponent from "./Commoncomponent";
import * as xlsx from "xlsx";

export default function Agent() {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleChange = (e) => {
    let UploadedFile = e.target.files[0];

    let fileType = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    if (UploadedFile && fileType.includes(UploadedFile?.type)) {
      setTypeError(null);
      let reader = new FileReader();
      reader.readAsArrayBuffer(UploadedFile);
      reader.onload = (e) => {
        setExcelFile(e.target.result);
      };
    } else {
      setTypeError("Please choose Excel File");
      setExcelFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workBook = xlsx.read(excelFile);
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      const data = xlsx.utils.sheet_to_json(workSheet, {
        raw: false,
       });
      setExcelData(data);
    }
  };

  return (
    <>
      <Commoncomponent />
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
  );
}
