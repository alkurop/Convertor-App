import React from "react";
import "./Close.css";

const Close = ({ onClose }) => {
  const close = () => {
    console.log("closing");
    onClose();
  };
  return (
    <div className="Close" onClick={close}>
      x
    </div>
  );
};

export default Close;
