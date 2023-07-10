import { useState, useEffect } from "react";
import logger from "./logger";
import "./App.css";
import axios from "axios";
import { handleCalculate } from "./hooks/handleCalculate";
const App = () => {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [length, setLength] = useState(5);
  const [operandOne, setOperandOne] = useState(valueOne);
  const [operandTwo, setOperandTwo] = useState(valueTwo);

  //Select operator
  const handleButtonClick = (e) => {
    const operation = e.target.name;
    setSelectedOperation(operation);
    setOperandOne(valueOne);
    setOperandTwo(valueTwo);
  };

  //caluclate based on the operator
  const calculate = () => {
    setResult(handleCalculate(selectedOperation, operandOne, operandTwo));
    handleSubmit(
      selectedOperation,
      handleCalculate(selectedOperation, operandOne, operandTwo)
    );
  };

  //handling submission
  const handleSubmit = async (operation, result) => {
    try {
      await axios.post(
        "https://calculator-7s59.onrender.com/api/calculations",
        {
          value_one: valueOne,
          value_two: valueTwo,
          operand: operation,
          result: result,
        }
      );
      fetchHistory();
      setMessage("Added to history");
    } catch (error) {
      setMessage("Failed to save the operation to the database");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "https://calculator-7s59.onrender.com/api/calculations"
      );
      setHistory(response.data);
      setValueOne(0);
      setValueTwo(0);
    } catch (error) {
      logger.error("Failed to fetch calculation history:", error);
    }
  };
  
  const lastFiveValues = history.slice(-length);
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          {result ? (
            <p>{result}</p>
          ) : (
            <p>
              {operandOne > 0 && operandOne}{" "}
              {selectedOperation && selectedOperation}{" "}
              {operandTwo > 0 && operandTwo}
            </p>
          )}
        </div>

        <div>
          <div className="input-container">
            <label>Enter the first value</label>
            <input
              type="number"
              value={valueOne}
              onChange={(e) => {
                setValueOne(e.target.value);
                setOperandOne(e.target.value);
              }}
              onInput={() => setResult(0)}
            />
          </div>
          <div className="button-container">
            <button name="+" onClick={handleButtonClick}>
              +
            </button>
            <button name="-" onClick={handleButtonClick}>
              -
            </button>
            <button name="*" onClick={handleButtonClick}>
              *
            </button>
            <button name="/" onClick={handleButtonClick}>
              /
            </button>
          </div>
          <div className="input-container">
            <label>Enter the second value</label>
            <input
              type="number"
              value={valueTwo}
              onChange={(e) => {
                setValueTwo(e.target.value);
                setOperandTwo(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="submit-container">
          <button name="=" onClick={calculate} className="submit-button">
            =
          </button>
        </div>
        <div>
          <p>{message}</p>
        </div>
        <div>
          <h2>Calculation History</h2>
          <ul>
            {lastFiveValues.map((calculation, index) => (
              <li key={index}>
                {calculation.value_one} {calculation.operand}{" "}
                {calculation.value_two} = {calculation.result}
              </li>
            ))}
          </ul>
          <button onClick={() => setLength(length + 1)}>Show More</button>
        </div>
      </div>
    </div>
  );
};

export default App;
