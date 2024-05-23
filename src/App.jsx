import React from "react";
import { useState } from "react";
import "./App.css";
import UniversalInput from "./UniversalInput";

const App = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [fourValue, setFourValue] = useState("");
  const [fiveValue, setFiveValue] = useState("");

  return (
    <div className="main">
      <h1 className="title">THIS IS NOT A TEST TASK</h1>
      <div className="inputItems">
        <UniversalInput
          type="number"
          disabled={false}
          value={firstValue}
          onChange={(e) => setFirstValue(e?.target?.value)}
          placeholder="Number type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={secondValue}
          onChange={(e) => setSecondValue(e?.target?.value)}
          placeholder="Text type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          multiline={true}
          disabled={false}
          value={thirdValue}
          onChange={(e) => setThirdValue(e?.target?.value)}
          placeholder="Text multiline type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={fourValue}
          onChange={(e) => setFourValue(e?.target?.value)}
          mask={"111-111"}
          placeholder="With mask"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={fiveValue}
          onChange={(e) => setFiveValue(e?.target?.value)}
          options={[
            { value: "first element", label: "first element" },
            { value: "second element", label: "second element" },
            { value: "third element", label: "third element" },
          ]}
          placeholder="Another type"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          }}
          className="inputItem"
        />
      </div>
    </div>
  );
};

export default App;
