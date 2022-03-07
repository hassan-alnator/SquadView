const token = (token = "", action) => {
  switch (action.type) {
    case "FETCH_TOKEN":
      return action.payload;
    default:
      return token;
  }
};
export default token;
