import * as api from "../helpers/Api/fetchDataApi.js";

import store from "../index";
// action Creators
export const getEmployees = () => async (dispatch) => {
  try {
    const data = await api.fetchEmployees(store.getState().token);
    dispatch({ type: "FETCH_ALL_EMPLOYEES", payload: data });
    return data
  } catch (err) {
    console.log(err);
  }
};
