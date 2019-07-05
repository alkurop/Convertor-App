import React from "react";
import FinishedComponent from "./FinishedComponent";
import LoadingComponent from "./LoadingComponent";
import SelecionComponent from "./SelectionComponent";

import "./Convertor.css";

const FlacToWavConvertorComponent = props => {
  return (
    <div className="Convertor">
      <LoadingComponent />
      <FinishedComponent />
      <SelecionComponent />
    </div>
  );
};

export default FlacToWavConvertorComponent;
