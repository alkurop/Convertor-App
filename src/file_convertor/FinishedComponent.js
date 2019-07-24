import React from "react";
import { Badge } from "reactstrap";
import Close from "../Close";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div
          className="ui_item"
          style={{ paddingLeft: "10px", paddingTop: "10px" }}
        >
          <Badge color="success">Finished:</Badge> {item.fileName}
        </div>

        <Close />
      </div>
      <div>
        <a
          href={item.url}
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: "10px" }}
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default FinishedComponent;
