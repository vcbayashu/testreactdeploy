import React, { useState } from "react";

const ArrayOfObject = () => {
  const [students, setstudents] = useState([
    { name: "Harshal", batch: "ece", package: "8lpa" },
    { name: "Adarsh", batch: "cse", package: "9lpa" },
    { name: "Vikrant", batch: "mech", package: "5lpa" },
    { name: "Tarang", batch: "civil", package: "15lpa" },
  ]);
  const deleteMan = () => {
    let oldStudents = [...students];
    let newStudents = oldStudents.filter((v, i) => v.name !== "Adarsh");
    setstudents(newStudents);
  };
  const deleteMan2 = () => {
    let oldStudents = [...students];
    let newStudents = oldStudents.filter((v, i) => v.name !== "Tarang");
    setstudents(newStudents);
  };
  const deleteCurrent = (selectedStudent) => {
    let oldStudents = [...students];
    let newStudents = oldStudents.filter(
      (v, i) => v.name !== selectedStudent.name
    );
    setstudents(newStudents);
  };
  return (
    <>
      <h1>This is Students' database</h1>
      {students.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Name: {v.name} </li>
              <li> Batch: {v.batch} </li>
              <li> Package: {v.package} </li>
              <button onClick={() => deleteCurrent(v)} type="button">
                Delete Me
              </button>
            </ul>
          </div>
        );
      })}
      <button onClick={() => deleteMan()} type="button">
        {" "}
        Delete Adarsh
      </button>
      <button onClick={() => deleteMan2()} type="button">
        {" "}
        Delete Tarang
      </button>
    </>
  );
};

export default ArrayOfObject;
