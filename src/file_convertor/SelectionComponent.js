import React from "react";

const SelectionComponent = ({ item }) => {
  var file;
  const onFormSubmit = event => {
    event.preventDefault();
    console.log("open file browser", file);
  };
  const onChange = event => {
    file = event.target.files[0];
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" accept="audio/flac" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default SelectionComponent;
