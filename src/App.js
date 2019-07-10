import React from "react";
import "./App.css";

import FlacToWavConvertorComponent from "./file_convertor/FlacToWavConvertorComponent";
import DonateComponent from "./DonateComponent";

function App() {
  return (
    <div>
      <div className="App">
        <img className="Logo" src="/flac.png" alt="Flac logo" />
        <h1>Convert Flac to Wav</h1>
        <FlacToWavConvertorComponent />
        <div className="other">
          <a className="stuff" href="mailto:alkurop@gmail.com">
            alkurop@gmail.com
          </a>
          <div className="stuff" >
            <DonateComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
