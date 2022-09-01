// Write your solution in this file!
const employee = {
    name: "Kate",
    streetAddress: "8448 SW 68th St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee};

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  
    let newEmployee = {...delete employee.key};
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

