import React from "react";
import FinishedComponent from "./FinishedComponent";
import LoadingComponent from "./LoadingComponent";
import SelectionComponent from "./SelectionComponent";
import ErrorComponent from "./ErrorComponent";
import { DownloadState } from "./DownloadItem";
import { connect } from "react-redux";
import "./Convertor.css";

const FlacToWavConvertorComponent = props => {
  return (
    <div className="Convertor">
      {props.state.items.map((item, index) => {
        if (item.status === DownloadState.LOADING) {
          return <LoadingComponent key={index} item={item} />;
        } else if (item.status === DownloadState.FINISHED) {
          return <FinishedComponent key={index} item={item} />;
        } else if (item.status === DownloadState.SELECTION) {
          return <SelectionComponent key={index} item={item} />;
        } else if (item.status === DownloadState.ERROR) {
          return (
            <div key={index}>
              <ErrorComponent item={item}/>
              <SelectionComponent key={index} item={item} />
            </div>
          );
        } else return <div>privet</div>;
      })}
    </div>
  );
};

export default connect(state => ({
  state: state
}))(FlacToWavConvertorComponent);
