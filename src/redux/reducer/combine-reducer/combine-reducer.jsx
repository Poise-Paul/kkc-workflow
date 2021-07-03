import { combineReducers } from "redux";
import UserReducer from "../user-reducer/index";
import UtilityReducer from "../utility-reducer/index";


const rootReducer = combineReducers({
  userReducer: UserReducer,
  utilityReducer: UtilityReducer
});

export default rootReducer;
