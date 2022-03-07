import * as helaperApi from "../Api/helperApis.js";

export const addTeamToAlliance = async (team, alliance, teams, alliances) => {
  try {
    const alliancesUpdated = await helaperApi.addTeamToAllianceApi(
      team,
      alliance
    );

    return alliancesUpdated;
  } catch (err) {
    console.log(err);
  }
};

export const updateAlliance = async (team, alliance) => {
  try {
    const alliancesUpdated = await helaperApi.updateAlliance(team, alliance);

    return alliancesUpdated;
  } catch (err) {
    console.log(err);
  }
};
