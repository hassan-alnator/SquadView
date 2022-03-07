const teams = (teams = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_TEAMS":
      return action.payload;

    case "UPDATE_TEAMS":
      return action.payload;
    default:
      return teams;
  }
};
export default teams;
