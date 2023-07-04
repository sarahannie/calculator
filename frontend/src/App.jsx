import  { useState } from 'react';
import './App.css'

const App = () => {
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    // Logic to calculate the result
  };
 const handleSubmit = () = () => {

 }
  return (
    <div className='container'>
     <div className="center">
     <div className='display'>
        <p>{result}</p>
      </div>
      <div>
        <input name="1" onClick={() => handleButtonClick(1)}>1</input>
        <button name="+" onClick={() => handleButtonClick('+')}>+</button>
        <button name="2" onClick={() => handleButtonClick(2)}>2</button>
      </div>
      <div>
        <button name="=" onClick={handleCalculate}>=</button>
      </div>
     </div>
    </div>
  );
};

export default App;