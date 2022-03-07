import * as helaperApi from "../Api/helperApis.js";

export const updateEmployee = async (employee, team) => {
  try {
    const updatedEmployee = await helaperApi.updateEmployee(employee, team);

    return updatedEmployee;
  } catch (err) {
    console.log(err);
  }
};
