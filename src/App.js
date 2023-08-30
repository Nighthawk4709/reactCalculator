import React, { useState } from "react";
import InputComponent from "./screens/InputComponent";
import ResultsComponent from "./screens/ResultsComponent";

function App() {

  const [results, setResults] = useState([]);

  const handleCalculate = (firstNumber, secondNumber) => {

    const additionResult = firstNumber + secondNumber;
    const subtractionResult = firstNumber - secondNumber;
    const multiplicationResult = firstNumber * secondNumber;
    const divisionResult = firstNumber / secondNumber;

    const newResults = [
      { label: 'Addition', result: additionResult },
      { label: 'Subtraction', result: subtractionResult },
      { label: 'Multiplication', result: multiplicationResult },
      { label: 'Divsion', result: divisionResult },
    ];

    setResults(newResults);
  };

  const handleReset = () => {
    setResults([]);
  };

  return (
    <div className="App">
      <InputComponent onCalculate={handleCalculate} />
      <ResultsComponent results={results} onReset={handleReset}/>
    </div>
  );

}

export default App;
