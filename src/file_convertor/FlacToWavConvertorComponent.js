import React from "react";
import FinishedComponent from "./FinishedComponent";
import LoadingComponent from "./LoadingComponent";
import SelectionComponent from "./SelectionComponent";
import ErrorComponent from "./ErrorComponent";
import { DownloadState } from "./DownloadItem";
import { connect } from "react-redux";

const FlacToWavConvertorComponent = props => {
  const testItem = {
    url: "testurl",
    fileName: "testFilename"
  };
  return (
    <div>
      {props.state.items.map((item, index) => {
        if (item.status === DownloadState.LOADING) {
          return <LoadingComponent key={index} item={item} />;
        } else if (item.status === DownloadState.FINISHED) {
          return <FinishedComponent key={index} item={item} />;
        } else if (item.status === DownloadState.SELECTION) {
          return (
            <div>
              <SelectionComponent key={index} item={item} />
              <LoadingComponent key={index} item={testItem} />
              <FinishedComponent key={index} item={testItem} />
              <ErrorComponent key={index} item={testItem} />
            </div>
          );
        } else if (item.status === DownloadState.ERROR) {
          return (
            <div key={index}>
              <ErrorComponent item={item} />
            </div>
          );
        } else return <div>wtf</div>;
      })}
    </div>
  );
};

export default connect(state => ({
  state: state
}))(FlacToWavConvertorComponent);
