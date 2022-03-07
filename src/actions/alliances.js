import * as api from "../helpers/Api/fetchDataApi.js";
import store from "../index";
import * as functionallity from "../helpers/functionallity/updateAlliances";
import * as fetch from "../helpers/Api/fetchDataApi";

// action Creators
export const getAlliances = () => async (dispatch) => {
  try {
    const data = await api.fetchAlliances(store.getState().token);
    dispatch({ type: "FETCH_ALL_ALLIANCES", payload: data });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const addTeamToAlliance =
  (team, alliance, teams, alliances) => async (dispatch) => {
    try {
      const alliancesUpdated = await functionallity.addTeamToAlliance(
        team,
        alliance,
        teams,
        alliances
      );
      var teamsUpdated = await fetch.fetchTeams(store.getState().token);

      dispatch({ type: "UPDATE_TEAMS", payload: teamsUpdated });
      dispatch({ type: "UPDATE_ALLIANCES", payload: alliancesUpdated });
    } catch (err) {
      console.log(err);
    }
  };
export const deleteTeamfromalliance =
  (team, teams, alliance) => async (dispatch) => {
    try {
      const updatedAlliances = await functionallity.updateAlliance(
        team,
        alliance
      );
      const teamsUpdated = await fetch.fetchTeams(store.getState().token);

      dispatch({ type: "UPDATE_TEAMS", payload: teamsUpdated });

      dispatch({ type: "UPDATE_ALLIANCES", payload: updatedAlliances });
    } catch (err) {
      console.log(err);
    }
  };
