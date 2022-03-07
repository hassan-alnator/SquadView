import axios from "axios";
import store from "../../index";
const addTeamToAllianceApi = async (team, alliance) => {
  var data = JSON.stringify({
    alliance: alliance.id,
  });
  const team_url = `http://cms.avertra.com/teams/${team.id}`;

  var config = {
    method: "put",
    url: team_url,
    headers: {
      Authorization: "Bearer " + store.getState().token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios(config);
    const alliance_url = "http://cms.avertra.com/alliances";
    const headers = { Authorization: "Bearer " + store.getState().token };
    try {
      const resp = await axios.get(alliance_url, {
        headers: headers,
      });
      return resp.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};

const createNewTeam = async (NewTeamName) => {
  var data = JSON.stringify({
    Name: NewTeamName,
  });
  var config = {
    method: "post",
    url: "http://cms.avertra.com/teams",
    headers: {
      Authorization: "Bearer " + store.getState().token,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const resp = await axios(config);
    return resp.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};
const deleteTeam = async (team) => {
  var config = {
    method: "delete",
    url: `http://cms.avertra.com/teams/${team.id}`,
    headers: {
      Authorization: "Bearer " + store.getState().token,
    },
  };
  try {
    await axios(config);
  } catch (err) {
    console.error(err);
  }
};
const addEmployeeToTeam = async (employee, team) => {
  const ids = employee["teams"].map((t) => {
    return t.id;
  });
  var data = JSON.stringify({
    teams: ids.concat(team.id),
  });

  const employee_url = `http://cms.avertra.com/employees/${employee.id}`;

  var config = {
    method: "put",
    url: employee_url,
    headers: {
      Authorization: "Bearer " + store.getState().token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios(config);
    const team_url = "http://cms.avertra.com/teams";
    const headers = { Authorization: "Bearer " + store.getState().token };
    try {
      const resp = await axios.get(team_url, {
        headers: headers,
      });
      return resp.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};
const updateAlliance = async (team, alliance) => {
  const teamsNew = alliance.teams.filter((t) => t !== team);
  var data = JSON.stringify({
    teams: teamsNew,
  });
  const alliance_url_by_id = `http://cms.avertra.com/alliances/${alliance.id}`;

  var config = {
    method: "put",
    url: alliance_url_by_id,
    headers: {
      Authorization: "Bearer " + store.getState().token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios(config);
    const alliances_url = "http://cms.avertra.com/alliances";
    const headers = { Authorization: "Bearer " + store.getState().token };
    try {
      const resp = await axios.get(alliances_url, {
        headers: headers,
      });
      return resp.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};

const updateTeams = async (team) => {
  var data = JSON.stringify({
    alliance: null,
  });
  const teams_url_by_id = `http://cms.avertra.com/teams/${team.id}`;

  var config = {
    method: "put",
    url: teams_url_by_id,
    headers: {
      Authorization: "Bearer " + store.getState().token,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios(config);
    const teams_url = "http://cms.avertra.com/teams";
    const headers = { Authorization: "Bearer " + store.getState().token };
    try {
      const resp = await axios.get(teams_url, {
        headers: headers,
      });
      return resp.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};
const updateEmployee = async (employee, team) => {
  employee.teams.push(team);
  return employee;
};
export {
  addTeamToAllianceApi,
  createNewTeam,
  deleteTeam,
  addEmployeeToTeam,
  updateAlliance,
  updateTeams,
  updateEmployee,
};
