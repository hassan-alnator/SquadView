import axios from "axios";

const fetchToken = async (setToken) => {
  try {
    const resp = await axios.post("http://cms.avertra.com/auth/local", {
      identifier: "Cms@avertra.com",
      password: "Avertra@2021",
    });
    return resp.data.jwt;
  } catch (err) {
    console.error(err);
    return "";
  }
};

const fetchEmployees = async (token) => {
  const emp_url = "http://cms.avertra.com/employees";
  const headers = { Authorization: "Bearer " + token };
  try {
    const resp = await axios.get(emp_url, {
      headers: headers,
    });

    return resp.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
const fetchTeams = async (token) => {
  const team_url = "http://cms.avertra.com/teams";
  const headers = { Authorization: "Bearer " + token };
  try {
    const resp = await axios.get(team_url, {
      headers: headers,
    });
    return resp.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchAlliances = async (token) => {
  const alliance_url = "http://cms.avertra.com/alliances";
  const headers = { Authorization: "Bearer " + token };

  try {
    const resp = await axios.get(alliance_url, {
      headers: headers,
    });
    return resp.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
export { fetchToken, fetchEmployees, fetchTeams, fetchAlliances };
