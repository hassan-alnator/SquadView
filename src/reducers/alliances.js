const alliances = (alliances = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_ALLIANCES":
      return action.payload;
    case "UPDATE_ALLIANCES":
      return action.payload;
    default:
      return alliances;
  }
};
export default alliances;
