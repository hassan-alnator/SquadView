const employees = (employees = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_EMPLOYEES":
      return action.payload;
    case "UPDATE_EMPLOYEES":
       return action.payload;
    default:
      return employees;
  }
};
export default employees;
