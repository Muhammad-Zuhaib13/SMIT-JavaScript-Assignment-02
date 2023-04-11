let StudentRecordClass10=[]
let studentDataKeyOne ="studenKey1"; //It is a set key for passing object
let studentDataKeyTwo ="studentKey2"; 

//Object one for input
let studentObjectOne = { 
	studentName:"Ali",
	fatherName:"Tariq",
	className:"10th",
	rollNo:"Std-1023",
	classTeacher:"Aftab",
}
//Object tw for user input
let studentObjectTwo = { 
	studentName:prompt("Enter Student Name"),
	fatherName:prompt("Enter Student Father Name"),
	className:prompt("Enter Student Class  Name"),
	rollNo:prompt("Enter Student Roll No"),
	classTeacher:prompt("Enter Student Class Teacher Name"),
}

//Object Data Storing Function
function recordStudentData(getKey, getObject) {
 
 StudentRecordClass10.push(getObject); 
 const jsonStudentStringify = JSON.stringify(getObject);
 localStorage.setItem(getKey, JSON.stringify(getObject));
}


//Object Retriving Function
function retriveMyStudentData(getKey) {
  const storedObject = localStorage.getItem(getKey);
  if (storedObject)
   {
   	const foundStoredObject = JSON.parse(storedObject);
   	return console.log(foundStoredObject);
   }
 	else{
 		return console.log("The key you entered is not found");
 	} 
}
//calling Data Saving function
console.log(recordStudentData(studentDataKeyOne,studentObjectOne));
console.log(recordStudentData(studentDataKeyTwo,studentObjectTwo));
console.log(StudentRecordClass10);

//calling Data Retriving function
retriveMyStudentData(studentDataKeyOne);
retriveMyStudentData("wrongKey");