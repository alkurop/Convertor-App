import React from "react";
import FinishedComponent from "./FinishedComponent";
import LoadingComponent from "./LoadingComponent";
import SelectionComponent from "./SelectionComponent";
import {DownloadState} from "../DownloadItem"
import { connect } from "react-redux";

import "./Convertor.css";

const FlacToWavConvertorComponent = props => {
  console.log("state", props.state)

  return (
    <div className="Convertor">
       {props.state.map((item, index) => {
         if(item.status === DownloadState.LOADING){
           return  <LoadingComponent key={index}/> 
         }
         else if(item.status === DownloadState.FINISHED){
            return <FinishedComponent key={index} /> 
         }
         else if(item.status === DownloadState.SELECTION){
            return <SelectionComponent key={index} /> 
         }
         else return <div>privet</div>
      })}
    </div>
  );
};

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({})
)(FlacToWavConvertorComponent);
