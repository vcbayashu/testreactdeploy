import { useState } from "react";

const Navbar = () => {
  const [counter, setcounter] = useState(0);
  const [level, setlevel] = useState("Low");
  const [currcolor, setcolor] = useState("Green");

  // const ['actualVariable', 'used to update the variable'] = useState("initial value of the variable")
  const handleIncrement = () => {
    if (counter + 1 > 5 && counter + 1 < 10) {
      setlevel("Medium");
      setcolor("Pink");
    } else if (counter + 1 >= 10) {
      setlevel("High");
      setcolor("Red");
    } else if (counter + 1 <= 5) {
      setlevel("Low");
      setcolor("Green");
    }
    setcounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter - 1 > 5 && counter - 1 < 10) {
      setlevel("Medium");
      setcolor("Pink");
    } else if (counter - 1 >= 10) {
      setlevel("High");
      setcolor("Red");
    } else if (counter - 1 < 5) {
      setlevel("Low");
      setcolor("Green");
    }
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>The Current Count is {counter} </h1>
      <p style={{ color: "white", backgroundColor: currcolor }}>
        Level = {level}
      </p>
      <button
        style={{ color: "white", backgroundColor: "blue" }}
        onClick={() => handleIncrement()}
      >
        Increment
      </button>
      <button
        style={{ color: "white", backgroundColor: "black" }}
        onClick={() => handleDecrement()}
      >
        Decrement
      </button>
    </>
  );
};

export default Navbar;

// low=>yellow
// medium=>pink
// high=>red
