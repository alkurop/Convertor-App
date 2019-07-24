import React from "react";
import FinishedComponent from "./FinishedComponent";
import LoadingComponent from "./LoadingComponent";
import SelectionComponent from "./SelectionComponent";
import ErrorComponent from "./ErrorComponent";
import { DownloadState } from "./DownloadItem";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./ItemsAnimation.css"

const FlacToWavConvertorComponent = props => {
  const size = 5;
  const map = props.state.items.slice(0, size).map((item, index) => {
    if (item.status === DownloadState.LOADING) {
      return <LoadingComponent key={item.id} item={item} />;
    } else if (item.status === DownloadState.FINISHED) {
      return <FinishedComponent key={item.id} item={item} />;
    } else if (item.status === DownloadState.SELECTION) {
      return <SelectionComponent key={item.id} item={item} />;
    } else if (item.status === DownloadState.ERROR) {
      return <ErrorComponent key={item.id} item={item} />;
    } else return <div>wtf</div>;
  });

  return (
    <ReactCSSTransitionGroup
      transitionName="items_animation"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {map}
    </ReactCSSTransitionGroup>
  );
};

export default connect(state => ({
  state: state
}))(FlacToWavConvertorComponent);
