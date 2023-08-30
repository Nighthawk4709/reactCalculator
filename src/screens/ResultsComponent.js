import React, { useState, Component } from "react";


const ResultsComponent = ({results, onReset}) =>{
    return (
        <div>
          <h2>Results</h2>
          <table>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Label</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{result.label}</td>
                  <td>{result.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default ResultsComponent;