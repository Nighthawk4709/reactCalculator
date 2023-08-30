import React, { useState } from "react";

const InputComponent = ({ onCalculate }) => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const handleCalculate = () => {

        const num1 = parseInt(firstNumber);
        const num2 = parseInt(secondNumber);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid Numbers");
            return;
        }
        onCalculate(num1, num2);
    };


    return (
        <div>
            <h2>Calculator Input</h2>
            <input
                type="number"
                placeholder="Enter first number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />
            <button onClick={handleCalculate}>Calculate</button>
        </div>
    );
}

export default InputComponent;