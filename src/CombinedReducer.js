import { combineReducers } from "redux";
import items from "./file_convertor/reducer";
 
const CombinedReducer = combineReducers({
    items
})

export default CombinedReducer;