import { combineReducers } from "redux";
import employees from "./employees";
import token from "./token.js";
import teams from "./teams.js";
import alliances from "./alliances.js";
export default combineReducers({
  token,
  employees,
  teams,
  alliances,
});
