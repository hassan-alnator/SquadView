import * as fetchApi from "../helpers/Api/fetchDataApi.js";
import * as functionallity from "../helpers/functionallity/updateTeams";
import * as updateEmployee from "../helpers/functionallity/updateEmployee";
import * as fetch from "../helpers/Api/fetchDataApi";
import store from "../index";
// action Creators
export const getTeams = () => async (dispatch) => {
  try {
    const data = await fetchApi.fetchTeams(store.getState().token);
    dispatch({ type: "FETCH_ALL_TEAMS", payload: data });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const AddTeam = (teams, NewTeamName) => async (dispatch) => {
  try {
    await functionallity.addNewTeam(NewTeamName);
    const teams = await fetch.fetchTeams(store.getState().token);
    dispatch({ type: "UPDATE_TEAMS", payload: teams });
  } catch (err) {
    console.log(err);
  }
};
export const updateTeam = (team) => async (dispatch) => {
  try {
    const teams = await functionallity.updateTeams(team);
    dispatch({ type: "UPDATE_TEAMS", payload: teams });
    const alliancesUpdated = await fetch.fetchAlliances(store.getState().token);
    dispatch({ type: "UPDATE_ALLIANCES", payload: alliancesUpdated });
  } catch (err) {
    console.log(err);
  }
};
export const deleteTeam = (team, teams) => async (dispatch) => {
  try {
    const teamsAfterDelete = await functionallity.deleteTeam(team, teams);
    dispatch({ type: "UPDATE_TEAMS", payload: teamsAfterDelete });
    const alliancesUpdated = await fetch.fetchAlliances(store.getState().token);
    dispatch({ type: "UPDATE_ALLIANCES", payload: alliancesUpdated });
  } catch (err) {
    console.log(err);
  }
};

export const addEmployeeToTeam = (employee, team) => async (dispatch) => {
  try {
    const updatedEmployee = await updateEmployee.updateEmployee(employee, team);
    const teamsUpdated = await functionallity.addEmployeeToTeam(
      updatedEmployee,
      team
    );
    const alliancesUpdated = await fetch.fetchAlliances(store.getState().token);
    dispatch({ type: "UPDATE_TEAMS", payload: teamsUpdated });
    dispatch({ type: "UPDATE_ALLIANCES", payload: alliancesUpdated });
  } catch (err) {
    console.log(err);
  }
};
