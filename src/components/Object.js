import { useState } from "react";

const Body = () => {
  const [bio, setbio] = useState({
    name: "Ashutosh",
    batch: "2023",
    branch: "ECE",
    college: "MMMUT",
  });
  const [color, setcolor] = useState("red");
  const handleupdatebio = () => {
    if (bio.name === "Ashutosh") {
      const newBio = {
        name: "Satyam",
        batch: "2022",
        branch: "CSE",
        college: "AKG",
      };
      setbio(newBio);
      setcolor("blue");
    } else if (bio.name === "Satyam") {
      const newBio = {
        name: "Ashutosh",
        batch: "2023",
        branch: "ECE",
        college: "MMMUT",
      };
      setbio(newBio);
      setcolor("red");
    }
  };
  const handleupdatebranch = () => {
    if (bio.branch === "ECE") {
      const updatedObject = { ...bio };
      updatedObject.branch = "Mechanical";
      setbio(updatedObject);
    } else if (bio.branch === "Mechanical") {
      const updatedObject = { ...bio };
      updatedObject.branch = "ECE";
      setbio(updatedObject);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <h1>
          Hello My name is {bio.name}, and I study in {bio.college}. My branch
          is {bio.branch} and my batch is {bio.batch}
        </h1>
        <button onClick={() => handleupdatebio()} type="button">
          {" "}
          Update Bio{" "}
        </button>
        <button onClick={() => handleupdatebranch()} type="button">
          {" "}
          Update branch
        </button>
      </div>
    </>
  );
};
export default Body;
