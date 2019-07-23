import React from "react";
import { Badge } from "reactstrap";

const FinishedComponent = ({ item }) => {
  return (
    <div
      className="Container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div className="ui_item">
        <Badge color="success">Finished:</Badge>  {item.fileName}
      </div>
      <div>
        <a href={item.url} download target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </div>
    </div>
  );
};

export default FinishedComponent;
