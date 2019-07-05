import React from "react";
import "./App.css";

import FlacToWavConvertorComponent from "./file_convertor/FlacToWavConvertorComponent";

function App() {
  return (
    <div className="App">
      <h1>Convert Flac to Wav</h1>
      <FlacToWavConvertorComponent />
    </div>
  );
}

export default App;
