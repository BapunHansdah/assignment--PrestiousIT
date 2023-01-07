import react from "react";
import "../index.css";
import { useState, useRef, useEffect } from "react";

function Main() {
  const [value, setValue] = useState("default");
  const [selectedValue, setSelectedValue] = useState("default");
  const [values, setValues] = useState([]);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const optionArray = [
    { id: 1, value: "Select value" },
    { id: 2, value: "H" },
    { id: 3, value: "T" },
  ];

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  //if same value top increase by 20px and left will be previous incresed px and if different value
  //if different value top will be 0px and left will be increased by 20 px

  function submit() {
    if (selectedValue === "default") {
      alert("select a value");
      return;
    }

    setValue(selectedValue);

    //Check if there is no values
    const empty = values.length <= 0;

    //getting the last value of array
    const lastValue = values[values.length - 1];

    //if previous value is same as current value
    if (value === selectedValue) {
      setValues([
        ...values,
        {
          row: lastValue.row + 20,
          column: lastValue.column,
          value: selectedValue,
        },
      ]);
    } else {
      setValues([
        ...values,
        {
          row: 0,
          column: empty ? 0 : lastValue.column + 20,
          value: selectedValue,
        },
      ]);
    }

    setSelectedValue("default");
  }

  return (
    <>
      <div className="h-screen p-2">
        <div className="flex mt-10 justify-center gap-1 max-w-sm mx-auto">
          <select
            className="border border-black p-2 w-full"
            name="value"
            value={selectedValue}
            onChange={handleChange}
          >
            {optionArray.map((m, i) => {
              return <option key={m.id}>{m.value}</option>;
            })}
          </select>

          <button className={`bg-black text-white p-2`} onClick={submit}>
            Submit
          </button>
        </div> 
        <div className="flex justify-center mt-12 border  bg-gray-100 p-2">
          <div className="relative h-screen w-full">
            {values.map((m, i) => {
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${m.row}px`,
                    left: `${m.column}px`,
                  }}
                >
                  {m.value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
