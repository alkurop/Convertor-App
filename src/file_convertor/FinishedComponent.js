import React from "react";

const FinishedComponent = ({ item }) => {
  console.log("item", item);
  return (
    <div>
      <div> Finished converting {item.fileName}</div>
      <a href={item.url} target="_blank">
        Download
      </a>
    </div>
  );
};

export default FinishedComponent;
 