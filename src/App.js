import React from "react";
import "./App.css";

import FlacToWavConvertorComponent from "./file_convertor/FlacToWavConvertorComponent";

function App() {
  return (
    <div>
      <div className="App">
        <img className="Logo" src="/flac.png" alt="Flac logo" />
        <h1>Convert Flac to Wav</h1>
        <FlacToWavConvertorComponent />
        {/* <FinishedComponent item={{fileName:"test", url:"test"}} /> */}
        <a className="email" href="mailto:alkurop@gmail.com">
          alkurop@gmail.com
        </a>
      </div>
    </div>
  );
}

export default App;
