
let employeeObjOne = {
  employeename: "Hameed",
  employeeId: "DX-122",
  email: "hameed@gmail.com",
  phone:"0300-2211090",
}
let employeeObjTwo = {
  employeename: "Adil",
  employeeId: "DX-123",
  email: "adil@gmail.com",
  phone:"0322-3311292",
}
//function that takes an object and saves each property to localstorage and retrive value
function objectDataSavingAndRetrive(empGetObject) {
  
  for (let i in empGetObject) {
  	let jsonObjecttValue = JSON.stringify(empGetObject[i])
    localStorage.setItem(i, jsonObjecttValue);
  }

  
  let newEmpObject = {};
  for (let j = 0; j < localStorage.length; j++) {
    let key = localStorage.key(j);
    newEmpObject[key] = JSON.parse(localStorage.getItem(key));
  }
  return newEmpObject;
}
//calling function
objectDataSavingAndRetrive(employeeObjOne);
console.log(objectDataSavingAndRetrive(employeeObjTwo));