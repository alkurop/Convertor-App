import React from "react";
import { Button } from "reactstrap";

const FinishedComponent = ({ item }) => {
  const fn = item.fileName.replace("wav", "flac");
  return (
    <div className="Container">
      <h5 className="ui_item">Finished : {item.fileName}</h5>
      <h5><a href={item.url} download target="_blank" rel="noopener noreferrer">
        Download
      </a>
      </h5>
    </div>
  );
};

export default FinishedComponent;
