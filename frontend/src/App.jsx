import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [result, setResult] = useState(0);

  const handleButtonClick = () => {
    const sum = parseInt(valueOne) + parseInt(valueTwo);
    setResult(sum);
  };

  const handleCalculate = () => {
    const sum = parseInt(valueOne) + parseInt(valueTwo);
    setResult(sum);
    handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:3000/api/calculations/", {
          value_one: valueOne,
          value_two: valueTwo,
          operand: "+",
        })
        .then((response) => {
          alert(response.data);
        });
    } catch (error) {
      alert("Error occured");
    }
  };

  return (
    <div className="container">
      <div className="center">
        <div className="display">
          <p>{result}</p>
        </div>
        <div>
          <div>
            <label>Enter the first value</label>
            <input
              type="number"
              value={valueOne}
              onChange={(e) => setValueOne(e.target.value)}
            />
          </div>
          <button name="+" onClick={handleButtonClick}>
            +
          </button>
          <div>
            <label>Enter the second value</label>
            <input
              type="number"
              value={valueTwo}
              onChange={(e) => setValueTwo(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button name="=" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
