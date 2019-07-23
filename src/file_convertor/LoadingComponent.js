import React from "react";
import { Spinner } from "reactstrap";

const containerStyle = {
  display: "flex",
};

const LoadingComponent = ({ item }) => {
  return (
    <div className="Container">
      <div style={containerStyle}>
        <Spinner color="black" style={{ width: "2rem", height: "2rem" }} />
        <div style={{marginTop:"4px", marginLeft:"15px"}}>Processing ...</div>
      </div>

      <div style={{ ...containerStyle, marginTop:"20px" }}>{item.fileName}</div>
    </div>
  );
};

export default LoadingComponent;
