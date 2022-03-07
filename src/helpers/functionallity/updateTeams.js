import * as helaperApi from "../Api/helperApis.js";

export const addNewTeam = async (NewTeamName) => {
  try {
    const data = await helaperApi.createNewTeam(NewTeamName);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTeam = async (team, teams) => {
  try {
    await helaperApi.deleteTeam(team);
    const data = teams.filter((t) => {
      return t.id !== team.id;
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const updateTeams = async (team) => {
  try {
    const teams = await helaperApi.updateTeams(team);

    return teams;
  } catch (err) {
    console.log(err);
  }
};
export const addEmployeeToTeam = async (employee, team, employees, teams) => {
  try {
    const teamsUpdated = await helaperApi.addEmployeeToTeam(employee, team);

    return teamsUpdated;
  } catch (err) {
    console.log(err);
  }
};
