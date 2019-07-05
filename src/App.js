import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FlacToWavConvertorComponent from "./file_convertor/FlacToWavConvertorComponent";
import { Button, ButtonGroup } from "reactstrap";

function App() {
  return (
    <div className="App">
      <h1>Convert Flac to Wav</h1>
      <FlacToWavConvertorComponent />
    </div>
  );
}

export default App;
