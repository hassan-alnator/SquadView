import * as api from "../helpers/Api/fetchDataApi.js";

// action Creators
export const getToken = () => async (dispatch) => {
  try {
    const data = await api.fetchToken();
    dispatch({ type: "FETCH_TOKEN", payload: data });
    return data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
